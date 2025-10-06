const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer Transporter
// This is the object that can send emails.
const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
  },
});


app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// API Route to handle form submission
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // --- Server-side Validation ---
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }


  // Mail options
  const mailOptions = {
    from: `"${name}" <${email}>`, // Sender's name and email
    to: process.env.EMAIL_USER,    // Your email ID where you'll receive messages
    subject: `New Message from Portfolio Contact Form`,
    html: `
      <h3>You have a new message!</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };


  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send email.' });
    }
    console.log('Email sent: ' + info.response);
    res.status(200).json({ message: 'Email sent successfully!' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


import express from 'express';
import cors from 'cors';

const app = express();
const port = 5000;


app.use(cors()); 
app.use(express.json());

const validateNumbers = (num1, num2) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
    return false;
  }
  return true;
};

app.post('/add', (req, res) => {
  const { num1, num2 } = req.body;
  if (!validateNumbers(num1, num2)) {
    return res.status(400).json({ error: 'Oops! Please enter valid numbers.' });
  }
  const result = num1 + num2;
  res.json({ result });
});


app.post('/subtract', (req, res) => {
  const { num1, num2 } = req.body;
  if (!validateNumbers(num1, num2)) {
    return res.status(400).json({ error: 'Oops! Please enter valid numbers.' });
  }
  const result = num1 - num2;
  res.json({ result });
});


app.post('/multiply', (req, res) => {
  const { num1, num2 } = req.body;
  if (!validateNumbers(num1, num2)) {
    return res.status(400).json({ error: 'Oops! Please enter valid numbers.' });
  }
  const result = num1 * num2;
  res.json({ result });
});


app.post('/divide', (req, res) => {
  const { num1, num2 } = req.body;
  if (!validateNumbers(num1, num2)) {
    return res.status(400).json({ error: 'Oops! Please enter valid numbers.' });
  }
  if (num2 === 0) {
    return res.status(400).json({ error: "You can't divide by zero! That's silly." });
  }
  const result = num1 / num2;
  res.json({ result });
});


app.listen(port, () => {
  console.log(` Calculator backend is running on http://localhost:${port}`);
});
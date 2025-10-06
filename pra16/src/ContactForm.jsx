// src/ContactForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitted: false,
    message: '',
    isError: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ submitted: true, message: 'Please fill out all fields.', isError: true });
      return;
    }

    axios.post('http://localhost:5000/send-email', formData)
      .then(response => {
        setStatus({ submitted: true, message: 'Message sent! I will get back to you soon.', isError: false });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(error => {
        setStatus({ submitted: true, message: 'Something went wrong. Please try again.', isError: true });
      });
  };

  return (
    // Main container with glassmorphism effect
    <div className="w-full max-w-2xl mx-auto p-8 md:p-10 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-2xl">
      <h2 className="text-4xl font-extrabold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
        Get In Touch
      </h2>
      <p className="text-center text-slate-400 mb-8">Have a question or a project in mind? Drop me a line!</p>
      
      <form onSubmit={handleSubmit} noValidate>
        {/* Input field for Name with icon */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <svg className="w-5 h-5 text-slate-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
            </svg>
          </div>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full pl-12 pr-4 py-3 bg-slate-900 text-white border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300" placeholder="Your Name" />
        </div>

        {/* Input field for Email with icon */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <svg className="w-5 h-5 text-slate-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
            </svg>
          </div>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full pl-12 pr-4 py-3 bg-slate-900 text-white border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300" placeholder="your.email@example.com" />
        </div>

        {/* Textarea for Message */}
        <div className="mb-6">
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="5" className="w-full px-4 py-3 bg-slate-900 text-white border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300" placeholder="Your message..."></textarea>
        </div>

        {/* Submit Button with Gradient and Hover Effects */}
        <div className="text-center">
          <button type="submit" className="w-full font-bold py-3 px-6 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/40 transform hover:scale-105 transition-all duration-300 ease-in-out">
            Send Message
          </button>
        </div>
      </form>
      
      {/* Status Message Display */}
      {status.submitted && (
        <div className={`mt-6 p-4 rounded-lg text-center font-semibold text-white ${status.isError ? 'bg-red-900/50 border border-red-500' : 'bg-green-900/50 border border-green-500'}`}>
          {status.message}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
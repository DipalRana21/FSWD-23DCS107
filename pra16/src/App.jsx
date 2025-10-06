// src/App.jsx
import React from 'react';
import ContactForm from './ContactForm';

function App() {
  return (
    // A dark slate background with a subtle radial gradient for depth
    <div className="min-h-screen bg-slate-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] flex items-center justify-center p-4 font-sans">
      <ContactForm />
    </div>
  );
}

export default App;
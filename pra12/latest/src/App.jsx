import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // We will create this file next

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCalculation = async (operation) => {
    setError(''); // Clear previous errors
    setResult(null); // Clear previous results

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    // Basic frontend validation
    if (isNaN(number1) || isNaN(number2)) {
      setError('Please enter valid numbers in both boxes!');
      return;
    }

    try {
      const response = await axios.post(`http://localhost:5000/${operation}`, {
        num1: number1,
        num2: number2,
      });
      setResult(response.data.result);
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong!');
    }
  };

  return (
    <div className="calculator-container">
      <h1 className="title">Fun Calculator! ✨</h1>

      <div className="input-group">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="First number"
          className="number-input"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Second number"
          className="number-input"
        />
      </div>

      <div className="button-group">
        <button onClick={() => handleCalculation('add')}>➕</button>
        <button onClick={() => handleCalculation('subtract')}>➖</button>
        <button onClick={() => handleCalculation('multiply')}>✖️</button>
        <button onClick={() => handleCalculation('divide')}>➗</button>
      </div>
      
      {result !== null && (
        <div className="result-display">
          <h2>Result is: {result}</h2>
        </div>
      )}

      {error && (
        <div className="error-display">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default App;
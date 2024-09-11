import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        {input || '0'}
      </div>
      <div className="buttons">
        <button onClick={handleClear} className="btn btn-clear">C</button>
        <button onClick={handleDelete} className="btn btn-delete">DEL</button>
        <button onClick={() => handleClick('/')} className="btn btn-operator">/</button>
        <button onClick={() => handleClick('*')} className="btn btn-operator">*</button>

        <button onClick={() => handleClick('7')} className="btn">7</button>
        <button onClick={() => handleClick('8')} className="btn">8</button>
        <button onClick={() => handleClick('9')} className="btn">9</button>
        <button onClick={() => handleClick('-')} className="btn btn-operator">-</button>

        <button onClick={() => handleClick('4')} className="btn">4</button>
        <button onClick={() => handleClick('5')} className="btn">5</button>
        <button onClick={() => handleClick('6')} className="btn">6</button>
        <button onClick={() => handleClick('+')} className="btn btn-operator">+</button>

        <button onClick={() => handleClick('1')} className="btn">1</button>
        <button onClick={() => handleClick('2')} className="btn">2</button>
        <button onClick={() => handleClick('3')} className="btn">3</button>
        <button onClick={handleCalculate} className="btn btn-equal">=</button>

        <button onClick={() => handleClick('0')} className="btn btn-zero">0</button>
        <button onClick={() => handleClick('.')} className="btn">.</button>
      </div>
    </div>
  );
}

export default App;

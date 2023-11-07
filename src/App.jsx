import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';

function App() {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  const handleReset = () => {
    setFormData(null);
  };

  return (
    <div className="container">
      {formData ? (
        <Card data={formData} onReset={handleReset} />
      ) : (
        <Form onSubmit={handleFormSubmit} />
      )}
    </div>
  );
}

export default App;

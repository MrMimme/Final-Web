import React from 'react';

const Card = ({ data, onReset }) => {
  return (
    <div className="card-container">
      <div className="card">
        <h2>Tarjeta de Presentación</h2>
        <p><strong>Nombre:</strong> {data.name}</p>
        <p><strong>Correo:</strong> {data.email}</p>
        <button onClick={onReset}>Volver al Formulario</button>
      </div>
    </div>
  );
};

export default Card;

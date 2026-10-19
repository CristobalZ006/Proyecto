import React from 'react';
import Button from '../atoms/Button';

export default function SkinCard({ skin, esPack, onAgregar }) {
  const { nombre, precio, imagen } = skin || {};

  const handleClick = () => {
    if (onAgregar && skin) {
      onAgregar(skin);
    } else {
      alert(`Añadido al carrito: ${nombre}`);
    }
  };

  return (
    <div className="card bg-dark text-white p-3 border-secondary h-100 text-center shadow-sm">
      <img 
        src={imagen} 
        alt={nombre} 
        className="card-img-top p-1" 
        style={{ 
          height: esPack ? '260px' : '180px', 
          objectFit: 'contain' 
        }} 
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title fw-bold text-light mb-2">{nombre}</h5>
          <p className="card-text text-warning fw-bold fs-5 mb-3">{precio} VP</p>
        </div>

        <Button 
          texto="Comprar" 
          clase="btn-primary" 
          onClick={handleClick} 
        />
      </div>
    </div>
  );
}
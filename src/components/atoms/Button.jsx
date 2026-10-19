import React from 'react';
export default function Button({ texto = 'Comprar', onClick, clase = 'btn-primary' }) {
  return (
    <button className={`btn ${clase} w-100 fw-bold`} onClick={onClick}>
      {texto}
    </button>
  );
}

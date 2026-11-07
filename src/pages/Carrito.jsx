import React, { useState } from 'react';
import Footer from '../components/organisms/Footer';

export default function Carrito({ items = [], onEliminar, onVaciar }) {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    riotId: ''
  });
  const [compraRealizada, setCompraRealizada] = useState(false);
  const totalVP = items.reduce((acc, item) => acc + item.precio, 0);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (items.length === 0) {
      alert('El carrito está vacío. Agrega un producto antes de finalizar.');
      return;
    }

    if (!formData.correo.includes('@') || !formData.correo.includes('.')) {
      alert('Por favor ingresa un correo válido que contenga "@" y un punto "."');
      return;
    }

    setCompraRealizada(true);
    onVaciar();
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container my-5 flex-grow-1">
        <h2 className="text-white mb-4 text-center">Carrito de Compras</h2>

        {compraRealizada ? (
          <div className="alert alert-success text-center p-4 bg-dark text-white border-success my-4">
            <h4 className="text-success mb-3">¡Gracias por tu orden, {formData.nombre}!</h4>
            <p>Hemos enviado el comprobante a <strong>{formData.correo}</strong>.</p>
            <p className="text-secondary">Tus productos han sido asignados a la cuenta Riot ID: <strong>{formData.riotId}</strong>.</p>
            <button 
              className="btn btn-danger mt-3" 
              onClick={() => setCompraRealizada(false)}
            >
              Volver a comprar
            </button>
          </div>
        ) : (
          <div className="row g-4">
            <div className="col-12 col-lg-7">
              <div className="bg-dark p-4 rounded border border-secondary">
                <h4 className="text-warning mb-3">Productos Seleccionados ({items.length})</h4>
                
                {items.length === 0 ? (
                  <div className="text-center py-4 text-secondary">
                    <p className="mb-0 fs-5">Tu carrito está vacío.</p>
                    <small>Agrega skins desde el catálogo para verlas aquí.</small>
                  </div>
                ) : (
                  <div className="list-group list-group-flush mb-3">
                    {items.map((item, index) => (
                      <div 
                        key={index} 
                        className="list-group-item bg-dark text-white border-secondary d-flex justify-content-between align-items-center py-3"
                      >
                        <div className="d-flex align-items-center gap-3">
                          <img 
                            src={item.imagen} 
                            alt={item.nombre} 
                            style={{ width: '70px', height: '45px', objectFit: 'contain' }} 
                          />
                          <div>
                            <h6 className="mb-0 text-white fw-bold">{item.nombre}</h6>
                            <small className="text-warning">{item.precio} VP</small>
                          </div>
                        </div>
                        <button 
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => onEliminar(index)}
                        >
                          Eliminar
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <hr className="border-secondary" />
                <div className="d-flex justify-content-between align-items-center fs-5 fw-bold">
                  <span>Total A Pagar:</span>
                  <span className="text-warning">{totalVP} VP</span>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-5">
              <div className="bg-dark p-4 rounded border border-secondary">
                <h4 className="text-warning mb-3">Datos del Comprador</h4>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label text-light">Nombre Completo</label>
                    <input 
                      type="text" 
                      className="form-control bg-secondary text-white border-0" 
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Ej. Juan Pérez"
                      required 
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label text-light">Correo Electrónico (requiere @ y .)</label>
                    <input 
                      type="email" 
                      className="form-control bg-secondary text-white border-0" 
                      name="correo"
                      value={formData.correo}
                      onChange={handleChange}
                      placeholder="usuario@correo.com"
                      required 
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label text-light">Riot ID + Tag</label>
                    <input 
                      type="text" 
                      className="form-control bg-secondary text-white border-0" 
                      name="riotId"
                      value={formData.riotId}
                      onChange={handleChange}
                      placeholder="Ej. Player#LAS"
                      required 
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-danger w-100 fw-bold py-2"
                    disabled={items.length === 0}
                  >
                    Confirmar Compra ({totalVP} VP)
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
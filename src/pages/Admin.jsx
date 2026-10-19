import React, { useState } from 'react';
import Footer from '../components/organisms/Footer';

export default function Admin({ productos = [], onAgregarProducto, onEliminarProducto }) {
  const [autenticado, setAutenticado] = useState(false);
  const [credenciales, setCredenciales] = useState({ correo: '', password: '' });
  const [errorLogin, setErrorLogin] = useState('');

  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: '',
    precio: '',
    imagen: '',
    categoria: 'Vandal'
  });

  const [notificacion, setNotificacion] = useState('');

  const mostrarNotificacion = (msj) => {
    setNotificacion(msj);
    setTimeout(() => setNotificacion(''), 3000);
  };

  const handleLoginChange = (e) => {
    setCredenciales({ ...credenciales, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (!credenciales.correo.includes('@') || !credenciales.correo.includes('.')) {
      setErrorLogin('Ingresa un correo válido (debe contener "@" y ".").');
      return;
    }

    if (credenciales.password.trim().length < 4) {
      setErrorLogin('La contraseña debe tener al menos 4 caracteres.');
      return;
    }

    setAutenticado(true);
    setErrorLogin('');
  };

  const handleLogout = () => {
    setAutenticado(false);
    setCredenciales({ correo: '', password: '' });
  };

  const handleProductoChange = (e) => {
    setNuevoProducto({ ...nuevoProducto, [e.target.name]: e.target.value });
  };

  const handleAgregar = (e) => {
    e.preventDefault();

    if (!nuevoProducto.nombre || !nuevoProducto.precio || !nuevoProducto.imagen) {
      alert('Por favor completa todos los campos del producto.');
      return;
    }

    const itemCreado = {
      id: Date.now(),
      nombre: nuevoProducto.nombre,
      precio: Number(nuevoProducto.precio),
      imagen: nuevoProducto.imagen,
      categoria: nuevoProducto.categoria
    };

    onAgregarProducto(itemCreado);
    mostrarNotificacion(`✅ Producto "${itemCreado.nombre}" añadido al inventario.`);

    setNuevoProducto({
      nombre: '',
      precio: '',
      imagen: '',
      categoria: 'Vandal'
    });
  };

  const handleEliminar = (id, nombre) => {
    if (window.confirm(`¿Estás seguro de eliminar "${nombre}" del catálogo?`)) {
      onEliminarProducto(id);
      mostrarNotificacion(`🗑️ Producto "${nombre}" eliminado del sistema.`);
    }
  };

  const totalVP = productos.reduce((acc, p) => acc + (Number(p.precio) || 0), 0);

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container my-5 flex-grow-1">

        {!autenticado ? (
          <div className="row justify-content-center my-5">
            <div className="col-12 col-md-6 col-lg-5">
              <div className="bg-dark text-white p-4 rounded border border-danger shadow-lg">
                <div className="text-center mb-4">
                  <h3 className="text-danger fw-bold">🔒 Acceso Administrador</h3>
                  <p className="text-secondary small">Ingresa tus credenciales para gestionar la tienda ValoSpark.</p>
                </div>

                {errorLogin && (
                  <div className="alert alert-danger py-2 text-center" role="alert">
                    <small>{errorLogin}</small>
                  </div>
                )}

                <form onSubmit={handleLoginSubmit}>
                  <div className="mb-3">
                    <label className="form-label text-light">Correo Electrónico Admin</label>
                    <input 
                      type="email" 
                      className="form-control bg-secondary text-white border-0"
                      name="correo"
                      value={credenciales.correo}
                      onChange={handleLoginChange}
                      placeholder="admin@valospark.cl"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label text-light">Contraseña</label>
                    <input 
                      type="password" 
                      className="form-control bg-secondary text-white border-0"
                      name="password"
                      value={credenciales.password}
                      onChange={handleLoginChange}
                      placeholder="••••••••"
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-danger w-100 fw-bold py-2">
                    Ingresar al Panel
                  </button>
                </form>
              </div>
            </div>
          </div>
        ) : (

          <div>
            <div className="d-flex justify-content-between align-items-center mb-4 border-bottom border-secondary pb-3">
              <div>
                <h2 className="text-white mb-0">⚙️ Panel de Gestión de Inventario</h2>
                <small className="text-secondary">
                  Sesión activa: <span className="text-warning">{credenciales.correo}</span>
                </small>
              </div>
              <button className="btn btn-outline-danger btn-sm fw-bold" onClick={handleLogout}>
                🚪 Cerrar Sesión
              </button>
            </div>

            {notificacion && (
              <div className="alert alert-info text-center fw-bold bg-dark text-info border-info mb-4">
                {notificacion}
              </div>
            )}

            <div className="row g-3 mb-4">
              <div className="col-12 col-md-4">
                <div className="bg-dark p-3 rounded border border-secondary text-center">
                  <p className="text-secondary mb-1">Total de Productos</p>
                  <h3 className="text-white fw-bold mb-0">{productos.length}</h3>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="bg-dark p-3 rounded border border-secondary text-center">
                  <p className="text-secondary mb-1">Valor Total del Inventario</p>
                  <h3 className="text-warning fw-bold mb-0">{totalVP} VP</h3>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="bg-dark p-3 rounded border border-secondary text-center">
                  <p className="text-secondary mb-1">Estado del Sistema</p>
                  <h3 className="text-success fw-bold mb-0">● En Línea</h3>
                </div>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-12 col-lg-5">
                <div className="bg-dark p-4 rounded border border-secondary">
                  <h4 className="text-warning mb-3">➕ Añadir Producto</h4>
                  
                  <form onSubmit={handleAgregar}>
                    <div className="mb-3">
                      <label className="form-label text-light">Nombre del Producto</label>
                      <input 
                        type="text" 
                        className="form-control bg-secondary text-white border-0"
                        name="nombre"
                        value={nuevoProducto.nombre}
                        onChange={handleProductoChange}
                        placeholder="Ej. Vandal Imperium"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label text-light">Precio en VP</label>
                      <input 
                        type="number" 
                        className="form-control bg-secondary text-white border-0"
                        name="precio"
                        value={nuevoProducto.precio}
                        onChange={handleProductoChange}
                        placeholder="Ej. 2175"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label text-light">Categoría</label>
                      <select 
                        className="form-select bg-secondary text-white border-0"
                        name="categoria"
                        value={nuevoProducto.categoria}
                        onChange={handleProductoChange}
                      >
                        <option value="Vandal">Vandal</option>
                        <option value="Phantom">Phantom</option>
                        <option value="Operator">Operator</option>
                        <option value="Packs">Packs</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <label className="form-label text-light">URL de la Imagen</label>
                      <input 
                        type="url" 
                        className="form-control bg-secondary text-white border-0"
                        name="imagen"
                        value={nuevoProducto.imagen}
                        onChange={handleProductoChange}
                        placeholder="https://..."
                        required
                      />
                    </div>

                    <button type="submit" className="btn btn-success w-100 fw-bold py-2">
                      Guardar en el Sistema
                    </button>
                  </form>
                </div>
              </div>

              {/* Tabla interactiva de gestión del inventario */}
              <div className="col-12 col-lg-7">
                <div className="bg-dark p-4 rounded border border-secondary">
                  <h4 className="text-warning mb-3">📋 Control de Catálogo</h4>
                  
                  {productos.length === 0 ? (
                    <p className="text-secondary text-center py-4">No hay artículos registrados actualmente.</p>
                  ) : (
                    <div className="table-responsive">
                      <table className="table table-dark table-hover align-middle">
                        <thead>
                          <tr className="border-secondary text-secondary">
                            <th>Vista</th>
                            <th>Nombre</th>
                            <th>Categoría</th>
                            <th>Precio</th>
                            <th className="text-center">Acción</th>
                          </tr>
                        </thead>
                        <tbody>
                          {productos.map((item) => (
                            <tr key={item.id} className="border-secondary">
                              <td>
                                <img 
                                  src={item.imagen} 
                                  alt={item.nombre} 
                                  style={{ width: '55px', height: '35px', objectFit: 'contain' }} 
                                />
                              </td>
                              <td className="fw-bold">{item.nombre}</td>
                              <td><span className="badge bg-secondary">{item.categoria}</span></td>
                              <td className="text-warning fw-bold">{item.precio} VP</td>
                              <td className="text-center">
                                <button 
                                  className="btn btn-outline-danger btn-sm"
                                  onClick={() => handleEliminar(item.id, item.nombre)}
                                >
                                  🗑️ Eliminar
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      <Footer />
    </div>
  );
}
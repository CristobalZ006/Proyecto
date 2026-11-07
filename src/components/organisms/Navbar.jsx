import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ cantidadItems = 0 }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary px-3">
      <div className="container-fluid">
        <Link className="navbar-brand text-danger fw-bold fs-4" to="/">
          ValoSpark
        </Link>
        
        <div className="navbar-nav d-flex flex-row gap-3 align-items-center">
          <Link className="nav-link text-white" to="/">Inicio</Link>
          <Link className="nav-link text-white" to="/vandal">Vandal</Link>
          <Link className="nav-link text-white" to="/phantom">Phantom</Link>
          <Link className="nav-link text-white" to="/operator">Operator</Link>
          <Link className="nav-link text-white" to="/packs">Packs</Link>
          <Link className="btn btn-danger fw-bold ms-2" to="/carrito">
          <Link className="nav-link text-warning fw-bold" to="/admin">⚙️Admin</Link>
            Carrito {cantidadItems > 0 && `(${cantidadItems})`}
          </Link>
        </div>
      </div>
    </nav>
  );
}
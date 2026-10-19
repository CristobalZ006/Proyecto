import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white border-top border-secondary py-4 mt-auto">
      <div className="container">
        <div className="row g-4 align-items-center">

          <div className="col-12 col-md-4 text-center">
            <h5 className="text-warning fw-bold mb-2">Contacto</h5>
            <div className="d-flex flex-column gap-1 text-secondary small">
              <span><strong>Correo / Gmail:</strong> contacto@valospark.cl</span>
              <span><strong>Instagram:</strong> @valospark_store</span>
              <span><strong>Telefono:</strong> +56 9 8765 4321</span>
            </div>
          </div>

          <div className="col-12 col-md-4 text-center text-md-end">
            <p className="text-secondary small mb-0">
              &copy; {new Date().getFullYear()} ValoSpark. Todos los derechos reservados.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
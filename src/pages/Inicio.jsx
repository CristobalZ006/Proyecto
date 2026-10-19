import React from 'react';
import { Link } from 'react-router-dom';
import SkinCard from '../components/organisms/SkinCard';
import Footer from '../components/organisms/Footer';
import '../styles/estilos.css';

export default function Inicio({ onAgregar }) {
  const productoDestacado = {
    id: 99,
    nombre: 'Pack Kuronami 2.0',
    precio: 9500,
    imagen: 'https://wiki.playvalorant.com/en-us/images/thumb/Bundle_Kuronami_V26.png/1024px-Bundle_Kuronami_V26.png?a0caa'
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container my-4 flex-grow-1">
        
        {/* Banner principal */}
        <div className="text-center py-5 my-2">
          <h1 className="display-3 fw-bold text-plus mb-3">
            Bienvenido a ValoSpark
          </h1>
          <p className="lead text-light mb-4 mx-auto" style={{ maxWidth: '750px' }}>
            Explora los aspectos más exclusivos, colecciones de paquetes y diseños destacados para tus armas favoritas.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/vandal" className="btn btn-primary btn-lg px-4 fw-bold">
              Ver Vandal
            </Link>
            <Link to="/packs" className="btn btn-primary btn-lg px-4 fw-bold">
              Ver Packs
            </Link>
          </div>
        </div>

        <section className="my-5">
          <h2 className="text-center text-white fw-bold mb-4">
            Producto Destacado
          </h2>
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <SkinCard
                skin={productoDestacado}
                esPack={true}
                onAgregar={onAgregar}
              />
            </div>
          </div>
        </section>

        {/* Secciones para Explorar */}
        <section className="my-5">
          <h2 className="text-center text-white fw-bold mb-4">
            Secciones para Explorar
          </h2>
          <div className="row g-4">

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card bg-dark text-white border-secondary h-100 text-center p-3">
                <h3 className="h4 text-warning">Vandal</h3>
                <p className="text-secondary small">Los mejores aspectos para el rifle principal.</p>
                <Link to="/vandal" className="btn btn-outline-primary mt-auto fw-bold">
                  Explorar
                </Link>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card bg-dark text-white border-secondary h-100 text-center p-3">
                <h3 className="h4 text-warning">Phantom</h3>
                <p className="text-secondary small">Diseños elegantes para el rifle silenciado.</p>
                <Link to="/phantom" className="btn btn-outline-primary mt-auto fw-bold">
                  Explorar
                </Link>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card bg-dark text-white border-secondary h-100 text-center p-3">
                <h3 className="h4 text-warning">Operator</h3>
                <p className="text-secondary small">Personaliza el francotirador más letal.</p>
                <Link to="/operator" className="btn btn-outline-primary mt-auto fw-bold">
                  Explorar
                </Link>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card bg-dark text-white border-secondary h-100 text-center p-3">
                <h3 className="h4 text-warning">Packs</h3>
                <p className="text-secondary small">Colecciones completas con descuentos en VP.</p>
                <Link to="/packs" className="btn btn-outline-primary mt-auto fw-bold">
                  Explorar
                </Link>
              </div>
            </div>

          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}
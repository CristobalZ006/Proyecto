import React from 'react';
import SkinCard from '../components/organisms/SkinCard';
import Footer from '../components/organisms/Footer';

export default function Operator({ productos = [], onAgregar }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container my-4 flex-grow-1">
        <h2 className="text-white mb-4 text-center">Skins de Operator</h2>

        {productos.length === 0 ? (
          <p className="text-center text-secondary py-5">
            No hay skins de Operator disponibles en este momento.
          </p>
        ) : (
          <div className="row g-3">
            {productos.map((skin) => (
              <div key={skin.id} className="col-12 col-md-4">
                <SkinCard
                  skin={skin}
                  onAgregar={onAgregar}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
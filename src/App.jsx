import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/organisms/Navbar';
import Inicio from './pages/Inicio';
import Vandal from './pages/Vandal';
import Phantom from './pages/Phantom';
import Operator from './pages/Operator';
import Packs from './pages/Packs';
import Carrito from './pages/Carrito';
import Admin from './pages/Admin';
import './styles/estilos.css';

export default function App() {
  const [carrito, setCarrito] = useState([]);

  const [inventario, setInventario] = useState([
    // Vandal
    { id: 1, nombre: 'Vandal Reaver', precio: 1500, categoria: 'Vandal', imagen: 'https://wiki.playvalorant.com/en-us/images/Reaver_Vandal.png?85da5' },
    { id: 2, nombre: 'Vandal Prime', precio: 1500, categoria: 'Vandal', imagen: 'https://wiki.playvalorant.com/en-us/images/Prime_Vandal.png?ef041' },
    { id: 3, nombre: 'Vandal Primordium', precio: 1900, categoria: 'Vandal', imagen: 'https://wiki.playvalorant.com/en-us/images/Primordium_Vandal.png?10908' },
    { id: 4, nombre: 'Vandal Glitchpop', precio: 2000, categoria: 'Vandal', imagen: 'https://wiki.playvalorant.com/en-us/images/Glitchpop_Vandal.png?b4c47' },
    
    { id: 5, nombre: 'Phantom Recon', precio: 1775, categoria: 'Phantom', imagen: 'https://wiki.playvalorant.com/en-us/images/Recon_Phantom.png' },
    { id: 6, nombre: 'Phantom Protocol 781-A', precio: 2175, categoria: 'Phantom', imagen: 'https://wiki.playvalorant.com/en-us/images/Protocol_781-A_Phantom.png' },
    
    { id: 7, nombre: 'Operator Araxys', precio: 2175, categoria: 'Operator', imagen: 'https://wiki.playvalorant.com/en-us/images/Araxys_Operator_Silver.png?b216c' },
    { id: 8, nombre: 'Operator Reaver', precio: 1775, categoria: 'Operator', imagen: 'https://wiki.playvalorant.com/en-us/images/Reaver_Operator_White.png?d838c' },
    
    { id: 9, nombre: 'Pack Kuronami 2.0', precio: 9500, categoria: 'Packs', imagen: 'https://wiki.playvalorant.com/en-us/images/thumb/Bundle_Kuronami_V26.png/1024px-Bundle_Kuronami_V26.png?a0caa' },
    { id: 10, nombre: 'Pack Recon', precio: 6000, categoria: 'Packs', imagen: 'https://wiki.playvalorant.com/en-us/images/thumb/Bundle_Recon.png/1024px-Bundle_Recon.png' }
  ]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => [...prev, producto]);
    alert(`¡${producto.nombre} se agregó al carrito!`);
  };

  const eliminarDelCarrito = (indexEliminar) => {
    setCarrito(carrito.filter((_, index) => index !== indexEliminar));
  };

  const vaciarCarrito = () => setCarrito([]);

  const agregarProductoInventario = (nuevoProducto) => {
    setInventario((prev) => [...prev, nuevoProducto]);
  };

  const eliminarProductoInventario = (idEliminar) => {
    setInventario((prev) => prev.filter((item) => item.id !== idEliminar));
  };

  return (
    <div className="text-white min-vh-100">
      <Navbar cantidadItems={carrito.length} />
      <Routes>
        <Route path="/" element={<Inicio onAgregar={agregarAlCarrito} />} />
        
        <Route 
          path="/vandal" 
          element={
            <Vandal 
              productos={inventario.filter(item => item.categoria === 'Vandal')} 
              onAgregar={agregarAlCarrito} 
            />
          } 
        />
        <Route 
          path="/phantom" 
          element={
            <Phantom 
              productos={inventario.filter(item => item.categoria === 'Phantom')} 
              onAgregar={agregarAlCarrito} 
            />
          } 
        />
        <Route 
          path="/operator" 
          element={
            <Operator 
              productos={inventario.filter(item => item.categoria === 'Operator')} 
              onAgregar={agregarAlCarrito} 
            />
          } 
        />
        <Route 
          path="/packs" 
          element={
            <Packs 
              productos={inventario.filter(item => item.categoria === 'Packs')} 
              onAgregar={agregarAlCarrito} 
            />
          } 
        />

        <Route 
          path="/carrito" 
          element={
            <Carrito 
              items={carrito} 
              onEliminar={eliminarDelCarrito} 
              onVaciar={vaciarCarrito} 
            />
          } 
        />
        <Route 
          path="/admin" 
          element={
            <Admin 
              productos={inventario}
              onAgregarProducto={agregarProductoInventario}
              onEliminarProducto={eliminarProductoInventario}
            />
          } 
        />
      </Routes>
    </div>
  );
}
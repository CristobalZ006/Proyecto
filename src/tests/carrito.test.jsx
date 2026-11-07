import { describe, it, expect, beforeEach } from 'vitest';

describe('Pruebas Unitarias - Inventario y Carrito ValoSpark', () => {

  let inventarioPrueba;

  beforeEach(() => {
    inventarioPrueba = [
      { id: 1, nombre: 'Vandal Reaver', precio: 1500, categoria: 'Vandal' },
      { id: 2, nombre: 'Phantom Recon', precio: 1775, categoria: 'Phantom' }
    ];
  });

  it('Debe calcular correctamente el valor acumulado del inventario en VP', () => {
    const totalVP = inventarioPrueba.reduce((acc, item) => acc + item.precio, 0);
    expect(totalVP).toBe(3275);
  });

  it('Debe agregar un nuevo producto al inventario', () => {
    const nuevoProducto = { id: 3, nombre: 'Operator Araxys', precio: 2175, categoria: 'Operator' };
    const inventarioActualizado = [...inventarioPrueba, nuevoProducto];

    expect(inventarioActualizado.length).toBe(3);
    expect(inventarioActualizado[2].nombre).toBe('Operator Araxys');
  });

  it('Debe eliminar un producto según su ID', () => {
    const idAEliminar = 1;
    const inventarioFiltrado = inventarioPrueba.filter(item => item.id !== idAEliminar);

    expect(inventarioFiltrado.length).toBe(1);
    expect(inventarioFiltrado[0].id).toBe(2);
  });
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Button from '../components/atoms/Button';

describe('Prueba Unitaria - Componente Atómico Button', () => {
  it('Debe renderizar el elemento botón correctamente en el DOM', () => {
    render(<Button text="Comprar Skin">Comprar Skin</Button>);

    // Evalúa la presencia del elemento <button> en la interfaz
    const boton = screen.getByRole('button');
    expect(boton).toBeTruthy();
  });
});
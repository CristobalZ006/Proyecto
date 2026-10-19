import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Input from '../components/atoms/Input';

describe('Prueba Unitaria - Componente Atómico Input', () => {
  it('Debe renderizar un campo de entrada con su texto de sugerencia (placeholder)', () => {
    render(<Input placeholder="Ingresa tu correo" />);

    const campoInput = screen.getByPlaceholderText('Ingresa tu correo');
    expect(campoInput).toBeTruthy();
  });
});
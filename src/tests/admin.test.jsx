import { describe, it, expect } from 'vitest';

describe('Pruebas Unitarias - Validaciones de Login Admin', () => {

  const validarCorreo = (correo) => correo.includes('@') && correo.includes('.');
  const validarPassword = (pass) => pass.trim().length >= 4;

  it('Debe rechazar correos que no contengan "@" o "."', () => {
    expect(validarCorreo('adminvalospark.cl')).toBe(false);
    expect(validarCorreo('admin@valosparkcl')).toBe(false);
  });

  it('Debe aceptar correos con formato válido', () => {
    expect(validarCorreo('admin@valospark.cl')).toBe(true);
  });

  it('Debe rechazar contraseñas de menos de 4 caracteres', () => {
    expect(validarPassword('123')).toBe(false);
  });

  it('Debe permitir contraseñas de 4 o más caracteres', () => {
    expect(validarPassword('1234')).toBe(true);
  });
});
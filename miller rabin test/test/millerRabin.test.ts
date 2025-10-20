import { describe, it, expect } from 'bun:test';
import { fastPrime } from '../index.ts';

describe('Función fastPrime', () => {
  it('debería devolver true para números primos conocidos', () => {
    expect(fastPrime(2)).toBe(true);
    expect(fastPrime(3)).toBe(true);
    expect(fastPrime(5)).toBe(true);
    expect(fastPrime(7)).toBe(true);
  });
  it('debería devolver false para números compuestos conocidos', () => {
    expect(fastPrime(4)).toBe(false);
    expect(fastPrime(6)).toBe(false);
    expect(fastPrime(8)).toBe(false);
    expect(fastPrime(9)).toBe(false);
  });
  it('debería manejar números grandes correctamente', () => {
    expect(fastPrime(104729)).toBe(true); // Primo grande
    expect(fastPrime(104728)).toBe(false); // Compuesto grande
  });
  it('debería lanzar un error para entradas inválidas', () => {
    expect(() => fastPrime(-5)).toThrow('Input must be a non-negative integer');
    expect(() => fastPrime(0)).toThrow('Input must be a non-negative integer');
    expect(() => fastPrime(1.5)).toThrow('Input must be an integer');
  });
});
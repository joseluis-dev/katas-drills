import { describe, it, expect } from 'bun:test'
import { mcd } from '../index'

describe('Función mcd', () => {
  it('debería retornar el máximo común divisor de dos números positivos', () => {
    expect(mcd(48, 18)).toBe(6);
    expect(mcd(56, 98)).toBe(14);
    expect(mcd(101, 10)).toBe(1);
  });
  it('debería retornar el máximo común divisor cuando uno de los números es cero', () => {
    expect(mcd(0, 5)).toBe(5);
    expect(mcd(7, 0)).toBe(7);
  });
  it('debería retornar el máximo común divisor de dos números iguales', () => {
    expect(mcd(9, 9)).toBe(9);
    expect(mcd(15, 15)).toBe(15);
  });
  it('debería retornar el máximo común divisor de números primos', () => {
    expect(mcd(13, 17)).toBe(1);
    expect(mcd(29, 31)).toBe(1);
  });
});
import { describe, it, expect } from 'bun:test'
import { primeFactors } from '../index.ts'

describe('Función primeFactors', () => {
  it('debería lanzar un error para números negativos o cero', () => {
    expect(() => primeFactors(-5)).toThrow('Input must be a non-negative and non-zero integer')
    expect(() => primeFactors(0)).toThrow('Input must be a non-negative and non-zero integer')
  })
  it('debería devolver un array vacío para el número 1', () => {
    expect(primeFactors(1)).toEqual([])
  })
  it('debería devolver los factores primos correctos para números mayores que 1', () => {
    expect(primeFactors(2)).toEqual([2])
    expect(primeFactors(15)).toEqual([3, 5])
    expect(primeFactors(28)).toEqual([2, 2, 7])
    expect(primeFactors(97)).toEqual([97]) // 97 es primo
    expect(primeFactors(29)).toEqual([29]) // 29 es primo
    expect(primeFactors(99)).toEqual([3, 3, 11])
    // expect(primeFactors(13195)).toEqual([5, 7, 13, 29])
  })
})
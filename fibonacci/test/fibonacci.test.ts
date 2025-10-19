import { describe, it, expect } from 'bun:test'
import { fibonacci, serieFibonacci, fibonacciIterativo } from '../index'

describe('Fibonacci Function', () => {
  it('debería devolver [0, 1] para fibonacci(0)', () => {
    expect(fibonacci(0n)).toEqual([0n, 1n])
  })

  it('debería devolver los últimos dos números de Fibonacci para fibonacci(10)', () => {
    expect(fibonacci(10n)).toEqual([55n, 89n])
  })
})

describe('Serie Fibonacci Function', () => {
  it('debería devolver [0] para serieFibonacci(0)', () => {
    expect(serieFibonacci(0)).toEqual([0n])
  })

  it('debería devolver [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55] para serieFibonacci(10)', () => {
    expect(serieFibonacci(10)).toEqual([0n, 1n, 1n, 2n, 3n, 5n, 8n, 13n, 21n, 34n, 55n])
  })
  it('debería lanzar un error para serieFibonacci(-1)', () => {
    expect(() => serieFibonacci(-1)).toThrow('n debe ser >= 0')
  })
})

describe('Fibonacci Iterativo Function', () => {
  it('debería devolver [0] para fibonacciIterativo(0)', () => {
    expect(fibonacciIterativo(0)).toEqual([0n])
  })

  it('debería devolver [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55] para fibonacciIterativo(10)', () => {
    expect(fibonacciIterativo(10)).toEqual([0n, 1n, 1n, 2n, 3n, 5n, 8n, 13n, 21n, 34n, 55n])
  })

  it('debería lanzar un error para fibonacciIterativo(-1)', () => {
    expect(() => fibonacciIterativo(-1)).toThrow('n debe ser >= 0')
  })
})
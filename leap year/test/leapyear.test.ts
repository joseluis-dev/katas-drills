import { describe, it, expect } from 'bun:test'
import { isLeapYear } from '../index'

describe('Función isLeapYear', () => {
  it('debería retornar true para años bisiestos', () => {
    expect(isLeapYear(2000)).toBe(true) // Divisible por 400
    expect(isLeapYear(2004)).toBe(true) // Divisible por 4 pero no por 100
    expect(isLeapYear(2020)).toBe(true) // Divisible por 4 pero no por 100
  })
  it('debería retornar false para años no bisiestos', () => {
    expect(isLeapYear(2001)).toBe(false)
    expect(isLeapYear(1900)).toBe(false) // Divisible por 100 pero no por 400
    expect(isLeapYear(2021)).toBe(false)
  })
})
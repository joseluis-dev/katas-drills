import { describe, it, expect } from 'bun:test'
import { stringCalculator } from '../index.ts'

describe("Función stringCalculator", () => {
  it("debería devolver 0 para una cadena vacía", () => {
    expect(stringCalculator("")).toBe(0);
  });

  it("debería devolver la suma de 1 y 2 con la cadena '1,2'", () => {
    expect(stringCalculator("1,2")).toBe(3);
  });

  it("debería sumar múltiples números separados por comas", () => {
    expect(stringCalculator("1,2,3,4,5")).toBe(15);
  });

  it("debería manejar saltos de línea como separadores", () => {
    expect(stringCalculator("1\n2,3")).toBe(6);
  });

  it("debería permitir definir un delimitador personalizado", () => {
    expect(stringCalculator("//;\n1;2;3")).toBe(6);
    expect(stringCalculator("//\n\n1\n2\n3")).toBe(6);
  });

  it("debería arrojar un error para números negativos", () => {
    expect(() => stringCalculator("1,-2,3,-4")).toThrow("Números negativos no permitidos: -2,-4");
  });

  it("debería ignorar números mayores o iguales a 1000", () => {
    expect(stringCalculator("2,1000,1001,3")).toBe(5);
  });

  it("debería permitir delimitadores de cualquier longitud", () => {
    expect(stringCalculator("//[***]\n1***2***3")).toBe(6);
  });

  it("debería permitir múltiples delimitadores", () => {
    expect(stringCalculator("//[*][%]\n1*2%3")).toBe(6);
    expect(stringCalculator("//[**][%%][###]\n1**2%%3###4")).toBe(10);
  });
})
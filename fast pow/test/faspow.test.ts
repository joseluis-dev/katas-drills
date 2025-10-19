import { describe, it, expect } from "bun:test"
import { fastPow } from "../index";

describe("Función fastPow", () => {
  it("debería estar definida", () => {
    expect(fastPow).toBeDefined();
  });
  it("debería devolver el cuadrado de un número", () => {
    expect(fastPow(2, 2)).toBe(4);
    expect(fastPow(3, 2)).toBe(9);
    expect(fastPow(4, 2)).toBe(16);
  });
  it("debería devolver la potencia de números muy grandes", () => {
    expect(fastPow(2, 10)).toBe(1024);
    expect(fastPow(3, 7)).toBe(2187);
    expect(fastPow(4, 5)).toBe(1024);
    expect(fastPow(2, 100)).toBe(1267650600228229401496703205376);
  });
});
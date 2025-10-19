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
});
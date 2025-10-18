import { describe, it, expect } from "bun:test";
import { isPalindrome } from "../index";

describe("Función isPalindrome debe retornar true para palíndromos y false para no palíndromos", () => {
  it('debería retornar true para "anilina"', () => {
    expect(isPalindrome("anilina")).toBe(true);
  });
  it('debería retornar false para "palabra"', () => {
    expect(isPalindrome("palabra")).toBe(false);
  });
});
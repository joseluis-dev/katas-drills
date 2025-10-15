import { describe, it, expect } from "bun:test";
import { isMultipleOfThree, isMultipleOfFive, isMultipleOfThreeAndFive, numbers, fizzbuzz, fizzbuzzAdvanced, hasThree, hasFive, hasThreeAndFive } from "../index";

describe("Función isMultipleOfThree", () => {
  it("debería retornar true para múltiplos de 3", () => {
    expect(isMultipleOfThree(3)).toBe(true);
    expect(isMultipleOfThree(9)).toBe(true);
    expect(isMultipleOfThree(10)).toBe(false);
  });
});

describe("Función isMultipleOfFive", () => {
  it("debería retornar true para múltiplos de 5", () => {
    expect(isMultipleOfFive(5)).toBe(true);
    expect(isMultipleOfFive(10)).toBe(true);
    expect(isMultipleOfFive(19)).toBe(false);
  });
});

describe("Array de números", () => {
  it("debería contener los números del 1 al 100", () => {
    expect(numbers).toHaveLength(100);
    expect(numbers).toContain(1);
    expect(numbers).toContain(100);
  });
});

describe("Función isMultipleOfThreeAndFive", () => {
  it("debería retornar true para múltiplos de 3 y 5", () => {
    expect(isMultipleOfThreeAndFive(15)).toBe(true);
    expect(isMultipleOfThreeAndFive(30)).toBe(true);
    expect(isMultipleOfThreeAndFive(10)).toBe(false);
  });
});

describe("Función fizzbuzz", () => {
  it('debería retornar "Fizz" para múltiplos de 3', () => {
    expect(fizzbuzz(3)).toBe("Fizz");
    expect(fizzbuzz(9)).toBe("Fizz");
  });
  it('debería retornar "Buzz" para múltiplos de 5', () => {
    expect(fizzbuzz(5)).toBe("Buzz");
    expect(fizzbuzz(10)).toBe("Buzz");
  });
  it('debería retornar "FizzBuzz" para múltiplos de 3 y 5', () => {
    expect(fizzbuzz(15)).toBe("FizzBuzz");
    expect(fizzbuzz(30)).toBe("FizzBuzz");
  });
  it("debería retornar el número para otros casos", () => {
    expect(fizzbuzz(1)).toBe(1);
    expect(fizzbuzz(2)).toBe(2);
    expect(fizzbuzz(4)).toBe(4);
  });
});

describe("Función hasThree", () => {
  it('debería retornar true si el número contiene "3"', () => {
    expect(hasThree(3)).toBe(true);
    expect(hasThree(13)).toBe(true);
    expect(hasThree(54)).toBe(false);
  });
});
describe("Función hasFive", () => {
  it('debería retornar true si el número contiene "5"', () => {
    expect(hasFive(5)).toBe(true);
    expect(hasFive(52)).toBe(true);
    expect(hasFive(10)).toBe(false);
  });
});

describe("Función hasThreeAndFive", () => {
  it('debería retornar true si el número contiene "3" y "5"', () => {
    expect(hasThreeAndFive(35)).toBe(true);
    expect(hasThreeAndFive(53)).toBe(true);
    expect(hasThreeAndFive(9)).toBe(false);
  });
});

describe("Función fizzbuzz avanzado", () => {
  it('debería retornar "Fizz" para múltiplos de 3 o que contienen 3', () => {
    expect(fizzbuzzAdvanced(3)).toBe("FizzFizz");
    expect(fizzbuzzAdvanced(13)).toBe("Fizz");
    expect(fizzbuzzAdvanced(9)).toBe("Fizz");
  });
  it('debería retornar "Buzz" para múltiplos de 5 o que contienen 5', () => {
    expect(fizzbuzzAdvanced(5)).toBe("BuzzBuzz");
    expect(fizzbuzzAdvanced(35)).toBe("FizzBuzzBuzz");
    expect(fizzbuzzAdvanced(10)).toBe("Buzz");
  });
});
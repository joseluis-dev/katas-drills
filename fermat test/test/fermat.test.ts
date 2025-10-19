import { describe, it, expect } from "bun:test"
import { fermatTest, fastPrime, expmod } from "../index"

describe("Exponentiation by Squaring", () => {
  it("should compute (base^exp) % m correctly", () => {
    expect(expmod(1, 3, 3)).toBe(1);
    expect(expmod(2, 3, 3)).toBe(2);
    expect(expmod(3, 3, 3)).toBe(0);
  });
});

describe("Fermat Test Function", () => {
  it("should return true for known prime numbers", () => {
    expect(fermatTest(2)).toBe(true);
    expect(fermatTest(3)).toBe(true);
    expect(fermatTest(13)).toBe(true);
    expect(fermatTest(97)).toBe(true);
  });
});

describe("Fermat Primality Test", () => {
  it("should return false for n less than 2", () => {
    expect(fastPrime(1, 5)).toBe(false);
    expect(fastPrime(0, 10)).toBe(false);
    // expect(fastPrime(-5, 15)).toBe(false);
  });
  it("should return true for known prime numbers", () => {
    expect(fastPrime(2, 5)).toBe(true);
    expect(fastPrime(3, 5)).toBe(true);
    expect(fastPrime(13, 5)).toBe(true);
    expect(fastPrime(97, 10)).toBe(true);
  });
  it("should return false for known composite numbers", () => {
    expect(fastPrime(4, 5)).toBe(false);
    expect(fastPrime(9, 5)).toBe(false);
    expect(fastPrime(15, 5)).toBe(false);
    expect(fastPrime(100, 10)).toBe(false);
  });
  it("should handle larger numbers correctly", () => {
    expect(fastPrime(7919, 20)).toBe(true);
    expect(fastPrime(8000, 20)).toBe(false);
  });
});
export const expmod = (base: number, exp: number, m: number): number => {
  if (exp === 0) return 1 % m;
  if (exp % 2 === 0) {
    const half = expmod(base, exp >> 1, m);
    return (half * half) % m;
  }
  return (base * expmod(base, exp - 1, m)) % m;
}

export const decompose = (n: number): { d: number; s: number } => {
  let s = 0;
  let d = n - 1;
  while (d % 2 === 0) {
    d >>= 1;
    s++;
  }
  return { d, s };
}

export const millerRabinIterative = (n: number, a: number, d: number, s: number): boolean => {
  let x = expmod(a, d, n);
  if (x === 1 || x === n - 1) return true;
  for (let r = 1; r < s; r++) {
    x = (x * x) % n;
    if (x === n - 1) return true;
    if (x === 1) return false;
  }
  return false;
}

export const millerRabin = (n: number): boolean => {
  if (n === 2) return true;
  if (n < 2 || n % 2 === 0) return false;
  const { d, s } = decompose(n);

  const a = 2 + Math.floor(Math.random() * (n - 3)); // [2, n-2]
  return millerRabinIterative(n, a, d, s);
}

export const fastPrime = (n: number, k: number = 5): boolean => {
  if (k === 0) return true;
  if (n <= 0) throw new Error('Input must be a non-negative integer');
  if (!Number.isInteger(n)) throw new Error('Input must be an integer');
  if (millerRabin(n)) return fastPrime(n, k - 1);
  return false;
}

const main = () => {
  const numbers = [
    {
      n: 1,
      isPrime: fastPrime(1)
    },
    {
      n: 3,
      isPrime: fastPrime(3)
    },
    {
      n: 29,
      isPrime: fastPrime(29)
    },
    {
      n: 99,
      isPrime: fastPrime(99)
    },
    {
      n: 101,
      isPrime: fastPrime(101)
    },
    {
      n: 561, // Carmichael number
      result: fastPrime(561, 10),
    },
    {
      n: 1105, // Carmichael number
      result: fastPrime(1105, 10),
    },
    {
      n: 1729, // Carmichael number
      result: fastPrime(1729, 10),
    },
  ];

  console.log(numbers);
}

// main();

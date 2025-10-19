export const expmod = (base: number, exp: number, m: number): number => {
  if (exp === 0) return 1;
  if (exp % 2 === 0) {
    // **** Causa un desbordamiento potencial ****
    // const result = expmod(base * base, Math.floor(exp / 2), m);
    // return result % m;
    const half = expmod(base, Math.floor(exp / 2), m);
    return (half * half) % m;
  } else {
    return (base * expmod(base, exp - 1, m)) % m;
  }
};

export const fermatTest = (n: number): boolean => {  
  const tryIt = (a: number): boolean => {
    return expmod(a, n, n) === a;
  };
  
  const randomA = 1 + Math.floor(Math.random() * (n - 1));
  return tryIt(randomA);
}

export const fastPrime = (n: number, k: number): boolean => {
  if (k === 0) return true;
  if (fermatTest(n)) return fastPrime(n, k - 1);
  return false;
}

const main = () => {
  const numbers = [
    {
      n: 97,
      k: 5,
      result: fastPrime(97, 5),
    },
    {
      n: 100,
      k: 5,
      result: fastPrime(100, 5),
    },
  ];
  console.log(numbers);
};

main();

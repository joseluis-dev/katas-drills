export const fastPow = (b: number, n: number): number => {
  if (n === 0) return 1;
  if (n % 2 === 1) return b * fastPow(b, n - 1);
  return fastPow(b * b, n / 2);
};

const main = () => {
  const numbers = [
    {
      base: 2,
      exponent: 10,
      result: null,
    },
    {
      base: 3,
      exponent: 7,
      result: null,
    },
    {
      base: 4,
      exponent: 5,
      result: null,
    },
    {
      base: 2,
      exponent: 1000,
      result: null,
    },
  ];

  const results = numbers.map(({ base, exponent }) => ({
    base,
    exponent,
    result: fastPow(base, exponent),
  }));
  console.log(results);
};

main();

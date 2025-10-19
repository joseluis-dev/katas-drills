export const fastPow = (b: number, n: number): number => {
  if (n === 0) return 1;
  if (n % 2 === 1) return b * fastPow(b, n - 1);
  const result = fastPow(b, n / 2);
  return result * result;
};

const main = () => {
  const numbers = [
    {
      base: 2,
      exponent: 10,
      result: fastPow(2, 10),
    },
    {
      base: 3,
      exponent: 7,
      result: fastPow(3, 7),
    },
    {
      base: 4,
      exponent: 5,
      result: fastPow(4, 5),
    },
    {
      base: 2,
      exponent: 1000,
      result: fastPow(2, 1000),
    },
  ];

  console.log(numbers);
};

main();

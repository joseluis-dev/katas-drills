export const mcd = (a: number, b: number): number => {
  if (b === 0) return a;
  return mcd(b, a % b);
}

const main = () => {
  const num1 = 48;
  const num2 = 18;
  const result = mcd(num1, num2);
  console.log(`El máximo común divisor de ${num1} y ${num2} es ${result}`);
}

main();
export const numbers: number[] = Array.from({ length: 100 }, (_, i) => i + 1);

export const isMultipleOfThree = (n: number) => n % 3 === 0;
export const isMultipleOfFive = (n: number) => n % 5 === 0;
export const isMultipleOfThreeAndFive = (n: number) => isMultipleOfThree(n) && isMultipleOfFive(n);

export const hasThree = (n: number) => n.toString().includes("3");
export const hasFive = (n: number) => n.toString().includes("5");
export const hasThreeAndFive = (n: number) => hasThree(n) && hasFive(n);

export const fizzbuzz = (n: number): string | number => {
  if (isMultipleOfThreeAndFive(n)) return "FizzBuzz";
  if (isMultipleOfThree(n)) return "Fizz";
  if (isMultipleOfFive(n)) return "Buzz";
  return n;
};

export const fizzbuzzAdvanced = (n: number): string | number => {
  let fizzbuzzString = "";
  if (hasThreeAndFive(n)) fizzbuzzString += "FizzBuzz";
  else if (hasThree(n)) fizzbuzzString += "Fizz";
  else if (hasFive(n)) fizzbuzzString += "Buzz";
  if (isMultipleOfThreeAndFive(n)) fizzbuzzString += "FizzBuzz";
  else if (isMultipleOfThree(n)) fizzbuzzString += "Fizz";
  else if (isMultipleOfFive(n)) fizzbuzzString += "Buzz";
  if (fizzbuzzString) return fizzbuzzString;
  return n;
};

const printFizzBuzzResults = () => {
  const results = numbers.map(fizzbuzz);
  console.log(results);
}

const printFizzBuzzAdvancedResults = () => {
  const results = numbers.map(fizzbuzzAdvanced);
  console.log(results);
}

printFizzBuzzResults();
printFizzBuzzAdvancedResults();

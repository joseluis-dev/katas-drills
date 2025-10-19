const splitDelimetersAndNumbers = (input: string): {delimeters: string, numbersPart: string} => {
  if (input.startsWith("//")) {
    const newLineMatch = input.match(/\n(?=\d)/);
    let delimeters = newLineMatch && newLineMatch.index !== undefined ? input.slice(2, newLineMatch.index) : "";
    if (delimeters.startsWith("[") && delimeters.endsWith("]")) {
      const multiCharDelimeter = delimeters.replace(/^\[|\]$/g, '').replace(/\]\[/g, ',');
      delimeters = multiCharDelimeter;
    }
    const numbersPart = newLineMatch && newLineMatch.index !== undefined ? input.slice(newLineMatch.index + 1) : "";
    console.log({delimeters, numbersPart});
    return { delimeters, numbersPart };
  }
  return { delimeters: "", numbersPart: input };
}

export const stringCalculator = (input: string): number => {
  if (input === "") return 0
  const { delimeters, numbersPart } = splitDelimetersAndNumbers(input);
  const regex = new RegExp(`[${delimeters !== "" ? delimeters : "\n,"}]+`);
  const numbers = numbersPart.split(regex).map((num: string) => {
    const number = Number(num || "0");
    if (number >= 1000) return 0;
    return number;
  });
  const negatives = numbers.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`Números negativos no permitidos: ${negatives.join(",")}`);
  }
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum;
}

console.log(stringCalculator("//[**][%%]\n1**2%%3"));
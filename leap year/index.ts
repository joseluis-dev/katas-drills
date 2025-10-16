export const isLeapYear = (year: number): boolean => {
  let isLeap = false;
  if (year % 4 === 0) isLeap = true;
  if (year % 100 === 0) isLeap = false;
  if (year % 400 === 0) isLeap = true;
  return isLeap;
}

const years = [1900, 2000, 2004, 2010, 2020, 2021];

export const main = () => {
  const results = years.map(year => ({ year, isLeap: isLeapYear(year) ? "Sí" : "No" }));
  console.log(results);
}

main();
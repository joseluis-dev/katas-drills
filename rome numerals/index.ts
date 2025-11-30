export const convert = (num: number): string => {
  const base1: { [key: number]: string } = {
    1: 'I',
    10: 'X',
    100: 'C',
    1000: 'M',
  }
  const base1Digits: number[] = Object.keys(base1).map(Number)

  const base5: { [key: number]: string } = {
    5: 'V',
    50: 'L',
    500: 'D',
  }

  const base: { [key: number]: string } = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
  }
  const baseDigits: number[] = Object.keys(base).map(Number)

  const getRange = (num: number): number[] => {
    let isRangeFound = false
    const result: number[] = []
    for (let i = 1; i <= baseDigits.length && !isRangeFound; i++) {
      const currentDigit = baseDigits[i] || 0
      const previousDigit = baseDigits[i - 1] || 0
      if (num > previousDigit && num < currentDigit) {
        isRangeFound = true
        result.push(previousDigit, currentDigit)
      }
    }
    const lastDigit = baseDigits[baseDigits.length - 1];
    if (lastDigit !== undefined && num >= lastDigit) {
      return [lastDigit, num]
    }
    return result
  }

  const calc = (num: number, roman: string): string => {
    if (num <= 0) return roman
    if (base[num]) return roman + base[num]
    const range = getRange(num)
    const [lower = 0, upper = 0] = range
    const base1Upper = base5[upper] ? upper * 2 : upper
    const prevBase1Digit = base1Digits[base1Digits.findIndex((digit) => digit === base1Upper) -1] ?? base1Digits[base1Digits.length -1] ?? 0
    const nextLower = upper - prevBase1Digit
    const compareNumber = num > prevBase1Digit ? Math.floor(num / prevBase1Digit) * prevBase1Digit : num
    const isNextLower = compareNumber === nextLower // con la última parte se maneja el caso de 9, 90, 900
    if (isNextLower) {
      const newNum = num - nextLower
      roman += (base1[prevBase1Digit] ?? '') + (base[upper] ?? '')
      return calc(newNum, roman)
    }
    return calc(num - lower, roman + (base[lower] ?? ''))
  }

  return calc(num, '')
}

export const convertOptimized = (num: number): string => {
  const lookup: { value: number; symbol: string }[] = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' },
  ]

  let roman = ''
  for (const { value, symbol } of lookup) {
    while (num >= value) {
      roman += symbol
      num -= value
    }
  }
  return roman
}

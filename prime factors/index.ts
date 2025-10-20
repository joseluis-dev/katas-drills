import { fastPrime } from '../miller rabin test/index.ts'

const nextDivisor = (divisor: number): number => {
  const newDiv = divisor + 1
  if (newDiv % 2 !== 0) return newDiv
  return nextDivisor(newDiv)
}

const tryIt = (n: number, divisor: number, factors: number[]): number[] => {
  if (n % divisor === 0) {
    factors.push(divisor)
    if (divisor < n) {
      tryIt(n / divisor, divisor, factors)
    }
    return factors
  }
  const newDivisor = nextDivisor(divisor)
  return tryIt(n, newDivisor, factors)
}

export const primeFactors = (n: number): number[] => {
  if (n <= 0) throw new Error('Input must be a non-negative and non-zero integer')
  if (n === 1) return []

  if (fastPrime(n)) return [n]

  const factors: number[] = []
  return tryIt(n, 2, factors)
}

const main = () => {
  console.log(primeFactors(13195)) // [5, 7, 13, 29]
  console.log(primeFactors(2)) // [2]
  console.log(primeFactors(15)) // [3, 5]
  console.log(primeFactors(28)) // [2, 2, 7]
  console.log(primeFactors(97)) // [97]
  console.log(primeFactors(29)) // [29]
  console.log(primeFactors(6)) // [2, 3]
}

main()
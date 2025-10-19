// **** FAST DOUBLING METHOD ****
export const fibonacci = (n: bigint): [bigint, bigint] => {
  const [fibN, fibNPlus1] = fastDoubling(n)
  return [fibN, fibNPlus1]

  function fastDoubling (k: bigint): [bigint, bigint] {
    if (k === 0n) {
      return [0n, 1n]
    }
    const [a, b] = fastDoubling(k >> 1n)
    const c = a * (2n * b - a)       // F(2k) = F(k) * (2*F(k+1) - F(k))
    const d = (a * a) + (b * b)     // F(2k+1) = F(k)^2 + F(k+1)^2
    if (k % 2n === 0n) {
      return [c, d]                 // [F(2k), F(2k+1)]
    }
    return [d, c + d]               // [F(2k+1), F(2k) + F(2k+1)]
  }
}

export const serieFibonacci = (n: number): bigint[] => {
  if (n < 0) throw new Error('n debe ser >= 0')
  if (n === 0) return [0n]
  const nBigInt = BigInt(n) < 0n ? 0n : BigInt(n)
  const [fn, fn1] = fibonacci(nBigInt)    // [F(n), F(n+1)]
  const res = new Array<bigint>(n + 1)

  // sembramos los dos últimos y retrocedemos
  res[n] = fn
  res[n - 1] = fn1 - fn               // F(n-1) = F(n+1) - F(n)

  for (let k = n - 2; k >= 0; k--) {
    res[k] = res[k + 2]! - res[k + 1]!  // F(k) = F(k+2) - F(k+1)
  }
  return res
}

// **** METODO ITERATIVO BOTTOM-UP ****
export const fibonacciIterativo = (n: number): bigint[] => {
  if (n < 0) throw new Error('n debe ser >= 0')
  if (n === 0) return [0n]
  const nBigInt = BigInt(n) < 0n ? 0n : BigInt(n)
  const res = new Array<bigint>(nBigInt + 1n)
  res[0] = 0n
  res[1] = 1n

  const fib = (a: bigint, b: bigint, count: number): void => {
    if (count > nBigInt) return
    res[count] = a + b
    fib(b, a + b, count + 1)
  }
  fib(0n, 1n, 2)
  return res
}

const main = (): void => {
  console.log('Fibonacci(10):', fibonacci(10n)) // [55n, 89n]
  console.log('Serie Fibonacci(10):', serieFibonacci(10)) // [0n, 1n, 1n, 2n, 3n, 5n, 8n, 13n, 21n, 34n, 55n]
  console.log('Fibonacci Iterativo(10):', fibonacciIterativo(10)) // [0n, 1n, 1n, 2n, 3n, 5n, 8n, 13n, 21n, 34n, 55n]
}

main()
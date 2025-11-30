import { convert, convertOptimized } from './index';

const runBenchmark = (label: string, fn: (n: number) => string, iterations: number) => {
  const start = performance.now();
  for (let i = 0; i < iterations; i++) {
    // Probamos con números del 1 al 3999 cíclicamente
    const num = (i % 3999) + 1;
    fn(num);
  }
  const end = performance.now();
  console.log(`${label}: ${(end - start).toFixed(4)} ms para ${iterations} iteraciones`);
}

const ITERATIONS = 100_000;

console.log(`Iniciando benchmark con ${ITERATIONS} iteraciones...`);
console.log('--------------------------------------------------');

runBenchmark('Original (convert)', convert, ITERATIONS);
runBenchmark('Optimizada (convertOptimized)', convertOptimized, ITERATIONS);

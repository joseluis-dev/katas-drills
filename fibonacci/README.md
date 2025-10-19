# Fibonacci - Fast Doubling Method

Implementación optimizada de la secuencia de Fibonacci utilizando el algoritmo de **doblado rápido** (Fast Doubling), que permite calcular el n-ésimo número de Fibonacci en tiempo O(log n).

## 🎯 Características

- **Algoritmo Fast Doubling**: Implementación O(log n) en lugar de O(n)
- **Cálculo de números individuales**: Función `fibonacci(n)` que retorna `[F(n), F(n+1)]`
- **Generación de series completas**: Función `serieFibonacci(n)` que retorna toda la serie hasta F(n)
- **Optimización de memoria**: Construcción eficiente de la serie retrocediendo desde el final

## 📈 Algoritmo

### Fast Doubling Method

El algoritmo se basa en las siguientes relaciones matemáticas:
- `F(2k) = F(k) * (2*F(k+1) - F(k))`
- `F(2k+1) = F(k)² + F(k+1)²`

Esto permite calcular números de Fibonacci muy grandes de forma eficiente usando divide y vencerás.

### Construcción de la Serie

La función `serieFibonacci` utiliza una técnica inteligente:
1. Calcula `F(n)` y `F(n+1)` usando fast doubling
2. Usa la propiedad `F(k) = F(k+2) - F(k+1)` para reconstruir la serie hacia atrás
3. Evita recalcular cada número individualmente

## 🚀 Uso

```typescript
import { fibonacci, serieFibonacci } from './index.js'

// Calcular F(10) y F(11)
const [f10, f11] = fibonacci(10)
console.log(f10) // 55

// Generar serie completa hasta F(10)
const serie = serieFibonacci(10)
console.log(serie) // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
```

## 🛠️ Scripts

```bash
# Instalar dependencias
bun install

# Ejecutar el código
bun run start

# Ejecutar tests
bun run test
```

## ⚡ Complejidad

- **Tiempo**: O(log n) para `fibonacci(n)`
- **Espacio**: O(log n) por la recursión
- **Serie completa**: O(n) tiempo, O(n) espacio

## 🧪 Testing

Los tests incluyen verificación de:
- Casos base (n=0, n=1)
- Números pequeños y medianos
- Consistencia entre ambas funciones
- Manejo de casos especiales

Este proyecto fue creado usando `bun init` en bun v1.3.0. [Bun](https://bun.com) es un runtime JavaScript rápido y completo.

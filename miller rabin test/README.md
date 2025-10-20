# Miller-Rabin Test

Implementación del test de primalidad probabilístico de Miller-Rabin para verificar si un número es primo de forma eficiente.

## 🎯 Descripción

El test de Miller-Rabin es un algoritmo probabilístico para determinar si un número es primo. Es mucho más eficiente que los métodos determinísticos para números grandes y es ampliamente utilizado en criptografía y aplicaciones que requieren verificación rápida de primalidad.

## 🔧 Características

- **Test probabilístico**: Alta precisión con múltiples iteraciones
- **Exponenciación modular**: Implementación optimizada de `a^d mod n`
- **Descomposición eficiente**: Factorización de `n-1` en `2^s * d`
- **Manejo de números de Carmichael**: Detecta correctamente pseudoprimos
- **Complejidad optimizada**: O(k log³ n) donde k es el número de rondas

## 📊 Algoritmo

El algoritmo se basa en el siguiente teorema:
- Si `n` es primo y `a` no es divisible por `n`, entonces:
  - `a^(n-1) ≡ 1 (mod n)` (Pequeño Teorema de Fermat)
  - Si `a^d ≢ 1 (mod n)`, entonces `a^(2^r * d) ≡ -1 (mod n)` para algún `0 ≤ r < s`

## 🚀 Funciones principales

### `millerRabin(n: number): boolean`
Ejecuta una ronda del test de Miller-Rabin con un testigo aleatorio.

### `fastPrime(n: number, k: number = 5): boolean`
Ejecuta k rondas del test para aumentar la precisión. La probabilidad de error es menor a (1/4)^k.

### `expmod(base: number, exp: number, m: number): number`
Exponenciación modular optimizada usando el método de cuadrado y multiplicación.

### `decompose(n: number): { d: number; s: number }`
Descompone `n-1` en la forma `2^s * d` donde d es impar.

## 📊 Ejemplos de uso

```typescript
fastPrime(97)    // true (número primo)
fastPrime(99)    // false (número compuesto)
fastPrime(561)   // false (número de Carmichael)
fastPrime(1729)  // false (número de Carmichael)
```

## 🚀 Uso

Para instalar dependencias:

```bash
bun install
```

Para ejecutar:

```bash
bun run start
```

Para ejecutar tests:

```bash
bun run test
```

## 🧪 Testing

El proyecto incluye tests que verifican:
- Números primos conocidos
- Números compuestos
- Números de Carmichael (casos especiales)
- Casos extremos (2, números negativos)
- Consistencia probabilística

## 🔬 Casos especiales

- **Números de Carmichael**: Números compuestos que pasan el test de Fermat pero son detectados correctamente por Miller-Rabin
- **Números pequeños**: Manejo especial para 2 (único primo par)
- **Precisión configurable**: Número de rondas ajustable según precisión requerida

## 📈 Complejidad

- **Temporal**: O(k log³ n) donde k es el número de rondas
- **Espacial**: O(1) - uso constante de memoria
- **Probabilidad de error**: ≤ (1/4)^k

Este proyecto fue creado usando `bun init` en bun v1.3.0. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.

# Prime Factors

Implementación de factorización de números enteros en sus factores primos utilizando división por tentativa optimizada.

## 🎯 Descripción

Este kata implementa un algoritmo para encontrar todos los factores primos de un número entero positivo. El algoritmo está optimizado para saltarse números pares después del 2 y utiliza el test de Miller-Rabin para verificar si un número es primo antes de intentar factorizarlo.

## 🔧 Características

- **Factorización completa**: Encuentra todos los factores primos de un número
- **Optimización de divisores**: Saltea números pares para mayor eficiencia
- **Integración con Miller-Rabin**: Usa test de primalidad para optimización
- **Manejo de casos especiales**: Valida entrada y maneja números primos
- **Recursión funcional**: Implementación recursiva elegante

## 📊 Ejemplos de uso

```typescript
primeFactors(13195) // [5, 7, 13, 29]
primeFactors(2)     // [2]
primeFactors(15)    // [3, 5]
primeFactors(28)    // [2, 2, 7]
primeFactors(97)    // [97] (número primo)
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

El proyecto incluye tests comprehensivos que verifican:
- Factorización de números compuestos
- Manejo de números primos
- Casos especiales (1, números negativos)
- Validación de entrada

## 🔬 Algoritmo

1. **Validación**: Verifica que la entrada sea un número entero positivo
2. **Caso base**: Si el número es 1, retorna array vacío
3. **Test de primalidad**: Si el número es primo, lo retorna como único factor
4. **División por tentativa**: Divide por divisores empezando por 2
5. **Optimización**: Saltea números pares después del 2
6. **Recursión**: Continúa factorizando el cociente

Este proyecto fue creado usando `bun init` en bun v1.3.0. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.

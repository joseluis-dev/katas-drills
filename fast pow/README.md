# Fast Power (Exponenciación Rápida)

Implementación optimizada de exponenciación usando el algoritmo de exponenciación binaria (divide y vencerás).

## 🔋 Descripción

La exponenciación rápida es un algoritmo que calcula `base^exponente` en tiempo logarítmico O(log n) en lugar del tiempo lineal O(n) de la multiplicación repetida.

## 🚀 Algoritmo

El algoritmo se basa en la propiedad:
- Si `n` es par: `a^n = (a^(n/2))^2`
- Si `n` es impar: `a^n = a * a^(n-1)`

## 📊 Complejidad

- **Tiempo**: O(log n) - Exponencial a logarítmico
- **Espacio**: O(log n) - Por la pila de recursión

## 💻 Instalación y uso

```bash
bun install
```

Para ejecutar:
```bash
bun run start
```

Para ejecutar tests:
```bash
bun test
```

## 🧪 Ejemplos

```typescript
console.log(fastPow(2, 10));  // 1024
console.log(fastPow(3, 4));   // 81
console.log(fastPow(5, 0));   // 1
```

## 🎯 Casos de uso

- **Criptografía** - Operaciones modulares rápidas
- **Matemáticas computacionales** - Cálculos de potencias grandes
- **Algoritmos numéricos** - Base para otros algoritmos optimizados

---

*Proyecto creado con Bun v1.3.0*

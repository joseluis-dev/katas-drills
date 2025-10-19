# MCD (Máximo Común Divisor)

Implementación del algoritmo de Euclides para calcular el máximo común divisor de dos números usando recursión.

## 🔢 Descripción

El algoritmo de Euclides es un método eficiente para encontrar el MCD basado en el principio:
```
MCD(a, b) = MCD(b, a mod b)
```

Cuando `b = 0`, entonces `MCD(a, 0) = a`

## 🚀 Características

- **Recursión elegante** - Implementación matemáticamente pura
- **Algoritmo de Euclides** - Método clásico y eficiente
- **Optimización automática** - El algoritmo se optimiza naturalmente
- **Casos base bien definidos** - Manejo correcto de casos edge

## 📊 Complejidad

- **Tiempo**: O(log(min(a,b))) - Muy eficiente
- **Espacio**: O(log(min(a,b))) - Por la pila de recursión

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
console.log(mcd(48, 18));  // 6
console.log(mcd(56, 42));  // 14
console.log(mcd(17, 13));  // 1 (números primos)
```

## 🎯 Casos de uso

- **Simplificación de fracciones** - Reducir fracciones a su mínima expresión
- **Criptografía** - Algoritmos que requieren números coprimos
- **Matemáticas discretas** - Base para otros algoritmos numéricos

---

*Proyecto creado con Bun v1.3.0*

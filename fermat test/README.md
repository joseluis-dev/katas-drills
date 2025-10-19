# Test de Primalidad de Fermat

Implementación del test de primalidad de Fermat para verificar probabilísticamente si un número es primo.

## 🔢 Descripción

El Test de Fermat se basa en el **Pequeño Teorema de Fermat**: si `p` es primo y `a` no es divisible por `p`, entonces:

```
a^(p-1) ≡ 1 (mod p)
```

O equivalentemente: `a^p ≡ a (mod p)`

## 🚀 Características

- **Exponenciación modular optimizada** - Evita overflow numérico
- **Tests probabilísticos** - Múltiples iteraciones para mayor confianza
- **Manejo de números de Carmichael** - Detecta casos especiales que pueden engañar al test
- **Validación de entrada** - Maneja casos edge apropiadamente

## 📊 Funciones principales

### `expmod(base, exp, m)`
Calcula `(base^exp) mod m` de forma eficiente usando exponenciación binaria.

### `fermatTest(n)`
Ejecuta una iteración del test de Fermat con un número aleatorio.

### `fastPrime(n, k)`
Ejecuta `k` iteraciones del test de Fermat para mayor precisión.

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
console.log(fastPrime(97, 5));   // true - 97 es primo
console.log(fastPrime(100, 5));  // false - 100 no es primo
console.log(fastPrime(561, 10)); // false - 561 es número de Carmichael
```

## ⚠️ Limitaciones

- **Tests probabilísticos**: Puede dar falsos positivos (muy raro)
- **Números de Carmichael**: Números compuestos que pasan el test de Fermat
- **No es determinístico**: Resultados pueden variar en cada ejecución

---

*Proyecto creado con Bun v1.3.0*

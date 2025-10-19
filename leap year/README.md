# Leap Year (Año Bisiesto)

Implementación para determinar si un año es bisiesto siguiendo las reglas del calendario gregoriano.

## 📅 Descripción

Un año es bisiesto si cumple estas reglas:
1. **Divisible por 4** → Potencialmente bisiesto
2. **Divisible por 100** → No bisiesto (excepto...)
3. **Divisible por 400** → Sí bisiesto

## 🧮 Reglas del calendario gregoriano

- **Años divisibles por 4**: Bisiestos (ej: 2020, 2024)
- **Años divisibles por 100**: No bisiestos (ej: 1900, 2100)
- **Años divisibles por 400**: Bisiestos (ej: 1600, 2000)

## 🚀 Características

- **Lógica condicional compleja** - Manejo de múltiples condiciones anidadas
- **Precisión histórica** - Implementa correctamente las reglas gregorianas
- **Procesamiento de arrays** - Evaluación eficiente de múltiples años
- **Validación completa** - Casos edge y validaciones

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
console.log(isLeapYear(2020));  // true - divisible por 4
console.log(isLeapYear(1900));  // false - divisible por 100
console.log(isLeapYear(2000));  // true - divisible por 400
console.log(isLeapYear(2023));  // false - no divisible por 4
```

## 📊 Casos históricos

- **1900**: No bisiesto (divisible por 100, no por 400)
- **2000**: Bisiesto (divisible por 400)
- **2100**: No será bisiesto (divisible por 100, no por 400)

---

*Proyecto creado con Bun v1.3.0*

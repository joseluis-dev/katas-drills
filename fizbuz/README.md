# FizzBuzz

Implementación del clásico ejercicio FizzBuzz utilizando TDD y programación funcional.

## 🎯 Descripción

FizzBuzz es un ejercicio clásico que consiste en:
- Números divisibles por 3: imprimir "Fizz"
- Números divisibles por 5: imprimir "Buzz"  
- Números divisibles por ambos: imprimir "FizzBuzz"
- Otros números: imprimir el número

## 🧪 Metodología

Este proyecto fue desarrollado siguiendo:
- **TDD (Test-Driven Development)** - Tests escritos antes que el código
- **Programación Funcional** - Uso de funciones puras y composición
- **Clean Code** - Código limpio y expresivo

## 🚀 Características

- **Funciones puras** - Sin efectos secundarios
- **Composición funcional** - Combinación elegante de funciones
- **Cobertura completa** - Tests exhaustivos de todos los casos
- **TypeScript** - Tipado estático para mayor robustez

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
console.log(fizzBuzz(1));   // "1"
console.log(fizzBuzz(3));   // "Fizz"
console.log(fizzBuzz(5));   // "Buzz"
console.log(fizzBuzz(15));  // "FizzBuzz"
```

## 📈 Extensibilidad

El diseño permite fácil extensión para:
- Nuevas reglas de divisibilidad
- Diferentes palabras de reemplazo
- Rangos de números personalizados

---

*Proyecto creado con Bun v1.3.0*

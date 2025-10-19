# Palindrome Checker

Verificador de palíndromos con limpieza y normalización de texto para casos reales.

## 🔍 Descripción

Un palíndromo es una palabra, frase o secuencia que se lee igual hacia adelante y hacia atrás. Este proyecto incluye limpieza de texto para manejar casos del mundo real.

## 🧼 Características

- **Limpieza de texto** - Elimina espacios, puntuación y caracteres especiales
- **Normalización** - Convierte a minúsculas para comparación
- **Algoritmo eficiente** - Comparación optimizada carácter por carácter
- **Casos edge** - Maneja strings vacíos y de un carácter

## 🚀 Procesamiento de texto

El algoritmo realiza las siguientes transformaciones:
1. **Convierte a minúsculas** - Elimina diferencias de case
2. **Elimina espacios** - Quita todos los espacios en blanco
3. **Limpia caracteres especiales** - Solo conserva letras y números
4. **Compara bidireccionalmente** - Verifica igualdad en ambas direcciones

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
console.log(isPalindrome("racecar"));           // true
console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log(isPalindrome("race a car"));        // false
console.log(isPalindrome("Madam, I'm Adam"));   // true
```

## 📝 Casos soportados

- **Palabras simples**: "level", "radar", "civic"
- **Frases con espacios**: "never odd or even"
- **Con puntuación**: "A Santa at NASA"
- **Números**: "12321", "1001"
- **Mixtos**: "Was it a car or a cat I saw?"

---

*Proyecto creado con Bun v1.3.0*

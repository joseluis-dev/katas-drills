# String Calculator

Calculadora de cadenas que suma números contenidos en strings con soporte para delimitadores personalizados y reglas de negocio específicas.

## 🔤 Descripción

Este proyecto implementa una calculadora que puede procesar cadenas de texto conteniendo números separados por diferentes delimitadores, aplicando reglas específicas de validación y procesamiento.

## 🚀 Características

- **Delimitadores múltiples** - Soporte para comas (`,`) y saltos de línea (`\n`) por defecto
- **Delimitadores personalizados** - Definición de delimitadores custom con sintaxis `//[delim]\n`
- **Delimitadores multi-carácter** - Soporte para delimitadores de más de un carácter
- **Validación de números negativos** - Lanza excepción cuando encuentra números negativos
- **Filtrado de números grandes** - Ignora números >= 1000
- **Parsing avanzado con regex** - Uso sofisticado de expresiones regulares

## 📝 Formatos soportados

### Formato básico
```
"1,2,3" → 6
"1\n2\n3" → 6  
"1,2\n3" → 6
```

### Delimitadores personalizados
```
"//;\n1;2;3" → 6
"//|\n1|2|3" → 6
```

### Delimitadores multi-carácter
```
"//[**]\n1**2**3" → 6
"//[***]\n1***2***3" → 6
```

### Múltiples delimitadores
```
"//[*][%]\n1*2%3" → 6
"//[**][%%]\n1**2%%3" → 6
```

## 🧪 Reglas de negocio

- **Cadena vacía** → retorna `0`
- **Números negativos** → lanza excepción con mensaje
- **Números >= 1000** → se ignoran (tratados como `0`)
- **Valores no numéricos** → tratados como `0`

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

## 🛠️ Implementación técnica

### Funciones principales

- `splitDelimetersAndNumbers()` - Separa delimitadores de números usando regex avanzadas
- `stringCalculator()` - Función principal que procesa la cadena y retorna la suma

### Expresiones regulares clave

- `/\n(?=\d)/` - Encuentra salto de línea seguido de dígito
- `/^\[|\]$/g` - Limpia corchetes de delimitadores
- `/\]\[/g` - Convierte múltiples delimitadores

---

*Proyecto creado con Bun v1.3.0*

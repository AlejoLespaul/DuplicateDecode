# Code Challenge: Duplicate Decoder

El objetivo de este ejercicio es convertir un String a un nuevo string donde cada uno de los caracteres sea sustituido por "(" en caso de que el caracter evaluado aparezca una sola vez en la cadena original o ")" si el mismo aparece mas de una vez
Ignorar mayúsculas al momento de determinar duplicidad. 
## Ejemplos
```
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
```

## Instrucciones
- Crear un nuevo repositorio utilizando este repositorio como template (Boton: use this template).
- Editar el código de la función definida en el archivo index.js con un algoritmo que permita obtener los resultados esperados en los test.
- Ejecutar los test validando que todos resulten exitosos

## Ejecutar Pruebas

Instalar dependencias (mocha)
```
npm install
```

Ejecutar test
```
npm run test
```
## Entrada

##### Parámetro 1
- **nombre**: str
- **tipo**: String
- **limitaciones**: debe contener al menos un caracter. 

## Salida

- **tipo**: String

## Tests

### Test 1  

- **Parametros**: str = "din"  
- **Resultado esperado**: "((("
---
### Test 2  

- **Parametros**: str = "recede"  
- **Resultado esperado**: "()()()"
---
### Test 3  

- **Parametros**: str = "Success"  
- **Resultado esperado**: ")())())"
---
### Test 4  

- **Parametros**: str = "(( @"  
- **Resultado esperado**: "))(("
---
### Test 4  

- **Parametros**: str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."  
- **Resultado esperado**: "))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))())))))))))))))))))))))))))))))))))))))())))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))(())))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))"

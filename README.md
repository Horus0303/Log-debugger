## Debugger log

# Introducción
**Log debugger term by Kevin Cruces**
Email: kevincruces.zuloaga@gmail.com

## How works?
```javascript
const debugger = require('log-debugger')
debugger('Into method to test debugger', 'Test', 'purple')
```

**La instancia espera 3 parámetos**
* El contexto que quiere mostrar en consola
* El módulo donde se ejecuta el debugger
* El tipo de color que pintará en consola

La relación del módulo con el valor del color se guardará en memoria de caché, librería utilizada `https://www.npmjs.com/package/redis`


![alt text](/assets/readme1.png)

**Sensible al contexto**
* Si en el contexto encuentra la palabra `success, exitosamente, correctamente, succesfully` renderizará los carácteres de la consola subrayado y de color verde

```javascript
debugger('Into method to test debugger normal', 'Test', 'blue')
debugger('Into method to test debugger successfully', 'Test', 'blue')
```


![alt text](/assets/readme3.png)

* Si en el contexto encuentra la palabra `delete, warning, eliminado, eliminar` renderizará los carácteres de la consola subrayado y de color naranja y un signo de '!'

```javascript
debugger('Into method to test debugger warning', 'Test', 'blue')
debugger('Into method to test debugger normal', 'Test', 'blue')
```

![alt text](/assets/readme4.png)

* Si en el contexto encuentra la palabra `error, kill` renderizará los carácteres de la consola de color blanco y fondo rojo.

```javascript
debugger('Has error in test Method', 'Test', 'blue')
debugger('Into method to test debugger normal', 'Test', 'blue')
```

![alt text](/assets/readme5.png)

--- 
# Gama de colores
| Color | Descripción |
| ----------- | ----------- |
| BLUE | `21, 26, 27, 32, 33, 38, 39, 69, 75,81` |
| CYAN | `43, 44, 45, 50, 51, 87, 122, 123, 159, 195` |
| GRAY | `240, 241, 242, 243, 242, 244, 245, 247, 248, 249, 250` |
| GREEN | `28, 29, 34, 35, 36, 40, 41, 42, 46, 47, 76, 77, 82, 112, 118` |
| PINK | `132, 133, 161, 162, 168, 169, 170, 171, 176, 177, 197, 198, 199, 205, 206, 207, 210, 211, 212, 213, 218, 219` |
| MAGENTA | `89, 90, 126, 127, 163, 164, 165, 200, 201` |
| ORANGE | `130, 166, 172, 173, 202, 208, 209, 214, 215` |
| PURPLE | `56, 57,91, 92, 93, 99, 105, 128, 129, 133, 134, 135, 141, 177` |
| YELLOW | `11, 184, 190, 220, 221, 222, 226, 227` |

![alt text](/assets/readme2.png)
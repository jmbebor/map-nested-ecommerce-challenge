# 🧩 Reto con `.map()` Anidado – Datos de Ecommerce (Versión Navegador)

## 🛍 Contexto

Estás trabajando con una estructura de datos compleja que representa un **marketplace de ecommerce** con múltiples vendedores (sellers), donde cada uno tiene varios pedidos (orders) de distintos clientes. Cada pedido incluye varios productos, y cada producto tiene una variante con información de precio.

Este tipo de estructura es común en APIs modernas de sistemas como Amazon Marketplace, MercadoLibre o tiendas con multivendedores.

---

## 📦 Dataset Proporcionado

El dataset ya está cargado en `script.js` dentro del bloque `window.onload`.

```js
const marketplaceData = [
  {
    sellerId: "s001",
    sellerName: "TechZone",
    orders: [
      {
        orderId: "o1001",
        customer: { id: "c001", name: "Alice" },
        items: [
          {
            productId: "p100",
            title: "Laptop Pro",
            variant: { sku: "LP-13-8GB", price: 1500 },
            quantity: 1
          },
          {
            productId: "p101",
            title: "Mouse Pad",
            variant: { sku: "MP-XL", price: 20 },
            quantity: 2
          }
        ]
      }
    ]
  }
];
```

---

## 🎯 Objetivo del Reto

Utiliza exclusivamente **`.map()`** (puedes anidarlo) dentro del bloque `window.onload` para transformar esta estructura en un nuevo arreglo con el siguiente formato:

- `sellerId`, `sellerName`
- Lista de `orders`, donde:
  - cada `order` mantiene `orderId` y `customer`
  - cada `item` incluye `productId`, `title`, `variant`, `quantity`, y un campo adicional `subtotal = price * quantity`

> ❗ No debes usar `reduce()`, `forEach()`, `for`, `while` ni funciones externas. Todo debe estar dentro de `window.onload`.

---

## ✅ Resultado esperado

```js
[
  {
    sellerId: "s001",
    sellerName: "TechZone",
    orders: [
      {
        orderId: "o1001",
        customer: { id: "c001", name: "Alice" },
        items: [
          {
            productId: "p100",
            title: "Laptop Pro",
            variant: { sku: "LP-13-8GB", price: 1500 },
            quantity: 1,
            subtotal: 1500
          },
          {
            productId: "p101",
            title: "Mouse Pad",
            variant: { sku: "MP-XL", price: 20 },
            quantity: 2,
            subtotal: 40
          }
        ]
      }
    ]
  }
]
```

---

## 🧠 Tips

- Usa `JSON.stringify(..., null, 2)` para mostrar los datos formateados.
- Puedes modificar directamente la variable `result` en `script.js`.
- Usa el spread operator (`...`) para copiar y extender objetos dentro de `map()`.

---

## 🚀 Cómo Participar

1. Abre el archivo `index.html` en tu navegador.
2. Modifica el archivo `script.js`, dentro de `window.onload`, para completar el reto.
3. El dataset se muestra en la columna izquierda; tu resultado debe aparecer transformado a la derecha.
4. El resultado inicial es un array vacío (`[]`).
5. El primer estudiante que logre el resultado esperado, sin errores, y usando solo `.map()`, ¡gana el reto!

---

¡Buena suerte y que tu código sea limpio y funcional! 🧠🔥🧩

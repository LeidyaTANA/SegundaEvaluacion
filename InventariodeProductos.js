// Ejercicio 1: Inventario de Productos
// Descripción: Crea un sistema para gestionar un inventario de productos. 
// Cada producto tendrá un nombre, precio y cantidad en stock.

// Requisitos:

// 1. Define un objeto inventario con una propiedad productos que sea un array vacío.
// 2. Crea una función agregarProducto que reciba un nombre, precio y cantidad, y 
// añada un objeto con estas propiedades al array productos.
// 3. Crea una función listarProductos que imprima en consola cada producto del inventario.
// 4. Crea una función totalInventario que calcule y devuelva el valor total del inventario 
// (precio * cantidad de cada producto).

let inventario = []
    

function AgregarProducto(nombre, precio, cantidad) {
    this.nombre = nombre
    this.precio = precio
    this.cantidad = cantidad 
}

let desInventario = new AgregarProducto ("Kiwi", 7000, 10);
let desInventario2 = new AgregarProducto ("manzana",8000, 2);
// console.log(desInventario);
inventario.push(desInventario, desInventario2);


function listarProductos(){
    for(let i = 0; i < inventario.length; i++){
    console.log(inventario[i]);
    
    }
}

function totalProducto(){
    for(let i = 0; i < inventario.length; i++){
        console.log(`El total de el producto ${inventario[i].nombre}, es de ${(inventario[i].precio)*(inventario[i].cantidad)}`);
    }
}

console.log(totalProducto());

console.log(listarProductos());

// console.log({AgregarProducto.[0].nombre});





// function listarProductos() {
//      console.log(`Estos son todos los productos del inventario ${nombre} ${precio} ${cantidad}`);
// }

//     const totalInventario = (AgregarProducto) => {
//         let total = 0;
//         total = AgregarProducto.precio * AgregarProducto.cantidad
//        console.log(total);
//     }
// console.log(totalInventario(AgregarProducto));


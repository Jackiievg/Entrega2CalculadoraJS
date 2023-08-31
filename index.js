//Calculadora de pago

//Bienvenida
let nombre = prompt ('Ingrese su nombre')
alert ('Hola ' + nombre + '\n Bienvenido a la tienda!');
//alert ('Nuestros productos disponibles por ahora son:'+ '\n Call of duty' + '\n Fortnite'+ '\n League of legends' )

//funcion constructora
class Producto {
    constructor(nombre, precio) {
    this.nombre = nombre
    this.precio = precio
    this.cantidad = 0
    }
}
//array
const productos = [
    new Producto('Call of duty', 3000),
    new Producto('Fortnite', 5000),
    new Producto('League of legends', 7000)
]
//opciones de productos 
let opciones = ''
for (let i = 0; i < productos.length; i++) {
opciones += (i + 1) + '.' + productos[i].nombre + '\n'; 
}
let seleccionProd = parseInt(prompt('Seleccione un producto:\n' + opciones))

//El usuario debe seleccionar una cantidad
let cantidad = parseInt(prompt('¿Cuantas unidades de ' + productos[seleccionProd -1].nombre + 'desea comprar?'))
productos[seleccionProd -1].cantidad = cantidad;

//Calcular el total
let total = 0
for (let i = 0; i < productos.length; i++) {
    total += productos[i].precio * productos[i].cantidad;
}
//Respuesta al usuario
alert('El precio total de su compra es: $' + total)




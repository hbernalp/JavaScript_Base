// Objetos - Destructuring con 2 o más objetos

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: 'Harrisson',
    premium : true
}

const { nombre, precio, disponible } = producto
const { nombre: nombreCliente, premium } = cliente

console.log(nombre)
console.log(nombreCliente)
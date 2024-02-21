// Objetos > Todo lo que esta dentro de las llaves son objetos, quiere decir que esa variable guarda diferentes datos

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

console.log(producto)
console.table(producto)

console.log( producto.nombre )
console.log( producto.precio )
console.log( producto.disponible )

// Destructuring
const { nombre, precio, disponible } = producto
console.log(nombre)
console.log(precio)
console.log(disponible)

// Object Literal Enhacement > Coloca datos dentro del objeto
const autenticado2 = true
const usuario2 = "Harrisson"

const nuevoObjeto = {
    autenticado,
    usuario
}

console.table(nuevoObjeto)
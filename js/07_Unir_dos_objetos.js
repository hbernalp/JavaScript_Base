// Unir 2 objetos
const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}
const cliente = {
    nombre: 'Harrisson',
    premium : true
}

// const nuevoObjeto = Object.assign(producto, cliente) // No

//De esta forma ExpressOperator hace la copia de los objetos
const nuevoObjeto2 = { 
    producto: {...producto},
    cliente: {...cliente}
}

console.log(nuevoObjeto2)
console.log(cliente)
console.log(producto)
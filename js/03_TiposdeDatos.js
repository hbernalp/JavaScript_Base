// Tipos de datos 

// Undefined > se da cuandop no se le asigna un valor a la variable
let cliente 
console.log(cliente)
console.log(typeof cliente)

// Boolean > True o false
const descuento = false
console.log(descuento)
console.log(typeof descuento)

// Number
const numero1 = 20.20
const numero2 = 30
const numero3 = -100

console.log(typeof numero1)
console.log(typeof numero2)
console.log(typeof numero3)

// Strings o Cadenas de Texto
const alumno = "Juan"
let producto = 'Monitor 20 pulgadas'
const numero = "30"
const numero4 = 30
console.log(typeof numero)
console.log(typeof numero4)

// BigInt
const numeroGrande = BigInt(918298193891887139831091038173813)
console.log(typeof numeroGrande)
const numeros = 10
const numeros2 = 20
console.log( numeros + Number(numeroGrande))

const numerosN = "30"
const numerosN2 = 30
console.log( typeof String(numerosN2))
console.log( typeof Number(numerosN))

// Symbol
const primerSymbol = Symbol(30)
const segundoSymbol = Symbol(30)
console.log( primerSymbol === segundoSymbol )
console.log( primerSymbol.valueOf() )
console.log( segundoSymbol.valueOf() )

// Null > Valor nulo o vacio
const descuentos = null
console.log(typeof descuentos)
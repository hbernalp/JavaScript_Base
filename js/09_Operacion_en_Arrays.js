// Operaciones en los arreglos
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

// Añadir elementos al array esto ya no se utiliza
// tecnologias.push('GraphQL') // Añade al final del array
// tecnologias.unshift('GraphQL') // Añade al final del array

const nuevoArreglo = [...tecnologias, 'GraphQL'] // lo agrega al final del arreglo
const nuevoArreglo2 = ['GraphQL', ...tecnologias] // lo agrega al incio del arreglo

// Eliminar elementos del array original NO UTILIZAR
//tecnologias.pop() // Elimina el ultimo elemento de arreglo
//tecnologias.shift() // Elimina el primer elemento del arreglo
//tecnologias.splice(2, 3) // Elimina de una posición en especifica desde - hasta

//Modificando el arreglo nuevo por medio del uso de filter
 const nuevoArray3 = tecnologias.filter( function(tech) {
     return tech === 'React'
 })

// Reemplazar elementos del array aplica para el arreglo original NO USAR
 //tecnologias[0] = 'GraphQL'

 // Reemplazar elementos de la copia del array 
const nuevoArray = tecnologias.map( function(tech) {
    if(tech === 'HTML') {
        return 'GraphQL'
    } else {
        return tech
    }
})

console.table(tecnologias)
console.table(nuevoArray)
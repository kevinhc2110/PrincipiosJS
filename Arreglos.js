//Crear
let frutas = ["Manzana", "Banana"];

//Acceder 
let primero = frutas[0];

let ultimo = frutas[frutas.length - 1];

//Recorrer array

frutas.forEach(function (elemento, indice, array) {
    console.log(elemento, indice);
});


//Añadir elemento al final del array

let nuevaLongitud = frutas.push("Naranja"); // Añade "Naranja" al final
// ["Manzana", "Banana", "Naranja"]


//Eliminar el último elemento de un Array

let ultimoo = frutas.pop(); // Elimina "Naranja" del final
// ["Manzana", "Banana"]


//Añadir un elemento al principio de un Array

let nuevaLongitud1 = frutas.unshift("Fresa"); // Añade "Fresa" al inicio
// ["Fresa" ,"Manzana", "Banana"]


//Eliminar el primer elemento de un Array

let primero1 = frutas.shift(); // Elimina "Fresa" del inicio
// ["Manzana", "Banana"]


//Encontrar el índice de un elemento del Array

frutas.push("Fresa");
// ["Manzana", "Banana", "Fresa"]

let pos = frutas.indexOf("Banana"); // (pos) es la posición para abreviar
// 1


//Eliminar un único elemento mediante su posición

let elementoEliminado = frutas.splice(pos, 1);
// ["Manzana", "Fresa"]


//Eliminar varios elementos a partir de una posición

let vegetales = ["Repollo", "Nabo", "Rábano", "Zanahoria"];
console.log(vegetales);
// ["Repollo", "Nabo", "Rábano", "Zanahoria"]

let pos1 = 1,
  numElementos = 2;

let elementosEliminados = vegetales.splice(pos, numElementos);
// ["Nabo", "Rábano"] ==> Lo que se ha guardado en "elementosEliminados"

console.log(vegetales);
// ["Repollo", "Zanahoria"] ==> Lo que actualmente tiene "vegetales"


//Copiar un array

let copiaArray = vegetales.slice();
// ["Repollo", "Zanahoria"]; ==> Copiado en "copiaArray"


//Relación entre length y las propiedades numéricas

const frutas1 = [];
frutas.push("banana", "manzana", "pera");

console.log(frutas.length); // 3


//Creación de un array a partir de una expresión regular

const miRe = /d(b+)(d)/i;
const miArray = miRe.exec("cdbBdbsbz");


//Constructor Array()

new Array(element0, element1, /* … ,*/ elementN)
new Array(arrayLength)
Array(element0, element1, /* … ,*/ elementN)
Array(arrayLength)


//concat()
//Fusiona dos o más arrays en un nuevo array independiente.

const frutas3 = ["manzana", "banana"];
const frutas2 = ["cereza", "mango"];

const frutasCombinadas = frutas3.concat(frutas2);
console.log(frutasCombinadas); // Resultado: ["manzana", "banana", "cereza", "mango"]


//sort()
//Ordena los elementos de un array en su lugar (modifica el array original).

const números = [3, 1, 4, 1, 5, 9];

números.sort((a, b) => a - b); // Orden ascendente
console.log(números);       // Resultado: [1, 1, 3, 4, 5, 9]

números.sort((a, b) => b - a); // Orden descendente
console.log(números);       // Resultado: [9, 5, 4, 3, 1, 1]
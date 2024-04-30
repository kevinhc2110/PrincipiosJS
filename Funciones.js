//Declaración de función

function square(number) {
    return number * number;
}


//Expresiones function

const square = function (number) {
    return number * number;
  };
var x = square(4); // x obtiene el valor 16


const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
    };

console.log(factorial(3));


function map(f, a) { //El siguiente ejemplo muestra una función map que debería recibir una función como primer argumento y un arreglo como segundo argumento.
    let result = []; // Crea un nuevo arreglo
    let i; // Declara una variable
    for (i = 0; i != a.length; i++) result[i] = f(a[i]);
    return result;
}


function map(f, a) { //En el siguiente código, la función recibe una función definida por una expresión de función y la ejecuta por cada elemento del arreglo recibido como segundo argumento.
    let result = []; // Crea un nuevo arreglo
    let i; // Declara una variable
    for (i = 0; i != a.length; i++) result[i] = f(a[i]);
    return result;
  }
const f = function (x) {
    return x * x * x;
};
let numbers = [0, 1, 2, 5, 10];
let cube = map(f, numbers);
console.log(cube);

var myFunc; //En JavaScript, una función se puede definir en función de una condición. Por ejemplo, la siguiente definición de función define myFunc solo si num es igual a 0:
if (num === 0) {
  myFunc = function (theObject) {
    theObject.make = "Toyota";
  };
}



//Llamar funciones 

square(5);

console.log(square(5));
/* ... */
function square(n) {
  return n * n;
}

function factorial(n) { //Una función puede llamarse a sí misma. Por ejemplo, esta es una función que calcula factoriales de forma recursiva
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
}

//las funciones son en sí mismas objetos y, a su vez, estos objetos tienen métodos.
//Los métodos call() y apply() se pueden utilizar para lograr este objetivo.



//Función de elevación

//Este código se ejecuta sin ningún error, a pesar de que se llama a la función antes de que se declare. Esto se debe a que el intérprete de JavaScript eleva toda la declaración de la función a la parte superior del ámbito actual, por lo que el código anterior es equivalente a:square()
console.log(square(5)); // 25

function square(n) {
  return n * n;
}

function square(n) {
    return n * n;
}
  
console.log(square(5)); // 25



//Ámbito de la función

//No se puede acceder a las variables definidas dentro de una función desde ningún lugar fuera de la función, ya que la variable solo se define en el ámbito de la función. Sin embargo, una función puede acceder a todas las variables y funciones definidas dentro del ámbito en el que se define.


//La función eval() evalúa el código JavaScript representado como una cadena y devuelve su valor de finalización. El origen se analiza como un script.
console.log(eval('2 + 2'));
// Expected output: 4


//Una función puede referirse a sí misma y llamarse a sí misma. Hay tres formas de que una función se refiera a sí misma (Recursión)
//El nombre de la función, arguments.callee, Una variable dentro del ámbito que hace referencia a la función

const foo = function bar() {
    // statements go here
};


//puede convertir en una declaración de función recursiva, seguida de una llamada a esa función:

function loop(x) {
    // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
    if (x >= 10) {
      return;
    }
    // do stuff
    loop(x + 1); // the recursive call
}
loop(0);


//Sin embargo, algunos algoritmos no pueden ser simples bucles iterativos. Por ejemplo, obtener todos los nodos de una estructura de árbol (como el DOM) es más fácil a través de la recursividad:

function walkTree(node) {
    if (node === null) {
      return;
    }
    // do something with node
    for (let i = 0; i < node.childNodes.length; i++) {
      walkTree(node.childNodes[i]);
    }
}



//Funciones anidadas y cierres

//Puede anidar una función dentro de otra función. La función anidada (interna) es privada a su función contenedora (externa).

function addSquares(a, b) {
    function square(x) {
      return x * x;
    }
    return square(a) + square(b);
}

console.log(addSquares(2, 3)); // 13
console.log(addSquares(3, 4)); // 25
console.log(addSquares(4, 5)); // 41


//Dado que la función interna forma un cierre, puede llamar a la función externa y especificar argumentos para la función externa e interna:
function outside(x) {
    function inside(y) {
      return x + y;
    }
    return inside;
}

const fnInside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
console.log(fnInside(5)); // 8
console.log(outside(3)(5)); // 8


//Las funciones se pueden anidar en varias ocasiones. Por ejemplo:

function A(x) {
    function B(y) {
      function C(z) {
        console.log(x + y + z);
      }
      C(3);
    }
    B(2);
}
A(1); // Logs 6 (which is 1 + 2 + 3)


//Cuando dos argumentos o variables de los ámbitos de un cierre tienen el mismo nombre, se produce un conflicto de nombres. Los ámbitos más anidados tienen prioridad.

function outside() {
    const x = 5;
    function inside(x) {
      return x * 2;
    }
    return inside;
}

console.log(outside()(10)); // 20 (instead of 10)


//dado que la función interna tiene acceso al ámbito de la función externa, las variables y funciones definidas en la función externa vivirán más tiempo que la duración de la ejecución de la función externa, si la función interna logra sobrevivir más allá de la vida de la función externa.

// The outer function defines a variable called "name"
const pet = function (name) {
    const getName = function () {
      // The inner function has access to the "name" variable of the outer function
      return name;
    };
    return getName; // Return the inner function, thereby exposing it to outer scopes
};
const myPet = pet("Vivie");

console.log(myPet()); // "Vivie"



//Parámetros de función
//Hay dos tipos especiales de sintaxis de parámetros: parámetros predeterminados y parámetros rest.
//En JavaScript, los parámetros de las funciones se establecen de forma predeterminada en . Sin embargo, en algunas situaciones puede ser útil establecer un valor predeterminado diferente. Esto es exactamente lo que hacen los parámetros predeterminados.undefined

function multiply(a, b) {
    b = typeof b !== "undefined" ? b : 1;
    return a * b;
}

console.log(multiply(5)); // 5

//Con los parámetros predeterminados, ya no es necesaria una comprobación manual en el cuerpo de la función. Puede poner como valor predeterminado para en el encabezado de la función:1b

function multiply(a, b = 1) {
    return a * b;
}

console.log(multiply(5)); // 5


//La sintaxis del parámetro rest nos permite representar un número indefinido de argumentos como una matriz.

function multiply(multiplier, ...theArgs) {
    return theArgs.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]



//Funciones de flecha

const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

const a2 = a.map(function (s) {
  return s.length;
});

console.log(a2); // [8, 6, 7, 9]

const a3 = a.map((s) => s.length);

console.log(a3); // [8, 6, 7, 9]

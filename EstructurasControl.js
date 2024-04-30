//Bucles


//for
for (expresiónInicial; expresiónCondicional; expresiónDeActualización){
    instrucción
}
 
//do-while
do {i += 1}
while (condición);

//while
while (n < 3) {
    n++;
    x += n;
}

//label
for (let i = 0; i < a.length; i++) {
    if (a[i] === theValue) {
      break;
    }
}

//continue
let i = 0;
let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  n += i;
  console.log(n);
}

//for in
function dump_props(obj, obj_name) {
    let result = "";
    for (let i in obj) {
      result += obj_name + "." + i + " = " + obj[i] + "<br>";
    }
    result += "<hr>";
    return result;
}

//for of
const arr = [3, 5, 7];
arr.foo = "hola";

for (let i in arr) {
  console.log(i); // logs "0", "1", "2", "foo"
}



//Expresiones condicionales

if (condition) {
    statement_1;
  } else {
    statement_2;
}

if (condition_1) {
    statement_1;
  } else if (condition_2) {
    statement_2;
  } else if (condition_n) {
    statement_n;
  } else {
    statement_last;
}

//Valores falsos
//false, undefined, null, 0, NaN, la cadena vacía ("")



//Declaración switch

switch (expression) {
    case label_1:
      statements_1
      break;
    case label_2:
      statements_2
      break;
    default:
      statements_def
      break;
}


switch (fruittype) {
    case "Oranges":
      console.log("Las naranjas cuestan $0.59 la libra.");
      break;
    case "Apples":
      console.log("Las manzanas cuestan $0.32 la libra.");
      break;
    case "Bananas":
      console.log("Los plátanos cuestan $0.48 la libra.");
      break;
    case "Cherries":
      console.log("Las cerezas cuestan $3.00 la libra.");
      break;
    case "Mangoes":
      console.log("Los mangos cuestan $0.56 la libra.");
      break;
    case "Papayas":
      console.log("Los mangos y las papayas cuestan $2.79 la libra.");
      break;
    default:
      console.log(`Lo sentimos, no tenemos ${fruittype}.`);
}
console.log("¿Hay algo más que quieras?");


//Expresiones de manejo de excepciones

//Expresión throw

//throw "Error2"; // tipo String
throw 42; // tipo Number
throw true; // tipo Boolean
throw {
  toString: function () {
    return "¡Soy un objeto!";
  },
};

// Crea un objeto tipo de UserException
function UserException(message) {
    this.message = message;
    this.name = "UserException";
}
  // Hacer que la excepción se convierta en una bonita cadena cuando se usa como cadena
  // (por ejemplo, por la consola de errores)
UserException.prototype.toString = function () {
    return `${this.name}: "${this.message}"`;
};
  
// Crea una instancia del tipo de objeto y tírala
throw new UserException("Valor muy alto");


//Declaración try...catch

function getMonthName(mo) {
    mo = mo - 1; // Ajusta el número de mes para el índice del arreglo (1 = Ene, 12 = Dic)
    let months = [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ];
    if (months[mo]) {
      return months[mo];
    } else {
      throw "InvalidMonthNo"; // aquí se usa la palabra clave throw
    }
  }
  
  try {
    // declaraciones para try
    monthName = getMonthName(myMonth); // la función podría lanzar una excepción
  } catch (e) {
    monthName = "unknown";
    logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
}


//El bloque finally

openMyFile();
try {
  writeMyFile(theData); // Esto puede arrojar un error
} catch (e) {
  handleError(e); // Si ocurrió un error, manéjalo
} finally {
  closeMyFile(); // Siempre cierra el recurso
}


//Utilizar objetos Error

function doSomethingErrorProne() {
    if (ourCodeMakesAMistake()) {
      throw (new Error('El mensaje'));
    } else {
      doSomethingToGetAJavascriptError();
    }
  }
  
  try {
    doSomethingErrorProne();
  } catch (e) {               // AHORA, en realidad usamos `console.error()`
    console.error(e.name);    // registra 'Error'
    console.error(e.message); // registra 'The message' o un mensaje de error de JavaScript
}


//with
//Esta sentencia te permite acceder a las propiedades de un objeto de forma más concisa, utilizando el nombre de la propiedad directamente en lugar de la notación de punto o corchetes.

const persona = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 30
};
  
with (persona) {
    console.log(nombre, apellido, edad); // Acceso directo a las propiedades
}
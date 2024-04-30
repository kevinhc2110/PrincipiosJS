//crear

var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;


var myCar = {
    make: "Ford",
    model: "Mustang",
    year: 1969,
};


//Enumerar las propiedades de un objeto

function listAllProperties(o) {
    var objectToInspect;
    var result = [];
  
    for (
      objectToInspect = o;
      objectToInspect !== null;
      objectToInspect = Object.getPrototypeOf(objectToInspect)
    ) {
      result = result.concat(Object.getOwnPropertyNames(objectToInspect));
    }
  
    return result;
}


//Objeto creado con iniciador

var obj = {
    property_1: value_1, // property_# puede ser un identificador...
    2: value_2, // o un número...
    // ...,
    "property n": value_n,
}; // o una cadena


//Usar una función constructora

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}


//Definición de métodos

objectName.methodname = functionName;

var myObj = {
  myMethod: function(params) {
    // ...hacer algo
  }

};

function displayCar() {
    var result = `Un hermoso ${this.year} ${this.make} ${this.model}`;
    pretty_print(result);
}


//this

const Manager = {
    name: "John",
    age: 27,
    job: "Software Engineer",
};
  
const Intern = {
    name: "Ben",
    age: 21,
    job: "Software Engineer Intern",
};
  
function sayHi() {
    console.log("Hola, mi nombre es ", this.name);
}
  
// agrega la función sayHi a ambos objetos
Manager.sayHi = sayHi;
Intern.sayHi = sayHi;

Manager.sayHi(); // Hola, mi nombre es John'
Intern.sayHi(); // Hola, mi nombre es Ben'


//Definición de captadores (getters) y establecedores (setters)
//Un captador (getter) es un método que obtiene el valor de una propiedad específica. Un establecedor (setter) es un método que establece el valor de una propiedad específica.

var o = {
    a: 7,
    get b() {
      return this.a + 1;
    },
    set c(x) {
      this.a = x / 2;
    },
};
  
console.log(o.a); // 7
console.log(o.b); // 8 <-- En este punto se inicia el método get b().
o.c = 50; // <-- En este punto se inicia el método set c(x)
console.log(o.a); // 25


//Eliminar propiedades

var myobj = new Object();
myobj.a = 5;
myobj.b = 12;

// Elimina la propiedad a, dejando a myobj solo con la propiedad b.
delete myobj.a;
console.log("a" in myobj); // muestra: "false"


//Comparar objetos

// Dos variables, dos distintos objetos con las mismas propiedades
var fruit = { name: "apple" };
var fruitbear = { name: "apple" };

fruit == fruitbear; // devuelve false
fruit === fruitbear; // devuelve false

// Dos variables, un solo objeto
var fruit = { name: "apple" };
var fruitbear = fruit; // Asigna la referencia del objeto fruit a fruitbear

// Aquí fruit y fruitbear apuntan al mismo objeto
fruit == fruitbear; // devuelve true
fruit === fruitbear; // devuelve true

fruit.name = "grape";
console.log(fruitbear); // Produce: { name: "grape" }, en lugar de { name: "apple" }


//Prototipo

const persona = {
    nombre: "Juan"
};

console.log(persona.hasOwnProperty("nombre")); // true (propiedad definida en el propio objeto)
console.log(persona.hasOwnProperty("toString")); // false (propiedad heredada del prototipo)
console.log(persona.toString()); // "Juan" (método heredado del prototipo)


//herencia

function Persona(nombre) {
    this.nombre = nombre;
}
  
Persona.prototype.presentarse = function() {
    console.log(`Hola, soy ${this.nombre}.`);
};

const desarrollador = new Persona("Juan");
desarrollador.presentarse(); // Imprime: Hola, soy Juan.


//Encapsulación: Agrupar datos y funcionalidades dentro de objetos para ocultar la implementación interna y protegerlos de modificaciones externas.
//Abstracción: Exponer solo las interfaces necesarias para interactuar con los objetos, ocultando la complejidad interna.
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} hace un sonido.`);
  }
}
//Herencia: Permitir que nuevos objetos hereden propiedades y métodos de objetos existentes, promoviendo la reutilización de código.
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} hace un sonido.`);
  }
}
class Dog extends Animal {
  constructor(name, type) {
    super(name);
    this.type = type;
  }
}
//Polimorfismo: Habilitar que objetos de diferentes clases respondan al mismo mensaje de manera diferente, fomentando la flexibilidad.
class Calculator {
  add(a, b) {
    return a + b;
  }
}

class Calculator {
  add(a, b) {
    return a + b;
  }

  add(a) {
    return a + 1;
  }
}




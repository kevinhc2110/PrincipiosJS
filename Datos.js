var numero = 1; //numero
var string = "Hola"; //string
var boolean = false; //boolean
var pepe = null; //null
var coco = undefined; //undifined
let sym1 = Symbol(); //symbol
var myCar = new Object(); //objeto


//Coercion 

const valor1 = "5";
const valor2 = 9;
let suma = valor1 + valor2;

console.log(suma);

//El compilador pudo haber coercido el 5 a un número y retornar el valor de 14, pero no lo hizo. Para retornar ese resultado, tendrías que convertir explícitamente el 5 a un número usando el método Number()
sumar = Number(valor1) + valor2;
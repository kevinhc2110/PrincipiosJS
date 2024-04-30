//Operdores de asginacion

x = y; //Asignacion
x += y; //Suma
x -= y; //Resta
x *= y; //Multiplicacion
x /= y; //Division
x %= y; //Residuo
x **= y; //Exponeciacion
x <<= y; //Asignación de desplazamiento a la izquierda
x >>= y; //Asignación de desplazamiento a la derecha
x >>>= y; //Asignación de desplazamiento a la derecha sin signo
x &= y; //Asignación AND bit a bit
x ^= y; //Asignación XOR bit a bit
x |= y; //Asignación OR bit a bit
x &&= y; //Asignación AND lógico
x ||= y; //Asignación OR lógico
x ??= y; //Asignación de anulación lógica


//Desestructuración
var foo = ["one", "two", "three"];

// sin desestructurar
var one = foo[0];
var two = foo[1];
var three = foo[2];

// con desestructuración
var [one, two, three] = foo;



//Operadores de comparación

3 == var1 //Igual
var1 != 4 //No es igual

3 === var1 //Estrictamente igual
Object.is(valor1, valor2); //Determina si dos valores son iguales

var1 !== "3" //Desigualdad estricta
var2 > var1 //Mayor que
var2 >= var1 //Mayor igula que
var1 < var2 //Menor que
var1 <= var2 //Menor igual que



//Operadores aritméticos

12 % 5 //Residuo
++x //Devuelve el valor de su operando después de agregar uno
x++ //Devuelve el valor de su operando antes de agregar uno.
--x //Devuelve el valor de su operando después de quitarle uno
x-- //Devuelve el valor de su operando antes de quitarle uno.
-x //Operador unario. Devuelve la negación de su operando.
+x //Operador unario. Intenta convertir el operando en un número, si aún no lo es.
2 ** 3 //Calcula la base a la potencia de exponente, es decir, baseexponente



//Operadores bit a bit

a & b //AND a nivel de bits. Devuelve un uno en cada posición del bit para los que los bits correspondientes de ambos operandos son unos.
a | b //OR a nivel de bits. Devuelve un cero en cada posición de bit para el cual los bits correspondientes de ambos operandos son ceros.
a ^ b //XOR a nivel de bits. Devuelve un cero en cada posición de bit para la que los bits correspondientes son iguales. 
~ a //NOT a nivel de bits. Invierte los bits de su operando.
a << b //Desplazamiento a la izquierda. Desplaza a en representación binaria b bits hacia la izquierda, desplazándose en ceros desde la derecha.
a >> b //Desplazamiento a la derecha de propagación de signo. Desplaza a en representación binaria b bits a la derecha, descartando los bits desplazados.
a >>> b //Desplazamiento a la derecha de relleno cero. Desplaza a en representación binaria b bits hacia la derecha, descartando los bits desplazados y desplazándose en ceros desde la izquierda



//Operadores logicos

expr1 && expr2 //AND Lógico
expr1 || expr2 //OR lógico
!expr //NOT lógico
var1 ?? var2 //Operador de fusión nulo. 
condition ? val1 : val2 //Operador condicional (ternario)



//Operadores unarios

delete object.property; //El operador delete elimina la propiedad de un objeto
typeof operand // Devuelve una cadena que indica el tipo de operando no evaluado
typeof (operand)
void (expression) //El operador void especifica una expresión que se evaluará sin devolver un valor
void expression



//Operadores relacionales

propNameOrNumber in objectName; //Un operador relacional compara sus operandos y devuelve un valor Boolean basado en si la comparación es verdadera.
objectName instanceof objectType; //El operador instanceof devuelve true si el objeto especificado es del tipo de objeto especificado. 



//Expresiones primarias

this['propertyName'] //Utiliza la palabra clave this para hacer referencia al objeto actual.
this.propertyName



//Expresiones del lado izquierdo

var objectName = new objectType([param1, param2]); //Puedes utilizar el operador new para crear una instancia de un tipo de objeto definido por el usuario o de uno de los tipos de objeto integrados.
super([arguments]); // llama al constructor padre.
super.functionOnParent([arguments]);
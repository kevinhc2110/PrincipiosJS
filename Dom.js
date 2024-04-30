//Selección de elementos HTML:

const elemento = document.getElementById("miElemento");

const elementos1 = document.getElementsByClassName("miClase");

const elementos2 = document.getElementsByTagName("p");


//Selectores CSS: 

const elemento1 = document.querySelector("#miElemento.miClase"); // Selecciona el elemento con ID "miElemento" y clase "miClase"
const elementos = document.querySelectorAll("p.miClase"); // Selecciona todos los párrafos con clase "miClase"


//Manipulacion html

const elemento3 = document.getElementById("miElemento");
elemento.textContent = "Nuevo texto"; // Cambia el texto del elemento
elemento.innerHTML = "<p>Nuevo contenido HTML</p>"; // Cambia el HTML interno del elemento

const elemento = document.getElementById("miElemento");
elemento.setAttribute("href", "https://www.example.com"); // Agrega un atributo "href"
elemento.getAttribute("title"); // Obtiene el valor del atributo "title"
elemento.removeAttribute("title"); // Elimina el atributo "title"

const elementoPadre = document.getElementById("padre");
const nuevoElemento = document.createElement("p");
nuevoElemento.textContent = "Nuevo párrafo";
elementoPadre.appendChild(nuevoElemento); // Agrega el nuevo párrafo al final del elemento padre


//Eventos DOM

const elemento = document.getElementById("miElemento");
elemento.addEventListener("click", function() {
  alert("¡Elemento cliqueado!");
});


//Formularios:

const formulario = document.getElementById("miFormulario");
const campoNombre = document.getElementById("nombre");
const campoEmail = document.getElementById("email");

formulario.addEventListener("submit", function(event) {
  event.preventDefault(); // Evita el envío predeterminado del formulario

  const nombre = campoNombre.value;
  const email = campoEmail.value;

  // Validar entrada y enviar datos al servidor
  // ...
});
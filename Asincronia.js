//La descripción que acabamos de ver de las funciones asíncronas podría recordarte a los manejadores de eventos, y si es así, tendrías razón. Los manejadores de eventos son, en realidad, una forma de programación asíncrona: proporcionas una función 


//Eventos

{/* <button id="xhr">Pulse para iniciar la solicitud</button>
<button id="reload">Recargar</button>

<pre readonly class="event-log"></pre> */}

const log = document.querySelector(".event-log");

document.querySelector("#xhr").addEventListener("click", () => {
  log.textContent = "";

  const xhr = new XMLHttpRequest();

  xhr.addEventListener("loadend", () => {
    log.textContent = `${log.textContent}Finalizado con el estado: ${xhr.status}`;
  });

  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
  );
  xhr.send();
  log.textContent = `${log.textContent}Inicio de la solicitud XHR\n`;
});

document.querySelector("#reload").addEventListener("click", () => {
  log.textContent = "";
  document.location.reload();
});


//Callbacks

function doStep1(init) {
    return init + 1;
}
  
function doStep2(init) {
    return init + 2;
}

function doStep3(init) {
    return init + 3;
}

function doOperation() {
    let result = 0;
    result = doStep1(result);
    result = doStep2(result);
    result = doStep3(result);
    console.log(`resultado: ${result}`);
}
  
doOperation();


//Promesas
//es un objeto que representa la terminación o el fracaso de una operación asíncrona

function exitoCallback(resultado) {
console.log("Archivo de audio disponible en la URL " + resultado);
}

function falloCallback(error) {
console.log("Error generando archivo de audio " + error);
}

crearArchivoAudioAsync(audioConfig, exitoCallback, falloCallback);


crearArchivoAudioAsync(audioConfig).then(exitoCallback, falloCallback);


const promesa = crearArchivoAudioAsync(audioConfig);
promesa.then(exitoCallback, falloCallback);


//Encadenamiento

const promesa3 = hazAlgo();
// const promesa2 = promesa.then(exitoCallback, falloCallback);


let promesa2 = hazAlgo().then(exitoCallback, falloCallback);


hazAlgo()
  .then(function (resultado) {
    return hazAlgoMas(resultado);
  })
  .then(function (nuevoResultado) {
    return hazLaTerceraCosa(nuevoResultado);
  })
  .then(function (resultadoFinal) {
    console.log("Obtenido el resultado final: " + resultadoFinal);
  })
.catch(falloCallback);


hazAlgo()
  .then((resultado) => hazAlgoMas(resultado))
  .then((nuevoResultado) => hazLaTerceraCosa(nuevoResultado))
  .then((resultadoFinal) => {
    console.log(`Obtenido el resultado final: ${resultadoFinal}`);
  })
  .catch(falloCallback)


//Manejo de errores

try {
    let resultado = syncHazAlgo();
    let nuevoResultado = syncHazAlgoMas(resultado);
    let resultadoFinal = syncHazLaTerceraCosa(nuevoResultado);
    console.log(`Obtenido el resultado final: ${resultadoFinal}`);
  } catch (error) {
    falloCallback(error);
}


//Funciones async
//Cuando se llama a una función async, esta devuelve un elemento Promise. Cuando la función async devuelve un valor, Promise se resolverá con el valor devuelto. Si la función async genera una excepción o algún valor, Promise se rechazará con el valor generado.

function resolveAfter2Seconds(x) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }
  
  async function add1(x) {
    const a = await resolveAfter2Seconds(20);
    const b = await resolveAfter2Seconds(30);
    return x + a + b;
  }
  
  add1(10).then((v) => {
    console.log(v); // prints 60 after 4 seconds.
  });
  
  async function add2(x) {
    const p_a = resolveAfter2Seconds(20);
    const p_b = resolveAfter2Seconds(30);
    return x + (await p_a) + (await p_b);
  }
  
  add2(10).then((v) => {
    console.log(v); // prints 60 after 2 seconds.
  });


//await
//El operador await es usado para esperar a una Promise. Sólo puede ser usado dentro de una función

function resolveAfter2Seconds(x) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }
  
  async function f1() {
    var x = await resolveAfter2Seconds(10);
    console.log(x); // 10
  }
  f1();
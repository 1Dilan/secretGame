//la forma de conectar nuestro javascript con el HTML es a traves del DOM (Document Object Model)
// El DOM es una representación estructurada del documento HTML que permite interactuar con sus elementos y trabajar con diferentes propiedades y métodos.
// El DOM nos permite acceder y manipular los elementos del documento HTML de manera dinámica.
//  let title = document.querySelector('h1'); // Selecciona el primer elemento <h1> del documento y hace posible asignarselo a una variable, es un objeto
//  title.innerHTML = 'Juego del numero secreto!'; // Modifica el contenido del elemento <h1> para que muestre "Hola, Mundo!"

//  let paragraph = document.querySelector('p');
//  paragraph.innerHTML='Adivina el numero secreto entre 1 y 10'; // Modifica el contenido del elemento <p> para que muestre "Adivina el numero secreto entre 1 y 100"

//todos los elemntos de javascript inician con el metodo o palabra on como onclick, onmouseover, onmouseout, etc.
//palabra reservada Fuction, se usa para declarar una funcion el cuerpo de la funcion es el bloque de codigo que se ejecuta cuando se llama a la funcion
function userAttempt() {
   alert('clikc del boton'); // Muestra una alerta al usuario con el mensaje "Intento del usuario"
   return; //buena practica usar return para finalizar la ejecucion de la funcion
}


function assignText
   (elemento, texto) {
   let title = document.querySelector(elemento); // Selecciona el primer elemento <h1> del documento y hace posible asignarselo a una variable, es un objeto
   title.innerHTML = texto;
   return;
}
assignText
   ('h1', 'Juego del numero secreto!');
assignText
   ('p', 'Adivina el numero secreto entre 1 y 10');

let secretNumber =0; // Genera un número aleatorio entre 1 y 10
let attempts = 0;
let listaNumerosSorteados = []; // Arreglo de números aleatorios
let numeroMAximo = 3; // Número máximo para el juego
function verifyAttempt() {
   let numberUser = parseInt(document.getElementById('userValue').value); // Selecciona el valor del input con id "userValue"
   //  console.log(numberUser); // Muestra el valor del input en la consola
   //  console.log(secretNumber); // Muestra el número secreto en la consola
   // console.log(numberUser == secretNumber);// Compara el valor del input con el número secreto es un booleano PERO SOLO COMPARA EL VALOR, NO EL TIPO DE DATO
   console.log(numberUser === secretNumber); //ek triple igual compara el valor y el tipo de dato
   console.log(attempts);
   if (numberUser === secretNumber) {
      assignText('p', `¡Felicidades, adivinaste el número secreto en ${attempts} ${(attempts === 1) ?  'intento' : 'intentos'}!)`); // Muestra un mensaje de felicitación si el número ingresado es igual al número secreto
   document.getElementById('reiniciar').removeAttribute('disabled'); // Deshabilita el botón "Nuevo juego" = false; // Habilita el botón "Nuevo juego" si se adivina el número secreto
   } else {
      attempts++; // Incrementa el contador de intentos
    if (attempts > numeroMAximo) {
      assignText('p', `¡Has alcanzado el límite de 10 intentos! El número secreto era ${secretNumber}.`);
      document.getElementById('reiniciar').removeAttribute('disabled');
      return;
   }
      if (numberUser < secretNumber) {
         assignText('p', 'El número secreto es mayor.'); // Muestra  si el número ingresado es menor que el número secreto
      } else {
         assignText('p', 'El número secreto es menor.'); // Muestra si el número ingresado es mayor que el número secreto
      }
      
      limpiarInput(); // Limpia el valor del input con id "userValue"

   }
   return;
}

function limpiarInput() {
   return document.querySelector('#userValue').value = ''; // Limpia el valor del input con id "userValue"
  
}

function condicionesIniciales() {
   assignText('h1', 'Juego del numero secreto!'); // Asigna el texto "Juego del numero secreto!" al elemento <h1>
   assignText('p', 'Adivina el numero secreto entre 1 y 10'); // Asigna el texto "Adivina el numero secreto entre 1 y 10" al elemento <p>

   secretNumber = generateRandomNumber(1, 10); // Genera un nuevo número aleatorio entre 1 y 10
   attempts = 1; // Reinicia el contador de intentos a 1
   listaNumerosSorteados = []; // Reinicia la lista de números sorteados
}  

function ReiniciarJuego(){
//limpiar la caja de texto
   limpiarInput(); // Limpia el valor del input con id "userValue"
   
condicionesIniciales(); 
  document.querySelector('#reiniciar').setAttribute('disabled', true); // Deshabilita el botón "Nuevo juego"
}


function generateRandomNumber() {
   let numeroGenerado = Math.floor(Math.random() * numeroMAximo) + 1;
      console.log(`numero ${numeroGenerado}`);
//si ya se sortearon todos los números posibles, reinicia el juego
   if (listaNumerosSorteados.length == numeroMAximo) {
    assignText('p','Todos los números ya han sido sorteados, reiniciando el juego...');
   
   }else{
       //si el número generado ya está en la lista, vuelve a generar un nuevo número
   if (listaNumerosSorteados.includes(numeroGenerado)) {
   console.log(`numero ${numeroGenerado} ya está en la lista, generando otro...`);
  return generateRandomNumber(); // Vuelve a generar un número aleatorio si ya está en la lista


   }else{
      listaNumerosSorteados.push(numeroGenerado); // Agrega el número generado a la lista de números sorteados
            console.log(listaNumerosSorteados);

      return numeroGenerado; // Devuelve un número aleatorio entre min y max
   }
   }
  
}
condicionesIniciales();// Inicializa el juego al cargar la página

// arreglos





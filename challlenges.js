//Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
let challengeTitle = document.querySelector('h1');
challengeTitle.innerHMTL='Hora del Desafío';

//Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
function consoleMessage(){
    console.log('El botón fue clicado'); // Muestra un mensaje en la consola cuando se presiona el botón
}
//Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".

 function promptCity() {
    let contry =prompt('¿Cuál es tu ciudad favorita de Brasil?'); // Muestra un cuadro de diálogo para que el usuario ingrese su ciudad favorita
    alert(`Estuve en ${contry} y me acorde de ti`)
 }

 //Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
 function name(name){
    console.log(`hola ${name}`)
 }

 //Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
 function userNumber(number){

    console.log(number*2); // Muestra el valor del input en la consola
    return number * 2; // Devuelve el doble del número ingresado
 }

 function generateAverage(number1, number2, number3){
return (number1 + number2 + number3) / 3; // Calcula el promedio de los tres números
 }

 //Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
 function CalculaIMC(peso,altura){
return peso/altura *2;

 }
 
 //Crea una función que calcule el valor del factorial de un número pasado como parámetro.
 function FactorialNumber(Number){
   if(Number === 0){
      alert(`el numero ${Number} tiene como factorial 1`);
      return 1;
   }else if (Number < 0){
      alert('No existe el factorial de un numero negativo');
      return null;
   }else{
      let factorial = 1;
      for(let i = 1; i <= Number; i++){
         factorial *= i;
      }
      return factorial;
   }
 }

 //Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
 function ConvertToDolar(colon, dolarPrice){
   return colon/dolarPrice;
 }
 

 //Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
 function CalculatePerimeter(base, height){
   return 2 * (base + height);
 }

 //Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
 function CalculateCirclePerimeter(radio){
   const PI = 3.14;
   return 2 * PI * radio;
 }

 //Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
   function MultiplicationTable(number){  
   for (let i = 1; i <= 10; i++) {
      console.log(`${number} x ${i} = ${number * i}`);   
      }
   }
   
   // Crea una lista vacía llamada "listaGenerica".
   let listaGenerica =[];

   let lenguajesProgramacion = ['JavaScript', 'Python', 'Java', 'C#', 'Ruby'];
   //Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
   lenguajesProgramacion.push('kotlin'); // Agrega "Go" al final del arreglo

   //Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
   function mostrarLenguajes(){
      console.log(lenguajesProgramacion);
   }
//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
   function numerosInvertidos(){
   let listaNumeros =[3, 7, 2, 9, 4, 1, 5];
let numerosInvertidos = listaNumeros.slice().reverse(); // Crea una copia del arreglo y lo invierte
console.log(numerosInvertidos); // Muestra el arreglo invertido en la consola
   }

   //Crea una función que calcule el promedio de los elementos en una lista de números.
   function listaPromedios(){
      let listaNumeros =[3, 7, 2, 9, 4, 1, 5];
      let suma = 0;
      for(let i=0; i< listaNumeros.length; i++){
suma+= listaNumeros[i];
      }
      console.log(suma);
      console.log(listaNumeros.length);
      console.log(suma/listaNumeros.length);
      return suma/listaNumeros.length;
   }
//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
   function listaMAyorMenor(){
let listaNumeros =[3, 7, 2, 9, 4, 1, 5];
let mayor =listaNumeros[0];//inicializa la variable mayor con el primer elemento del arreglo
let menor = listaNumeros[0];
for(let i=0; i< listaNumeros.length; i++){
if(mayor<listaNumeros[i]){
   mayor = listaNumeros[i];
}
if (menor>listaNumeros[i]){
   menor = listaNumeros[i];
}
}
console.log(`El número mayor es ${mayor} y el número menor es ${menor}`); // Muestra el número mayor y menor en la consola
return;

   }

//Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
   function mostarNumeroBuscado() {
      let listadoNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Lista de números del 1 al 10
   let numberUser = parseInt(document.querySelector('#userValue').value); // Obtiene el valor del input con id "userValue" y lo convierte a un número entero
   for (let i = 0; i < listadoNumeros.length; i++) {

      if(numberUser === listadoNumeros[i]) { // Verifica si el número ingresado por el usuario está en la lista de números sorteados
   console.log(`el numero ${numberUser} se encuentra en la lista de números sorteados`);
   break; // Sale del bucle si el número se encuentra en la lista
      }
      if (i === listadoNumeros.length - 1) { // Si se llega al final de la lista y no se encontró el número
         console.log(`el numero ${numberUser} no se encuentra en la lista de números sorteados`);
      }

   }      return;
   }

   //Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.

   function sumarListas(lista1, lista2) {
      if (lista1.length !== lista2.length) {
         console.log('Las listas deben tener el mismo tamaño');
         return;
      }
      let listaSuma = [];
      for (let i = 0; i < lista1.length; i++) {
         listaSuma.push(lista1[i] + lista2[i]);
      }
      console.log(`La suma de las listas es: ${listaSuma}`);
      return;
   }

   //Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function cuadradoLista(listaNumeros) {
   let listaCuadrados = [];   
   for (let i = 0; i < listaNumeros.length; i++) {
      listaCuadrados.push(listaNumeros[i] * listaNumeros[i]); // Calcula el cuadrado de cada número y lo agrega a la nueva lista
   }
   console.log(`La nueva lista con el cuadrado de cada número es: ${listaCuadrados}`);
   return;
   }
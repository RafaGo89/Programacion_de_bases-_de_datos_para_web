console.log("Variables y constantes");

console.log("Tipos de datos primitivos");
let x;

console.log(typeof x);

x = 10;
console.log(typeof x);

let saludo = "Hola";

console.log(typeof saludo);

x = true;

console.log(typeof x);

let y = 3.1416;

console.log(typeof y);

let n = null;

console.log(typeof n);

const c = 234;

// NO se puede
// c = 123;

const c2 = "Constante";

console.log(typeof c2);

let x1 = 1,
  x2 = 2,
  x3 = 3;

console.table({ x1, x2, x3 });

console.log(saludo + c2);

console.log(x1 + x2);

console.log(x1 + x2 + saludo);

console.log(c2 + x1 + x2);

// Métodos globales del objeto global window (solo funcionan en el navegador)
// let nombre = prompt("Introduce tu nombre");
// alert(nombre);

// let respuesta = confirm("¿Continuar?");

// alert(respuesta);
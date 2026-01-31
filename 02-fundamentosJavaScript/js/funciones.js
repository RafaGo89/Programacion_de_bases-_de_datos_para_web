/***************** Declaración de funciones ********************/

function cuadrado(x) {
  return x * x;
}

let resp = cuadrado(2);
console.log(resp);

/***************** Expresiones de funciones ********************/

const cuadrado1 = function (x) {
  return x * x;
};

let resp1 = cuadrado1(3);
console.log(resp1);

//let x = 10;
//console.log(x);

/***************** Funciones flecha ********************/

const cuadrado2 = x => {
  return x * x;
};

let resp2 = cuadrado(4);
console.log(resp2);

// Si el cuerpo de una función flecha consiste de una sola instrucción
// de retorno, es posible omitir las llaves del cuerpo y la palabra
// reservada "return"

const cuadrado3 = x => x * x;

let resp3 = cuadrado3(5);
console.log(resp3);

// Si los parámetros de la función consisten de un solo elemento,
// es posible omitir los paréntesis

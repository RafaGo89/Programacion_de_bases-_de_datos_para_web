/************** Métodos iteradores ***********/

let a1 = [10, 20, 30, 40, 50];

// Desplegar cada valor del arreglo
a1.forEach(valor => {
  console.log(valor);
});

// Sumar 1 a todos los elementos del arreglo
a1.forEach((valor, indice, arreglo) => {
  arreglo[indice] = valor + 1;
});

console.log(a1);

// Sumar los valores del arreglo
let suma = 0;
a1.forEach(x => {
  suma += x;
});
console.log(suma);

// Multiplicar cada elemento de a1 por 2, creando un nuevo arreglo
const a2 = a1.map(x => x * 2);

console.log(a2);

// Obtener un arreglo con los elementos mayores a 50

const may50 = a2.filter(x => x > 50); // (x) => { return x > 50 }
console.log(may50);

const may40 = a2.find(x => x > 40);
console.log(may40);

const idxMay60 = a2.findIndex(x => x > 60);
console.log(idxMay60);

console.log(a2.every(x => x > 10));
console.log(a2.every(x => x > 30));

console.log(a2.some(x => x > 30));
console.log(a2.some(x => x > 200));

/************** Métodos para pilas y colas ***********/

const frutas1 = ['Manzana', 'Pera', 'Guayaba', 'Mango'];

let tam = frutas1.push('Kiwi');

console.log(frutas1);
console.log(tam); // Número de elementos del arreglo modificado

let f1 = frutas1.pop();
console.log(f1);
console.log(frutas1);

tam = frutas1.unshift('Kiwi');
console.log(tam);
console.log(frutas1);

let f2 = frutas1.shift();
console.log(f2);
let f3 = frutas1.shift();
console.log(f3);
console.log(frutas1);

/************** Métodos para sub-arreglos ***********/

const a3bis = [10, 20, 30, 40, 50, 20, 40, 20];

// Eliminar 40
a3bis.splice(3, 1);

console.log(a3bis);

// Insertar "Kiwi" en la segunda posición
frutas1.splice(1, 0, 'Kiwi');
console.log(frutas1);
// Reemplazar "Guayaba" por "Piña"
frutas1.splice(2, 1, 'Piña');
console.log(frutas1);
// Insertar "Fresa", "Sandía" y "Naranja" entre "Piña" y "Mango"
frutas1.splice(3, 0, 'Fresa', 'Sandía', 'Naranja');
console.log(frutas1);
// Eliminar los dos primeros elementos
let res = frutas1.splice(0, 2);
console.log(frutas1);
console.log(res);

/************** Métodos de búsqueda y ordenamiento ***********/

console.log(frutas1.includes('Pera'));
console.log(frutas1.includes('Kiwi'));

console.log(frutas1.includes('pera'));

const a3 = [10, 20, 30, 40, 50, 20, 40, 20];

console.log(a3.indexOf(10));
console.log(a3.indexOf(20));
console.log(a3.indexOf(20, 3));
console.log(a3.indexOf(100));
console.log(a3.indexOf('20'));

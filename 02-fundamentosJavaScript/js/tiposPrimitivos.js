console.log(0xff);
console.log(0x10);
console.log(0o77);
console.log(0o100);
console.log(0b1111);
console.log(0b10);

console.log(1.0e10);
console.log(2.34e-3);

console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);

let x = 123;

let s = x.toString(2);
console.log(s);
console.log(typeof s);

console.log((10).toString(16));

console.log(x.toFixed(2));

console.log(x.toExponential());

let p = 3.1416;

console.log(p.toPrecision(4));

console.log((1 / 3).toPrecision(5));

console.log(isNaN(p));

let x2 = "Hola";
console.log(isNaN(x2));

console.log(Math.E);
console.log(Math.PI);

console.log(Math.sqrt(2));

console.log(Math.log2(x));

console.log("Hola");

let nombre = "Juan";
nombre = "María";

// Para escribir los `back ticks`: AltGr+}  <Espacio>
console.log(`Hola, ${nombre}`);

console.log(nombre.charAt(1));

console.log(x2.replace("a", "i"));
console.log(x2);
let x3 = x2.replace("a", "i");
console.log(x3);
x2 = "Hola 2";
console.log(x2);

// Los strings son inmutables (no se pueden cambiar una vez creados)
// Sin embargo, es posible reutilizar una variable de tipo string
// para contener un valor diferente

let x4 = x2.slice(0, 4);
console.log(x4);
let cuenta = 10;
console.log(cuenta + " hamburguesa");

let n1 = "10";

let n1num = parseInt(n1);
console.log(typeof n1num);
console.log(n1num);

let n2 = "3.1416";

console.log(parseFloat(n2));

// Literales de arreglo

const vacio = []

console.log(vacio)

const primos = [1, 2, 3, 5, 7]

// {} es un objeto
const a = [12, 'Hola', true, ['Adiós', undefined, null], 34, {}]

console.log(a[0])
console.log(a[3])
console.log(a.length)
console.log(a[3].length)
console.log(a[3][0]) // "Adiós"
const a1 = [primos]
console.log(a1)

let x1 = 10
let y1 = 20
let z1 = 30
// Crear elementos con las expresiones evaluadas
const a2 = [x1 + y1, y1 - z1]
console.log(a2)

const a3 = [1, 2, 3]

const a4 = [1, , 3]
console.log(a4)
console.log(a4.length)

const a5 = [, ,]
console.log(a5.length)

const a6 = [...primos, 11, 13]
console.log(a6)

// Copia de referencias (no es una copia de arreglos)
const a7 = a6

console.log(a7)
a7[0] = 1.1
console.log(a7)
console.log(a6)

// Copia de arreglo usando el operador "spread"
const a8 = [...a6]
console.log(a8)
a8[0] = 1
console.log(a6)
console.log(a8)

let s = 'JavaScript' // Un string es iterable
const a9 = [...s]
console.log(a9)

console.log(s[0])

// Los strings son inmutables (una vez creados, no se pueden modificar)
s[0] = 'j'
console.log(s)

a9[0] = 'j'
console.log(a9)

for (let c of a9) {
  console.log(c)
}

for (let c of s) {
  console.log(c)
}

const a10 = new Array()
console.log(a10)
a10[0] = 10
console.log(a10)
a10[5] = 60
console.log(a10)
console.log(a10.length)

a10.length = 3
console.log(a10)

const a11 = new Array(10)
console.log(a11)
console.log(a11.length)
const a12 = new Array(10, 11, 12)
console.log(a12)
delete a12[1]
console.log(a12)

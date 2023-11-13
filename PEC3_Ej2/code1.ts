/*
const a = 1 + 2;
const b = a + 3;
const c = {
  apple: a,
  banana: b
};
const d = c.apple * 4;

*/

const a = 1 + 2;
const b = a + 3;
// Inntentem assignar un número a una cadena de text.
const c: string = a + b; // Error perquè estem intentant assignar un `number` a un `string`.

const d = c.apple * 4; // Error ja que `c` ja no és un objecte, sinó una cadena de text.

function printArray(array: Array<number>): void {
    console.log(array.join(", ")); // Això imprimirà els elements de l'array separats per una coma i un espai
}

let array: number[] = [2, 3, 4];

console.log(array[0]); // Es mostra per pantalla el primer element de l'array, que és 2

printArray(array); // S'imprimeix 2, 3, 4

array.push(5); // Afegeix el número 5 al final de l'array
console.log(array[array.length - 1]); // S'imprimeix l'últim element de l'array, que ara és 5

printArray(array); // Això imprimirà 2, 3, 4, 5

array = [8, ...array.slice(1)]; // Substitueix el primer element de l'array per 8
printArray(array); // Això imprimirà 8, 3, 4, 5

let everyNumberIsGreaterThan3 = array.every(x => x > 3); // Comprova si cada element de l'array és major que 3
console.log(everyNumberIsGreaterThan3); // Imprimeix false perquè hi ha elements que són 3 o menys

let everyNumberIsLessThan10 = array.every(x => x < 10); // Comprova si cada element de l'array és menor que 10
console.log(everyNumberIsLessThan10); // Simprimeix true ja que tots els elements són menys de 10

console.log(array.sort((a, b) => a - b)); // S'ordena l'array en ordre ascendent i el mostra per pantalla.
console.log(array); // S'imprimieix l'array ja ordenat.


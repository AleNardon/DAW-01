// Arrays
// a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
// "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por
// consola los meses 5 y 11 (utilizar console.log).
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log(meses[4], meses[10]);
// b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
let mesesOrdenados = [...meses];
mesesOrdenados=mesesOrdenados.sort();
console.log(mesesOrdenados);

// c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
let arr1 = [...meses];
arr1.unshift("Principio");
arr1.push("Final");
console.log(arr1);
// d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
arr1.shift();
arr1.pop();
console.log(arr1);

// e. Invertir el orden del array (utilizar reverse).
arr1.reverse();
console.log(arr1);
// f. Unir todos los elementos del array en un único string donde cada mes este
// separado por un guión - (utilizar join).
let sarr = arr1.join("-");
console.log(sarr);
// g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre
// (utilizar slice).
console.log(meses.slice(4, 11));
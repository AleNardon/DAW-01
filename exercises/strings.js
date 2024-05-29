// Strings
// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el
// texto en mayúscula (utilizar toUpperCase).
let s7 = "hola mundo";
s7 = s7.toUpperCase();
console.log(s7);

// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
// string con los primeros 5 caracteres guardando el resultado en una nueva
// variable (utilizar substring).
let s8 = "hola mundo";
let s9 = s8.substring(0,5);
console.log(s9);

// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
// string con los últimos 3 caracteres guardando el resultado en una nueva variable
// (utilizar substring).
let s10 = "hola mundo";
let s11 = s10.substring(s10.length - 3);
console.log(s11);

// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
// string con la primera letra en mayúscula y las demás en minúscula. Guardar el
// resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y
// el operador +).
s12 = "hola Mundo";
s13 = s12.substring(0,1).toUpperCase() + s12.substring(1).toLowerCase();
console.log(s13);
// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en
// blanco. Encontrar la posición del primer espacio en blanco y guardarla en una
// variable (utilizar indexOf).
s14 = "hola mundo";
s15 = s14.indexOf(" ");
console.log(s15);

// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y
// algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para
// generar un nuevo string que tenga la primera letra de ambas palabras en
// mayúscula y las demás letras en minúscula (utilizar indexOf, substring,
// toUpperCase, toLowerCase y el operador +).
s16 = "hola mundo";
s17 = s16.substring(0,1).toUpperCase() + s16.substring(1,s16.indexOf(" ")).toLowerCase() + " " + s16.substring(s16.indexOf(" ")+1,s16.indexOf(" ")+2).toUpperCase() + s16.substring(s16.indexOf(" ")+2).toLowerCase();
console.log(s17);
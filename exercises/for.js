// For
// a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un
// bucle for de JavaScript para mostrar una alerta utilizando cada una de las
// palabras.
let arr = ["hola", "como", "estas", "todo", "bien"];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// b. Al array anterior convertir la primera letra de cada palabra en mayúscula y
// mostrar una alerta por cada palabra modificada.

for (let i = 0; i < arr.length; i++) {
    // alert()
    console.log(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
}
// c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array
// del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de
// la variable sentence. Al final mostrar una única alerta con la cadena completa.
let sentence = "";
for (let i = 0; i < arr.length; i++) {
    sentence += arr[i] + " ";
}
console.log(sentence);
// d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con
// el número de la repetición, es decir que al final de la ejecución del bucle for
// debería haber 10 elementos dentro del array, desde el número 0 hasta al número
// 9. Mostrar por la consola del navegador el array final (utilizar console.log).
let arr2 = [];
for (let i = 0; i < 10; i++) {
    arr2.push(i);
}
console.log(arr2);
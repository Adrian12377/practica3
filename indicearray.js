var n1 = prompt('Escribe un número:');
var n2 = prompt('Escribe otro número:');
var n3 = prompt('Escribe otro número:');
var n4 = prompt('Escribe otro número:');
var n5 = prompt('Escribe otro número:');
var n6 = prompt('Escribe un último número:');

let array = [n1, n2, n3, n4, n5, n6];

console.log('El arreglo es: [' + array+ ']');

var mitad1 = parseFloat(array[0]) + parseFloat(array[1]) + parseFloat(array[2]);

console.log(array [0] + ' + ' + array [1] + ' + ' + array [2] + ' + ' + ' = '+ mitad1);

var mitad2 = parseFloat(array[3]) + parseFloat(array[4]) + parseFloat(array[5]);

console.log(array [3] + ' + ' + array [4] + ' + ' + array [5] + ' + ' + ' = '+ mitad2);

if (mitad1 == mitad2) {
    console.log('Es un arreglo con índice de equilibrio.')
}
else{
    console.log('No es un arreglo con índice de equilibrio.')
}




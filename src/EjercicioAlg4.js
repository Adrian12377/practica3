function EjercicioAlg4() {
    var num1 = prompt('Escribe un numero:');
    var num2 = prompt('Escribe un numero:');
    var num3 = prompt('Escribe un numero:');
    var num4 = prompt('Escribe un numero:');
    var num5 = prompt('Escribe un numero:');
    var num6 = prompt('Escribe un numero:');
    
    let array = [num1, num2, num3, num4, num5, num6];
    console.log('El arreglo es:[' + array+ ']');
    var x = parseFloat(array[0]) + parseFloat(array[1]) + parseFloat(array[2]);
    console.log(array [0] + ' + ' + array [1] + ' + ' + array [2] + ' + ' + ' = '+ x);
    var y = parseFloat(array[3]) + parseFloat(array[4]) + parseFloat(array[5]);
    console.log(array [3] + ' + ' + array [4] + ' + ' + array [5] + ' + ' + ' = '+ y);
    if (x == y) {
        console.log('Arreglo con Indice de equilibrio')
    }else{
        console.log('Arreglo sin Indice de equilibrio.')
    }
}

export default EjercicioAlg4;
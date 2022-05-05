function EjercicioAlg2() {
    for (var i = 2; i <= 100; i++) {
        var numprimo = 1;
        var contador = 2;
            while(contador <= i/2 && numprimo) {
                if (i % contador === 0) {
                numprimo = 0;
            }
            contador++;
        }
            if( numprimo ) {
            console.log(i + "El numero es uno primo");
        }
    }  
}

export default EjercicioAlg2;
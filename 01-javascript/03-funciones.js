//En javascript no importa si declaro al principio o al final
//Javascript siempre coge las funciones y primero las corre y luego las ejecuta.

/*
holaMundo();

function holaMundo() {
    console.log("Hola mundo");
}

//En Javascript todas las funciones devuelven algo
// Sino devuelven nada devuelven undefined
console.log(holaMundo());

function sumarDosNumeros(numeroUno, numeroDos) {
    return numeroDos + numeroUno
}

console.log(sumarDosNumeros(1, 2, 3, 4, 56, 6));
console.log(sumarDosNumeros(true, undefined, undefined, "asdas"));

//validarFuncion
function sumarDosNumeross(numeroUno, numeroDos) {
    var numeroUnoEsvalido = typeof numeroUno == 'number';
    var numeroDosEsvalido = typeof numeroUno == 'number';
    if (numeroUnoEsvalido && numeroDosEsvalido) {
        return numeroUno + numeroDos;
    } else {
        console.error('Parametros incorrectos');
        return 0;
    }
}


console.log(sumarDosNumeross(1, true));



//Sumar N numeros con 2 funciones y restricciones

function sumarNNumeros(...numeros) {
    var resultado = calcularResultadoSumarNNumeros(numeros);
    if (resultado.esValido) {
        return resultado.suma;
    } else {
        return 0;
    }
}

function calcularResultadoSumarNNumeros(numeros) {
    var suma = 0;
    var todosLosNumerosSonValidos = true;
    for (var i = 0; i < numeros.length; i++) {
        var numeroEsvalido = typeof numeros[i] == 'number';
        if (numeroEsvalido) {
            suma = suma + numeros[i];
        } else {
            todosLosNumerosSonValidos = false;
            break;
        }
    }
    var resultado = {
        suma: suma,
        esValido: todosLosNumerosSonValidos
    };
    return resultado;
}

console.log(sumarNNumeros(10, 1, 2, 3));
*/


//*******************************************Parametros como funciones.
function saludar(nombre) {
    return `Hola ${nombre.toUpperCase()}`;  //templateString sirve para mandar cualquier variable que llgue
}

function saludarConFuncion(nombre, funcion){
    return `Hola ${funcion(nombre)}`;
}

function nombreEnMayusculas(nombre){
    return nombre.toUpperCase()
}

function nombreEnMinusculas(nombre){
    return nombre.toLowerCase()
}

function nombreConPunto(nombre){
    return nombre + "."
}

console.log(saludarConFuncion("Jose", nombreEnMayusculas));
console.log(saludarConFuncion("Jose", nombreEnMinusculas));
console.log(saludarConFuncion("Jose", nombreConPunto));

console.log(saludar("Jose"));
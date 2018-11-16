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


/*
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

//FUNCIONES Y OPERADORES
 */


function  restart(a,b) {
    return a-b;
}
console.log(restart (10,6));// Ejecucion 2
console.log(typeof  restart); //Tipo de funcion
console.log(restart); //Definicion de la funcion

// Anonymous function
// Se puede usar como parametro de funcion, como variable como parte de un objeto, en un arreglo.

var ejemplo= function (){} //se puede guardar una funcion anonima en una variable


//F. en un objeto.
var adrian = {
    trabajo: function () {

    }
} ;// Tambien hay como agregarles a las propiedades de un objeto JS


//F. anonimas en un arreglo
var arreglo = [
    function () {
        //implementacion
    }
];

// enviar funcion anonima scomo una definicion de una funcion.
saludar("Maria" , function (nombre) {
    return nombre + "Eguez"
});

//Olvidar cosas
//var variable; // NUNCA MAS

let variableDos =2; //esta si la vamos a usar
variableDos = 3;

//La diferencia son los closuers
const  edad = 29;
//const edad = 28;
const nombre = 'Adrian';
//nombre = 'Vicente'
const casado = 'true';
//casado = false
const hijos = null
// hijos = 1
const ganarDinero = function () {
    return 1
}
//ganarDinero() = function () {
    //return 2
//}

// Para reasignar
const vicente = {
    nombre:'Vicente'
}
vicente.nombre = 'Adrian';
vicente.isPrototypeOf();

const arregloUnoDos = [1,2];
arregloUnoDos[0] = 3;
arregloUnoDos.push(5);
arregloUnoDos.pop();

//Con variables constantes no se puede reasignar variables
//Si se puede usar funciones.
//Nunca mas vamos a usar las funciones anonimas


//*********Closuere:: donde se puede usar las variables declaradas en el programa.



const elevarAlcuadrado = function (numero) {
    return numero * numero;
}

//FAT ARROW FUNCTION

const elevarAlCuadrado = (numero) =>{
    return numero * numero;
}
const elevarAlCuadrado2 = (numero) => numero * numero;
const elevarAlCuadrado3 = numero => numero * numero;

const restarDosnumeros = (numUno,numDos) => numUno-numDos;


console.log("Resultado ",restarDosnumeros(10,5));
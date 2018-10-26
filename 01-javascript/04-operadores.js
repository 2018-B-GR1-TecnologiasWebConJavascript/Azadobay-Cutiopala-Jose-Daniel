//Operadores
//Utilizar constante siempre
const arreglo= ['A','b','C'];

const respuesta = arreglo
    .forEach(
        (valorActualdeLaIteracion,indice,arreglo) => {
            console.log('Valor',valorActualdeLaIteracion);
            console.log('Indice',indice);
            console.log('Arreglo',arreglo);

            }
        );

console.log(respuesta);
arreglo.forEach(v => console.log(v)); //



//////////////////////

if(1 === '1'){ //El triple igual es comparar tipos de datos
    console.log('Es verdad');
}else {
    console.log('No es verdad');
}

//////////////////////////////////////////
//Operador map  ---> MUTA EL ARREGLO -- CAMBIAR--- REASIGNAR NUEVO ARREGLO.
const respuestaMap = arreglo
    .map(
        (valorActual, indiceActual, arreglo)=>{
            return valorActual.toUpperCase();
            //return objeto mutado
        }
    );

const respuestaMap2 = arreglo
    .map(
        valorActual => valorActual.toUpperCase()); //map crea otra variable u arreglo.

console.log(arreglo);
console.log(respuestaMap2);


const arregloNumeros = [8,4,10,2,5,7,9,3,6,1];


//filter para filtrar el arreglo.
const respuestaFilter = arregloNumeros
    .filter((valorActual)=> {
        return valorActual > 5
    });

const menoresADos = arregloNumeros
    .filter(n => n > 5)
    .map(n => n + 1)
    .filter(n => n > 7)
    .forEach(n => console.log(n));

//console.log(respuestaFilter);
//console.log(menoresADos);


//Para buscar un indice.......
//*****************************FindIndex
const respuestaFindIndex = arregloNumeros
    .findIndex(v => v === 7);

console.log(arregloNumeros.indexOf(7));
console.log(respuestaFindIndex);

//Diferencia de index of y findIndex
// Es que con findIndex se puede buscar por ID en un objeto

const respuestaFind = arregloNumeros
    .find(v => v === 8);
console.log(respuestaFind);

// Tablas de verdad con Operadores
//Operador some
// Si algunos es verdadero todo es verdadero
const respuestaSome = arregloNumeros
    .some (n => n % 11 === 0);

console.log(respuestaSome);

//every
const respuestaEvery = arregloNumeros
    .every( n => n > 5);

console.log(respuestaEvery);

//Para operaciones matematicas.
//Operador Reduce

const rReduce = arregloNumeros
    .reduce( (valorActualdelaOperacion, valorActualDelArreglo) => {
        return valorActualdelaOperacion + valorActualDelArreglo
    }, 0 //esto es en donde empezar
 )
console.log(rReduce)


const resReduce = arregloNumeros
.reduce((acumulado,valorActual) => acumulado-valorActual, 100);

const mayorA7 = arregloNumeros
    .reduce((a,b) => {
        if(a > 7){
            return a + b;
        }else {
            return b;
        }
    }
    );

console.log(resReduce);
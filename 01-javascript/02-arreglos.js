
/*
arreglo= [
    1,
    "Adrian",
    false,
    null,
    new Date(),
    {
        nombre: "Vicente"
    },
    [1,2,false,true]
];

console.log(arreglo[3]);
var arregloNumeros = [1,2,3];
arregloNumeros.push(4);
console.log(arregloNumeros);
arregloNumeros.pop();
console.log(arregloNumeros);

//Metodo para borrar cualquier indice
arregloNumeros.splice(0,2);
console.log(arregloNumeros);


//Funcion Splice
arregloNumeros.splice(1,0,4,5,6,7,8,9,10)
//Primer parametro: indice desde donde
//Segundo parametro: los items que queremos borrar
//Tercer parametro: los items que queremos agregar
console.log(arregloNumeros);



//para eliminar o buscar un indice
var indiceNumeroSeis = arregloNumeros.indexOf(6); // devuelve el indice de la primera ocurrencia
arregloNumeros.splice(indiceNumeroSeis,1);
console.log(arregloNumeros);


//separar Arreglos
var arregloUno = arregloNumeros.slice(0,3); //siempre trabaja con indices abiertos
console.log(arregloUno);
var arregloDos = arregloNumeros.slice(3,7);
console.log(arregloDos);
//arregloDos.push(7);
//console.log(arregloDos);
//var indiceSiete = arregloDos.indexOf(7);
//console.log(indiceSiete);


//aumentando arreglos
var arregloUnoDos = [1,2];
var arregloSeis = [6];



//**************************************************MUY IMPORTANTE
//Destructuracion de arreglos.
console.log(...arregloUnoDos);
console.log(1,2);

var arregloTotal = [...arregloUnoDos, ...arregloUno, ...arregloSeis, ...arregloDos];
console.log(arregloTotal);

//agregar datos al final

var arregloSiguientesNumeros = [11,12,13,14,15,16,17,18,19,20];
arregloTotal.splice(arregloTotal.length,0,...arregloSiguientesNumeros);
console.log(arregloTotal);

*/

//destructuracion de objetos

var vicente = {
    nombre: "Vicente",
    apellido: "Eguez"
}

var adrian = {
    edad: 20,
    casado: false,
    hijos: null,
    mascota: {
        nombre: "cachetes"
    }
};

var eguez = {
    sueldo: 1.10
}

var vicenteAdrianEguez = {
    ...vicente,
    ...adrian,
    ...eguez
}

console.log(vicenteAdrianEguez);
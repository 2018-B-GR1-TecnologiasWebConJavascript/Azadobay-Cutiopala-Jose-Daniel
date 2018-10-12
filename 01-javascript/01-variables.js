// JAvascript es un un lenguaje tipado
/*
// Int edad = 10; lenguaje no tipado.

var edad = 10;
var edadString = "10";
var sueldo = 1.234;
var casado = false;
var hijos = null;
var dato = undefined; //a mas de ser un valor es un tipo de dato.


console.log(typeof edad);
console.log(typeof edadString);
console.log(typeof sueldo);

console.log("edad", typeof edad);
console.log("edadString ", typeof edadString);
console.log("sueldo", typeof sueldo);
console.log("casado", typeof casado);
console.log("hijos", typeof hijos); //tipo dato object
console.log("dato valor", dato);
console.log("dato tipo", typeof dato);


// Clases y objetos

var fechaDeNacimiento = new Date();
console.log("fechaDeNacimiento", typeof fechaDeNacimiento);

var adrian = {
    "nombre": "Vicente",
    'segundoNombre': 'Adrian',
    apellidoPaterno: `Eguez`,

    // `apellidoMatrerno` : 'Sarzosa' no se puede utilizar tildes invertidas como llave
    //si se puede poner coma al ultimo

};




console.log(adrian.nombre)
console.log(adrian)

//para borrar un campo se usa

delete adrian.nombre
console.log(adrian)

//Para agregar una propiedad

adrian.hija = {
    nombre: "????"
}



console.log(adrian)
console.log(adrian.abuelo.nombre);

*/


//Funciones
if (1) { //Truthy
    console.log("SI")
} else {
    console.log("NO")
}

if (0) { //Falsy
    console.log("SI")
} else {
    console.log("NO")
}
if (-1) { //Truthy
    console.log("SI")
} else {
    console.log("NO")
}

if ("") { //Flasy
    console.log("SI")
} else {
    console.log("NO")
}

if ("a") { //Truthy
    console.log("SI")
} else {
    console.log("NO")
}

if (null) { //Falsy
    console.log("SI")
} else {
    console.log("NO")
}

if (null) { // Falsy
    console.log("Si")
} else {
    console.log("No")
}

if ({}) { // Objeto vacio y objeto falso es Truthy
    console.log("Si")
} else {
    console.log("No")
}

if (new Date()) { // Objeto vacio y objeto falso es Truthy
    console.log("Si")
} else {
    console.log("No")
}

if (undefined) { // Falsy
    console.log("Si")
} else {
    console.log("No")
}
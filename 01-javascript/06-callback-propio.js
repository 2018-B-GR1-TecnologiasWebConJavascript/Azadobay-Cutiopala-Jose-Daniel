// 06- callback-propio.js

/*
const fs = require('fs');
let contenidoFinal = 'Inicial'

function oppendFile(nombreArchivo, contenido, callback){
    // 1) Leer archivo
    // 2.1) Si existe, le anado el contenido al contenido del archivo
    // 2.2) Si no existe, le creo al archivo con el contenido
    // **Devuelvan el contenido completo del archivo**

    fs.readFile(
        nombreArchivo,
        'utf-8',
        (error, contenidoLeidoDelArchivo) => {
            if(error){
                //escribimos el archivo
                fs.writeFile(nombreArchivo,contenido,(err)=>{
                    if(err){
                        //console.log('Error escribiendo');
                        callback(undefined, err)
                    }else {
                        //Devolver contenido
                        //return contenidoFinal;
                        callback(contenido);
                    }
                });
            }else{
                //anadimos el contenido del archivo leido
                // al contenido a escribir en el archivo
                fs.writeFile(nombreArchivo,contenidoLeidoDelArchivo + contenido,(err)=>{
                    if(err){
                        //console.log('Error escribiendo');
                        callback(undefined, err)
                    }else {
                        //Devolver contenido
                        //return contenidoLeidoDelArchivo + contenidoFinal;
                        callback(contenidoLeidoDelArchivo + contenido );
                    }
                });
            }
        }
    )
}


//const respuestaAppenFile = appendFile('06-ejemplo.txt','Hola amigos');
//console.log(respuestaAppenFile);
//appendFile('06-ejemplo.txt','Hola amigos');
//console.log(contenidoFinal);
oppendFile('06-ejemplo2.txt','\nHola amigos',
    ( contenido,err ) => {
    //console.log(contenido);
        if(err){
            console.log(err);
        }else {
            console.log(contenido);
        }
    });


//Callback hell es la reutilizacion de codigo.

*/


// ['A','B','C']
// 0-A.txt 'A'
// 1-B.txt 'B'
// 2-C.txt 'C'


const fs = require('fs');

const respuesta = {
    nombreArchivo: '',
    contenidoArchivo: '',
    error: '',
}

function ejercicio(arregloStrings, callback){
    const respuestas = [];
    arregloStrings
        .forEach(
            (string,indice)=> {
                const nombreArchivo = `${indice}-${string}.txt`;
                const contenido = string;

                fs.writeFile(
                    nombreArchivo,
                    contenido,
                    (err)=> {
                        if(err){

                        }else{
                            const respuesta = {
                                nombreArchivo: nombreArchivo,
                                contenidoArchivo: contenido,
                                error: err,
                            };
                            respuestas.push(respuesta);
                            const estaCompletoElArreglo = respuestas.length === arregloStrings.length;

                            if(estaCompletoElArreglo){
                                callback(respuestas);
                            }
                        }
                    }
                );
            }
        )
}

/*
        // SCOPES
        for (let i = 0; i < arregloStrings.length; i++) {
            fs.writeFile(
                `${i}-${arregloStrings[i]}.txt`,
                arregloStrings[i],
                (err)=>{
                    const respuesta = {
                        nombreArchivo: `${i}-${arregloStrings[i]}.txt`,
                        contenidoArchivo: arregloStrings[i],
                        error: err,
                    };
                    respuestas.push(respuesta);

                    const estaCompletoElArreglo = respuestas.length === arregloStrings.length;

                    if (estaCompletoElArreglo) {
                        callback(respuestas);
                    }

                }
            );
        }
    */





ejercicio(['A','B','C'], (respuestaEjercicio) =>
    {console.log(respuestaEjercicio)}
);

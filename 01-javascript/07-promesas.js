/*

const fs = require('fs');
const nombre = '06-ejemplo.txt';
const nuevaPromesa = (nombreArchivo) => {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                nombreArchivo,
                'utf-8',
                (err, contenidoLeidoDelArchivo) => {
                    if (err) {
                        reject(err);
                        console.log('err')
                    } else {
                        resolve(contenidoLeidoDelArchivo);
                        console.log('si')
                    }

                }
            )
        }
    )
};

const nuevaPromesaEscritura = (nombreArchivo, contenidoArchivo) => {
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                nombreArchivo,
                contenidoArchivo,
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(contenidoArchivo);
                    }

                }
            )
        }
    )
};

nuevaPromesa(nombre)
    .then(
        (contenido) => {
            console.log(contenido);
            return nuevaPromesaEscritura('07-ejemplo2.txt', contenido + 'Adios amigos');
        }
    )
    .then(
        (contenidoArchivoEscrito) => {
            console.log(contenidoArchivoEscrito);
        }
    )
    .catch(
        (error) => {
            console.log('Catch',error);
        }
    );

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
                            const condicion = respuestas.length === arregloStrings.length;

                            if(estaCompletoElArreglo){
                                callback(respuestas);
                            }
                        }
                    }
                );
            }
        )
}



ejercicio(['A','B','C'],
    (respuestaEjercicio)=>{
        console.log(respuestaEjercicio);
    });

//appenFile con promesas.



const appendFile = (nombreArchivo, contenido, callback) => {
    return new Promise(
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
    )
};


appendFile('06-ejemplo.txt','\nHola amigos',(contenido,err))
    .then(
        (contenido) => {
            console.log(contenido);
            return nuevaPromesaEscritura('07-ejemplo2.txt', contenido + 'Adios amigos');
        }
    )
    .catch(
        (error) => {
            console.log('Catch',error);
        }
    );

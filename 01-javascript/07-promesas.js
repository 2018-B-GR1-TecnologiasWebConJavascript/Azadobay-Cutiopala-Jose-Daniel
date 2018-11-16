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


// Ejercicio en clase OpenFile transformar a promesa.

const fs = require('fs');
let contenidoFinal = 'Inicial'



const oppendFile = (nombreArchivo, contenido)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(
            nombreArchivo,
            'utf-8',
            (error, contenidoLeidoDelArchivo) => {
                if(error){
                    //escribimos el archivo
                    fs.writeFile(nombreArchivo,contenido,(err)=>{
                        if(err){
                            //console.log('Error escribiendo');
                            reject(err)
                        }else {
                            //Devolver contenido
                            //return contenidoFinal;
                            resolve(contenido);
                        }
                    });
                }else{
                    //anadimos el contenido del archivo leido
                    // al contenido a escribir en el archivo
                    fs.writeFile(nombreArchivo,contenidoLeidoDelArchivo + contenido,(err)=>{
                        if(err){
                            //console.log('Error escribiendo');
                            reject(err)
                        }else {
                            //Devolver contenido
                            //return contenidoLeidoDelArchivo + contenidoFinal;
                            resolve(contenidoLeidoDelArchivo + contenido );
                        }
                    });
                }
            }
        )
    })
}


oppendFile('06-ejemplo.txt','\nHola amigos')
    .then((contenido)=>{ //then recibe una funcion como parametro
        console.log(contenido);
    })
    .catch((error)=>{
        //console.log('Catch: ',error);
    })


/*
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
    })

    */
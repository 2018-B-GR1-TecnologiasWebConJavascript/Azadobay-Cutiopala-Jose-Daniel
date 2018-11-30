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


const ejercicio = (arregloStrings) => {
    return new Promise((resolve, reject) => {
        const respuestas = [];

        arregloStrings.forEach((string, indice) => {
                const nombreArchivo = `${indice}-${string}.txt`;
                const contenido = string;

                fs.writeFile(
                    nombreArchivo,
                    contenido,
                    (err) => {
                        if (err) {

                        } else {
                            const respuesta = {
                                nombreArchivo: nombreArchivo,
                                contenidoArchivo: contenido,
                                error: err,
                            };
                            respuestas.push(respuesta);
                            const estaCompletoElArreglo = respuestas.length === arregloStrings.length;

                            if (estaCompletoElArreglo) {
                                resolve(respuestas);
                            }
                        }
                    }
                );
            }
        )
    });
};



ejercicio(['AA','BB','CC'])
    .then((resultado)=>{
        console.log(resultado);
    })
    .catch((err)=> {

    })
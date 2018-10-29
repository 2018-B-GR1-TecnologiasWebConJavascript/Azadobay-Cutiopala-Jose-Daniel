const fs = require('fs');
const express = require('express');
//console.log(fs);
//console.log(express);

const nombreArchivo = 'ejemplo.txt';
const contenidoArchivo = new Date();

console.log('Inicio');

fs.readFile(nombreArchivo,'utf-8',
    (error, textoDelArchivoLeido) => {  // CALLBACK

    if (error) {
        try {
            throw new Error(error);
        }catch (e) {
            console.error(e);
        }
    }else {
        //Ojo ·· solo en este bloque aseguro que mi archivo se leyo
        fs.writeFile(nombreArchivo,textoDelArchivoLeido +'\n'+ contenidoArchivo,
            (err) => {
                if(err) throw  err;
                console.log('Archivo Guardado !')
            });
        console.log(textoDelArchivoLeido);
    }
    });
console.log('FIN');
const fs = require('fs');
const rxjs = require('rxjs');
const mergeMap = require('rxjs/operators').mergeMap;
const map = require('rxjs/operators').map;
const distinct = require('rxjs/operators').distinct;
const concat = require('rxjs/operators').concat;
const find = require('rxjs/operators').find;
const arregloRespuestaTypes = [
    {
        tipo: 'grass',
    },
    {
        tipo: 'ground',
    }
];
function main() {
    const basePokemon$ = iniciarBase();
    basePokemon$.pipe(find((valor, indice, observable) => {
        if (valor === 'types') {
            return { data: valor };
        }
    })).subscribe((ok) => {
        console.log('En ok', ok);
    });
}
main();
function iniciarBase() {
    const bddLeida$ = rxjs.from(leerBase());
    return bddLeida$
        .pipe(mergeMap(// Respuesta anterior Observable
    (respuestaBDD) => {
        if (respuestaBDD.bdd) {
            return rxjs.of(respuestaBDD);
        }
        else {
            console.log('error');
        }
    }));
}
function leerBase() {
    return new Promise((resolve) => {
        fs.readFile('data.json', 'utf-8', (error, contenidoArchivo) => {
            if (error) {
                resolve({
                    mensaje: 'No existe la Base de Datos',
                    bdd: null
                });
            }
            else {
                resolve({
                    mensaje: 'Base de datos leida',
                    bdd: JSON.parse(contenidoArchivo)
                });
            }
        });
    });
}
/*
"types": [
    {
        "slot": 2,
        "type": {
            "name": "flying",
            "url": "https://pokeapi.co/api/v2/type/3/"
        }
    },
    */ 

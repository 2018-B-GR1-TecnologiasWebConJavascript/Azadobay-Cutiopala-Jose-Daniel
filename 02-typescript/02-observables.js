// 02-observables.ts
const rxjs = require('rxjs');
const map = require('rxjs/operators').map;
const distinct = require('rxjs/operators').distinct;
const concat = require('rxjs/operators').concat;
const numeros$ = rxjs.of(1, "Adrian", "Adrian", 1, true, true, 1, { nombre: 'Adrian' }, 1, [1, 2, 3], new Date());
//console.log(numeros$);
numeros$
    .pipe(distinct())
    .pipe(map((valorActual) => {
    return {
        data: valorActual
    };
}))
    .subscribe((ok) => {
    console.log('En ok', ok);
});
const promesita = (correcto) => {
    return new Promise((resolve, reject) => {
        if (correcto) {
            resolve(':)');
        }
        else {
            reject(':(');
        }
    });
};
// Para transforma datos normales a observables clases, objetos, arreglos, funciones,bool, strings
// PAra transformar promesas a observables se usa el from.
const promesita$ = rxjs.from(promesita(true));
const promesitaNoOk$ = rxjs.from(promesita(true));
/*

numeros$
    .pipe(
        concat(promesita$), // Resolve
        concat(promesitaNoOk$), // Reject

    )
    .pipe(
        distinct(),
        map(
            (valorActual) => {
                return {
                    data: valorActual
                };
            }
        )
    )
    .subscribe(
        (ok) => {
            console.log('En promesit', ok);
        },
        (error) => {
            console.log('Error en promesita', error);
        },
        () => { // complete
            console.log('Completado');
        }
    );



*/

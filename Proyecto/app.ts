//declare var require;

const inquirer = require('inquirer');
const fs = require('fs');
const rxjs = require('rxjs');
const mergeMap = require('rxjs/operators').mergeMap;
const map = require('rxjs/operators').map;

const preguntaMenu = {
    type: 'list',
    name: 'opcionMenu',
    message: 'Que quieres hacer',
    choices: [
        'Crear',
        'Borrar',
        'Buscar',
        'Editar',
    ]
};

const preguntaComic = [
    {
        type: 'input',
        name: 'id',
        message: 'Ingrese el Id del Comic'
    },
    {
        type: 'input',
        name: 'nombre',
        message: 'Nombre del comic'
    },
    {
        type: 'input',
        name: 'tipo',
        message: 'tipo del comic'
    },
];

const preguntarComicPorNombre = [
    {
        type: 'input',
        name: 'nombre',
        message: 'Escribe el nombre del comic a buscar'
    }
];


const preguntarComicPorID = [
    {
        type: 'input',
        name: 'idComic',
        message: 'Escribe el codigo del comic'
    }
];

const preguntaCampoAEditar = [
    {
        type: 'list',
        name: 'campo',
        message: 'Que campo desea editar ? ',
        choices: [
            'id',
            'nombre',
            'tipo',
        ]
    }
];


const preguntarNuevoDato = [
    {
        type: 'input',
        name: 'nuevo',
        message: 'Ingresa el nuevo dato'
    }
];

// @ts-ignore
async function main() {

    try {


        iniciarBase()
            .pipe(
                preguntarOpcionesMenu(),
                ejecutarOpcion()
            )
            .subscribe(
                (respuesta) => {
                    console.log(JSON.stringify(respuesta));
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    console.log('complete');
                    main();
                }
            );
    } catch (e) {
        console.log('Hubo un error');
    }

}


function iniciarBase() { //

    const bddLeida$ = rxjs.from(leerBase());

    return bddLeida$
        .pipe(
            mergeMap(  // Respuesta anterior Observable
                (respuestaBDD: RespuestaLeerBDD) => {
                    if (respuestaBDD.bdd) {
                        return rxjs
                            .of(respuestaBDD);
                    } else {
                        // crear la base
                        return rxjs
                            .from(crearBDD());
                    }

                }
            ),
        );
}

function leerBase() {
    return new Promise(
        (resolve) => {
            fs.readFile(
                'bdd.json',
                'utf-8',
                (error, contenidoArchivo) => {
                    if (error) {
                        resolve({
                            mensaje: 'No existe la Base de Datos',
                            bdd: null
                        });
                    } else {
                        resolve({
                            mensaje: 'Base de datos leida',
                            bdd: JSON.parse(contenidoArchivo)
                        });
                    }
                }
            );
        }
    );
}


function crearBDD() {
    const contenido = '{"usuarios":[],"comics":[]}';

    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                'bdd.json',
                contenido,
                (error) => {
                    if (error) {
                        reject({
                            mensaje: 'Error creando bdd',
                            error: 500
                        });
                    } else {
                        resolve({
                            mensaje: 'BDD creada',
                            bdd: JSON.parse(contenido)
                        });
                    }
                }
            );
        }
    );
} //Para crear la base


function preguntarOpcionesMenu() {
    return mergeMap(
        (respuesta: RespuestaLeerBDD) => {
            return rxjs
                .from(inquirer.prompt(preguntaMenu))
                .pipe(
                    map(
                        (opcionMenu: OpcionMenu) => {
                            respuesta.opcionMenu = opcionMenu;
                            return respuesta;
                        }
                    )
                );
        }
    );
}

function ejecutarOpcion() {
    return mergeMap(
        (respuesta: RespuestaLeerBDD) => {
            switch (respuesta.opcionMenu.opcionMenu) {
                case 'Crear':
                    return rxjs
                        .from(inquirer.prompt(preguntaComic))
                        .pipe(
                            map(
                                (comic: Comics) => {
                                    respuesta.comic = comic;
                                    return respuesta;
                                }
                            ),
                            insertarComic(),
                            actualizarBDD()
                        );

                case 'Buscar':
                    return rxjs
                        .from(inquirer.prompt(preguntarComicPorNombre))
                        .pipe(
                            mergeMap(
                                (comic: Comics) => {
                                    return rxjs.from(buscarComicPorNombre(comic.nombre));
                                }
                            )
                        );
                case 'Editar':

                    return rxjs
                        .from(inquirer.prompt(preguntaCampoAEditar))
                        .pipe(
                            mergeMap((opc) => {


                                switch (opc.campo) {
                                    case 'id':

                                    case 'nombre':


                                        return rxjs.from(inquirer.prompt(preguntarComicPorID))
                                            .pipe(
                                                map(ID => {
                                                    return ID.idComic;

                                                }),
                                                mergeMap((ID) => {

                                                    //console.log(respuesta);
                                                    return rxjs.from(inquirer.prompt(preguntarNuevoDato))
                                                        .pipe(
                                                            mergeMap((nuevoDato) => {

                                                                    return rxjs.from(editarComic(ID, nuevoDato.nuevo))

                                                                }
                                                            )
                                                        )
                                                })
                                            );


                                    /*
                                    return rxjs.from(inquirer.prompt(preguntarNuevoDato))
                                        .pipe(
                                            map(nuevoDato => {
                                                const comicAux = nuevoDato.nuevo;
                                                return comicAux;
                                            }),
                                            mergeMap((respuesta) => {

                                                console.log(respuesta);
                                                return rxjs.from(editarComic('12', respuesta)
                                                )
                                            })
                                        );*/
                                    case'tipo':

                                    case'salir':


                                }
                                console.log(opc.campo);

                            })
                        );
                case 'Borrar':

                    return rxjs.from(inquirer.prompt(preguntarComicPorID))
                        .pipe(
                            mergeMap(ID => {
                                return rxjs.from(eliminar(ID.idComic))

                            })
                        );
            }
        })
}


/*
return rxjs.from(inquirer.prompt(preguntarNuevoDato))
    .pipe(
        map(nuevoDato => {
            const comicAux = nuevoDato.nuevo;
            return comicAux;
        }),
        mergeMap((respuesta) => {

            console.log(respuesta);
            return rxjs.from(editarComic('12', respuesta)
            )
        })
    );*/

function insertarComic() {
    return map(
        (respuesta: RespuestaLeerBDD) => {
            respuesta.bdd.comics.push(respuesta.comic);
            return respuesta;
        }
    );
}


function eliminar(id) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('bdd.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const bdd = JSON.parse(contenido);

                        const indiceComic = bdd.comics
                            .findIndex(
                                comic => comic.id = id
                            );


                        bdd.comics.splice(indiceComic, 1);


                        fs.writeFile(
                            'bdd.json',
                            JSON.stringify(bdd),
                            (err) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve(
                                        {mensaje: 'Archivo Eliminado'}
                                    );
                                }
                            }
                        );
                    }
                });
        }
    );


}


function editarComic(nombre, nuevoNombre) {

    return new Promise(
        (resolve, reject) => {
            fs.readFile('bdd.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const bdd = JSON.parse(contenido);

                        const indiceComic = bdd.comics
                            .findIndex(
                                comic => comic.id = nombre
                            );

                        bdd.comics[indiceComic].nombre = nuevoNombre;


                        fs.writeFile(
                            'bdd.json',
                            JSON.stringify(bdd),
                            (err) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve(
                                        {mensaje: 'Archivo Editado'}
                                    );
                                }
                            }
                        );
                    }
                });
        }
    );

}

function actualizarBDD() {
    return mergeMap(
        (respuesta: RespuestaLeerBDD) => {
            return rxjs.from(guardarBDD(respuesta.bdd));
        }
    );
}


function guardarBDD(bdd: BaseDeDatos) {
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                'bdd.json',
                JSON.stringify(bdd),
                (err) => {
                    if (err) {
                        reject({
                            mensaje: 'Error guardando la BDD',
                            error: 500
                        });
                    } else {
                        resolve({
                            mensaje: 'BDD guardada',
                            bdd
                        });
                    }
                }
            );
        }
    );
}

function editarUsuario(campo, nuevoCampo) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('bdd.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const bdd = JSON.parse(contenido);
                        /*
                         const indiceComic = bdd.comics
                             .findIndex(
                                 (comic) => {
                                     return comic.nombre = campo;
                                 }
                             );

                         bdd.comics[indiceComic].campo = nuevoCampo;
 */

                        fs.writeFile(
                            'bdd.json',
                            JSON.stringify(bdd),
                            (err) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve({mensaje: 'Usuario Editado'});
                                }
                            }
                        );
                    }
                });
        }
    );
}


function buscarIndiceComicPorID(id) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('bdd.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const bdd = JSON.parse(contenido);
                        const respuestaFind = bdd.comics.findIndex(comic => comic.id === '2');

                        if (respuestaFind >= 0) {
                            resolve(respuestaFind);
                            console.log(respuestaFind);
                        } else {
                            resolve(respuestaFind)
                        }

                    }
                });
        }
    );
}

function buscarComicPorNombre(nombre) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('bdd.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const bdd = JSON.parse(contenido);
                        const respuestaFind = bdd.comics.filter(comic => comic.nombre === nombre);


                        if (respuestaFind != "") {
                            resolve({
                                mensaje: 'Comic Encontrado',
                                Comic: respuestaFind
                            });
                        } else {
                            resolve({
                                mensaje: 'Comic NO Encontrado',
                                Comic: respuestaFind
                            })
                        }

                    }
                });
        }
    );
}


main();


export interface BaseDeDatos {
    usuarios: Usuarios[];
    comics: Comics[];

}

export interface RespuestaLeerBDD {
    mensaje: string;
    bdd?: BaseDeDatos;
    opcionMenu?: OpcionMenu;
    //usuario?: Usuario;
    comic?: Comics;
}

interface Usuarios {
    id: number;
    nombre: string;
}

interface Comics {
    id: number;
    nombre: string;
    tipo: string;

}


interface OpcionMenu {
    opcionMenu: 'Crear' | 'Borrar' | 'Editar' | 'Buscar';
}

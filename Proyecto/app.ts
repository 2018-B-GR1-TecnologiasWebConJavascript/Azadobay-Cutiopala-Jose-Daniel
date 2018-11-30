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
        'Actualizar',
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

const buscarComicPorNombre = [
    {
        type: 'input',
        name: 'nombre',
        message: 'Escribe el nombre del comic a buscar'
    }
];


function main() {

    iniciarBase()
        .pipe(
            preguntarOpcionesMenu(),
            preguntarDatos(),
            ejecutarAccion(),
            actualizarBDD()
        )
        .subscribe(
            (respuesta) => {
                console.log(respuesta);
            },
            (error) => {
                console.log(error);
            },
            () => {
                console.log('complete');
                main();
            }
        );

}



function iniciarBase(){ //

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

function preguntarDatos() {
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
                            )
                        );
                case 'Actualizar':
                    return rxjs
                        .from(inquirer.prompt(buscarComicPorNombre))
                        .pipe(
                            map(
                                (comic: Comics) => {
                                    respuesta.comic = comic
                                }
                            )
                        );




            }
        }
    )
}

function ejecutarAccion() {
    return map(
        (respuesta: RespuestaLeerBDD) => {
            respuesta.bdd.comics.push(respuesta.comic);
            return respuesta;
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

function editarUsuario(nombre, nuevoNombre) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('bdd.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const bdd = JSON.parse(contenido);


                        const indiceUsuario = bdd.usuarios
                            .findIndex(
                                (usuario) => {
                                    return usuario.nombre = nombre;
                                }
                            );

                        bdd.usuarios[indiceUsuario].nombre = nuevoNombre;


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

function buscarUsuarioPorNombre(nombre) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('bdd.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const bdd = JSON.parse(contenido);

                        const respuestaFind = bdd.usuarios.find((usuario) => {
                                    return usuario.nombre === nombre;
                                }
                            );

                        resolve(respuestaFind);
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
    opcionMenu: 'Crear' | 'Borrar' | 'Actualizar' | 'Buscar';
}


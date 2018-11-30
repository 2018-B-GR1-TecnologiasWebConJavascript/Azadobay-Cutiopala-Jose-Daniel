declare var Promise;

const inquirer = require('inquirer');
const fs = require('fs');

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

const preguntaUsuario = [
    {
        type: 'input',
        name: 'id',
        message: 'Cual es tu id'
    },
    {
        type: 'input',
        name: 'nombre',
        message: 'Cual es tu nombre'
    },
];

async function main() {
    console.log('Empezo')
    try {
        await inicializarBase();

        const respuesta = await inquirer.prompt(preguntaMenu);
        switch (respuesta.opcionMenu) {
            case 'Crear':

                const respuestaUsuario = await inquirer.prompt(preguntaUsuario);
                const respuestaAnadirUsuario = await anadirUsuario(respuestaUsuario);
                console.log(respuestaAnadirUsuario.mensaje);
                main();
                break;
        }
    } catch (e) {
        console.log('Hubo un error');
    }
}

function inicializarBase() {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('bdd.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        fs.writeFile('bdd.json',
                            '{"usuarios":[],"mascotas":[]}',
                            (err) => {
                                if (err) {
                                    reject({mensaje: 'Error'});
                                }
                                resolve({mensaje: 'ok'});
                            });
                    } else {
                        resolve({mensaje: 'ok'});
                    }
                });
        }
    );
}

function anadirUsuario(usuario) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('bdd.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const bdd = JSON.parse(contenido);
                        bdd.usuarios.push(usuario);
                        fs.writeFile(
                            'bdd.json',
                            JSON.stringify(bdd),
                            (err) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve({mensaje: 'Usuario Creado'});
                                }
                            }
                        );
                    }
                });
        }
    );
}

main();
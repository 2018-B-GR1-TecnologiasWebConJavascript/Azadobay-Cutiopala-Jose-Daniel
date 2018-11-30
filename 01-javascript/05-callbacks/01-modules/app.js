const version = require('./version.js'); // require es para leer archivos

console.log('version',version);

const numeroProcesadores = require('./numeroProcesadores');
const calculadora = require('./calculadora-simple');

console.log(calculadora.sumar(10,3));
console.log(calculadora.restar(10,5));
console.log(calculadora.multiplicar(10,3));
console.log(calculadora.dividir(10,5));
console.log(calculadora.version);

const versionNode = require('./version-node/version-node.js');
console.log('verionNode',versionNode);
const {crearArchivo} = require('./Multiplicar/multiplicar');

let base = '4a';



let argv = process.argv;

let parametro = argv[2];

console.log(parametro);

/*
crearArchivo(base).
    then(archivo => console.log(`Archivo creado: ${ archivo }`))
    .catch(e => console.log(e));*/
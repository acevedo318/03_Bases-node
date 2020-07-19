const {argv} = require("./config/yargs");
const { crearArchivo,listarTabla } = require("./Multiplicar/multiplicar");
const colors = require('colors/safe');

let comando = argv._[0];

switch (comando) {
  case "listar":
    console.log("Listar");
    listarTabla(argv.base, argv.limite)
        .then()
        .catch(err => console.log(err));
    break;
  case "crear":
    console.log("crear");

    crearArchivo(argv.base, argv.limite)
      .then((archivo) => console.log("Archivo creado: ",colors.blue(archivo)))
      .catch((e) => console.log(e));

    break;

  default:
    console.log("Comando no reconocido");
    break;
}

//console.log('Limite '+argv.limite);

/*
crearArchivo(base).
    then(archivo => console.log(`Archivo creado: ${ archivo }`))
    .catch(e => console.log(e));
    */

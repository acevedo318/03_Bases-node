const opts = {
  base: {
    demand: true,
    alias: "b",
  },
  limite: {
    demand: true,
    alias: "l",
    default: 10,
  },
};

const argv = require("yargs")
  .command("listar", "Imprime en consola la tabla de multiplicar", opts)
  .command(
    "crear",
    "Crea un archivo de texto en una carpeta llamada tablas con la tabla solicitada",
    opts
  )
  .help().argv;

module.exports = {
    argv
};
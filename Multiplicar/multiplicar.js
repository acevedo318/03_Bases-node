// Requireds
const fs = require("fs");
const colors = require("colors");

let crearArchivo = (base,limite = 10) => {
  return new Promise((resolve, reject) => {
    let data = "";

    if(!Number(base)){
        reject('El valor introducido no es un numero');
        return;
    }

    for (let index = 0; index <= limite; index++) {
      data += `${base} * ${index} = ${base * index} \n`;
    }

    

    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
      if (err) 
            reject(err)
        else
            resolve(`tabla-${base}.txt`)
     
    });
  });
};

let listarTabla = async (base, limite = 10) => {

    let data = "";

    console.log("=======================================".green);
    console.log(`Tabla del ${base}`.green);
    console.log("=======================================".green);

    for (let index = 0; index <= limite; index++) {
      data += `${base} * ${index} = ${base * index} \n`;
    }

    console.log(data);
}


module.exports = {
    crearArchivo,
    listarTabla
}
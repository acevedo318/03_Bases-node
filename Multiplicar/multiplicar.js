// Requireds
const fs = require("fs");

let crearArchivo = (base) => {
  return new Promise((resolve, reject) => {
    let data = "";

    if(!Number(base)){
        reject('El valor introducido no es un numero');
        return;
    }

    for (let index = 0; index <= 10; index++) {
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


module.exports = {
    crearArchivo
}
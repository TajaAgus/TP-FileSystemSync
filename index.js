const fs = require('fs');

function leerArchivoComoString(ruta){
    const texto = fs.readFileSync(ruta, 'utf-8')
    return texto
}

function escribirTextoEnArchivo(ruta, texto, flag){
    try
    {
        fs.accessSync(ruta) // Chequea que exista el archivo, si no existe lanza error.

        fs.writeFileSync(ruta, texto)
    }
    catch (error)
    {
        if (flag) {
            fs.writeFileSync(ruta, texto)
        } else {
            throw new Error("El archivo no existe")
        }
    }
}

function transformarStringEnArrayDeNumeros(texto, separador){
    let textoCortado = texto.split(separador)
    let numeros = []

    //V1
    /*
    for (const texto of textoCortado) {
        if (!isNaN(parseInt(texto))) numeros.push(texto)
    }
    */

    //V2
    textoCortado.forEach((texto) => /^[0-9]+$/.test(texto) ? numeros.push(texto) : null)

    return numeros 
}

function transformarArrayDeNumerosAUnSoloString(array, separador){
    //V1
    /*
    let finalString = ""
    for (let item of array) {
        finalString += item.toString() + separador
    }
    */

    //V2
    const resultString = array.join(separador)
    return resultString
}
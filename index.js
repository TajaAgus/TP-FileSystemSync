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
    const numeros = []

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
    return array.join(separador)
}

function combinarDosArrays(arr1, arr2){
    return arr1.concat(arr2.filter((item) => arr1.indexOf(item) < 0)).sort((a,b) => a - b)
}

function combinarNArrays(arr){
    return arr.flat()
}


//leerArchivoComoString
const ruta = './texto.txt'
const contenido = leerArchivoComoString(ruta);
console.log('\n 1- Contenido del archivo:', contenido);

//escribirTextoEnArchivo
const textoAEscribir = 'Hola Node.js!!!';
escribirTextoEnArchivo(ruta, textoAEscribir, true);
console.log('\n 2- Texto escrito en el archivo.');

//transformarStringEnArrayDeNumeros
const textoAConvertir = '1,2,3,4,5';
const separador = ',';
const arrayDeNumeros = transformarStringEnArrayDeNumeros(textoAConvertir, separador);
console.log('\n 3- Array de números:', arrayDeNumeros);

//transformarArrayDeNumerosAUnSoloString
const numeros = [1, 2, 3, 4, 5];
const textoConvertido = transformarArrayDeNumerosAUnSoloString(numeros, separador);
console.log('\n 4- Texto convertido:', textoConvertido);

//combinarDosArrays
const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
const resultadoCombinado = combinarDosArrays(arr1, arr2);
console.log('\n 5- Resultado combinado de dos arrays:', resultadoCombinado);

//combinarNArrays
const arr3 = [5, 6];
const resultadoCombinadoNArrays = combinarNArrays([arr1, arr2, arr3]);
console.log('\n 6- Resultado combinado de varios arrays:', resultadoCombinadoNArrays);
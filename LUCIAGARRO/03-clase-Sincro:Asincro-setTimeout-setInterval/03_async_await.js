//Promesas
const dividirConPromesa = (dividendo, divisor) => {

    return new Promise((resolve, reject) => { //resolve y reject son funciones callback igualmente.
        console.log(`Recibiendo promesa para dividir: ${dividendo} / ${divisor}`);

        if (divisor === 0) {
            reject("No se puede dividir por cero.");//La promesa no se puede cumplir para este caso...
        } else {
            resolve(dividendo / divisor); //OJO le estoy pasando el valor resultado de esta operación, 
            //Tambien podria definir otra funcion y devolver un resultado unico. 
        }
    });
};


// Usamos el Async y Await
const funcionAsincronica = async (a, b) => {
    console.log('Ejecutando div por func Async()');
    try {
        let resultado = await dividirConPromesa(a, b)
        console.log(resultado);
    } catch (error) {
        console.log('No se pudo cumplir la promesa, Error: ' + error);
    }
}


// funcionAsincronica(9, 3)
funcionAsincronica(9, 0)




// Ejemplo Funciones bloqueantes

// function funA() {
//     console.log(1);
//     funB()
//     console.log(2);
// }

// function funB() {
//     console.log(3);
//     funC()
//     console.log(4);
// }

// function funC() {
//     console.log(5);
// }

// funA()
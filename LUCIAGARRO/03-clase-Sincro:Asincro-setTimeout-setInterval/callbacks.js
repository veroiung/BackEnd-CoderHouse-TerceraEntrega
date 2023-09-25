const valoresOriginales = [1,2,3,4,5];

//const funcionCallBack = (valor) => {
//   if (valor % 2 === 0){
//        return valor;
//    } else {
//        return "no es par"
//  }
//}

//const nuevosValores = valoresOriginales.map(funcionCallBack);

//console.log (nuevosValores);

//mi propia funcion map.

const miFuncionMap = (arreglo, callBack) => {
    const nuevoArreglo = [];
    for (let i = 0; i < arreglo.length; i++);{
    const nuevoValor = callBack ( arreglo [i]);
    nuevoValorArreglo.push(nuevoValor);
    }
    return nuevoArreglo;
}

const resultado = miFuncionMap(valoresOriginales, x => x*2)
console.log(resultado)
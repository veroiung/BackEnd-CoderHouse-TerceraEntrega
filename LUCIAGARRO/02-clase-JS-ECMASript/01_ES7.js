//Exponencial: vamos a definir un arreglo de número (array). Tengo que elevar estos números a una potencia segín número de índice.
//const valoresBase = [1,2,3,4,5,6];

//Operador map:

//const nuevosValores = ValoresBase.map((numero,indice)=> numero**indice);
//console.log(nuevosValores);

//const nombres = ["Emiliano", "Juan", "Santiago"];

//if (nombres.includes("Emiliano")){
//    console.log("Tenemos a Emi presente");
//} else {
//   comsole.log("no está presente");
//} 

const array = [1, 2, 3, 4, 5]
const numeros = array.map ((num) => num * 2)

//const numeros2 = array.map ((num) => {
//   return * 2 })
//console.log(numeros);
const valorBase = [1, 2, 3, 4, 5, 6]

let exponenciales = valorBase.map((base, indice) => base ** indice);
console.log(exponenciales);

//Array.include: Corrobora si algún elemento existe en el arreglo:
let nombresArray = ['uno', 'dos', 'tres', 'cuatro', 'cinco']
console.log("Array Includes con arreglos");

if (nombresArray.includes(nombre)) {
    console.log(`${nombre} - si existe dentro del array`);
} else {
    console.log(`${nombre} - no existe dentro del array`);
}
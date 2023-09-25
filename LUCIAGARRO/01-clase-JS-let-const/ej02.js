
let i = 10;
const testScope = funcion () {
let i = 0;
console.log(i);

if (true) {
    const variable = 12
    console.log(variable); 
}

console.log(variable);
return i + 5


}

let test = testScope()
console.log(test);

console.log(i)


// Funciones
const suma = (a, b) =>{
let result;
result = a + b;
return result

} 
console.log(sima(2, 5))





//Backstic

//Template String / Permiten interpolar varialbles
console.log(`El resultado de la suma es ${suma (2, 5)}`)
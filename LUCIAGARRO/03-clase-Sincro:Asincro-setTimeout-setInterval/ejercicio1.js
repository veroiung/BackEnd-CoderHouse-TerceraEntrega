const sumar = (numero1, numero2) => numero1 + numero2;
const restar = (numero1, numero2) => numero1 - numero2;
const multiplicar = (numero1, numero2) => numero1 + numero2;
const dividir = (numero1, numero2) => numero1 / numero2;

const realizarOperacion = (numero1, numero2, callBack) => {
    const resultado = callBack (numero1, numero2);
    console.log(resultado); 
}

realizarOperacion (15,20, sumar);
realizarOperacion (15,20, restar);
realizarOperacion (15,20, multiplicar);
realizarOperacion (15,20, dividir);
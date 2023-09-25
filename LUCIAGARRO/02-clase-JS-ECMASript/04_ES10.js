//string.trim(): remueve los espacio innecesarios en una cadena. Sirve para Validar.
// cadenas enviadas vacías o eliminar espacios iniciales/finales.


const cadena1 =`   Hola`
const cadena2 = cadena1.trim();
console.log(cadena1.length);
console.log(cadena2);
console.log(cadena2.length);


//array.flat(): remueve anidaciones internas en arrays para dejar un arreglo plano.

const arregloAnidado = [1,2,3,4,, [15,16,17], [17,25,40,[15,14,13]]];
console.log(arregloAnidado.flat(4));
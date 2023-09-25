function mostrarLista (array){

    for (const element of array) {
        console.log(element);
    }

    if (array.length === 0){
        console.log('lista vacía');
    }
 
    return `Tamaño de la lista: {$array.length}`

}

ler array = [1, 2, 3, 4, 5]

let resultado1 = mostrarLista([]);
console.log(resultado1);

let resultado2 = mostartLista(array);
console.log(resultado2);




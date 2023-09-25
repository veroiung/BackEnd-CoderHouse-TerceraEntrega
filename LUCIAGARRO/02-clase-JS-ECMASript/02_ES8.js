//Cómo se define un ojbeto?

const objeto1 = {
    impuesto1: 12,
    impuesto2: 42,
    impuesto3: 36,
    
};

//object.keys

const soloPropiedades = Object.keys(objeto1);
console.log(soloPropiedades);

//Object.values

const soloValores = Object.values(objeto1);
console.log(soloValores);

//Object.entries (obtener la key como el value) 

const entradas = Object.entries(objeto1)
console.log(entradas);

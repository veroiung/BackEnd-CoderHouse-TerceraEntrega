//Rest y Spread operator

//onst objeto1 = {
//    propiedad1: 2,
//    propiedad2. 'b',
//   propiedad3: true
//};

//const objeto2 = {
//   propiedad2: 'c',
//   propiedad3: [1,2,3,4]
//};


//quiereo consegir que el obj. resultante combiene con el obj. 1 y 2

//const objetoResultante = {
//    ...objeto1, ...objeto2
//};

//console.log(objetoResultante);


const objetos =  [
	{
		manzanas:3,
		peras:2,
		carne:1,
		jugos:5,
		dulces:2
	},
	{
		manzanas:1,
		sandias:1,
		huevos:6,
		jugos:1,
		panes:4
	}
]

let newArray = [];
let total = 0;

objetos.forEach(objeto => {
    const keys = Object.keys(objeto);
    const values = Object.values (objeto)

    total += values.reduce((valorInicial, valorAcumulado) => valorAcumulado + valorInicial);
    keys.forEach(key => {
        if(!newArray.includes(key)) newArray.push(key);
    })
});

console.log(newArray);
console.log(total);



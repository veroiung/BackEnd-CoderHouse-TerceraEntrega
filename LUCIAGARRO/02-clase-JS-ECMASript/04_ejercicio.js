
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
	keys.forEach(key => {
        if(!newArray.includes(key)) newArray.push(key);
    })

let soloValores = Objetos.values(objeto)


    const values = Object.values (objeto)

    total += values.reduce((valorInicial, valorAcumulado) => valorAcumulado + valorInicial);
    keys.forEach(key => {
        if(!newArray.includes(key)) newArray.push(key);
    })
});

console.log(newArray);
console.log(total);


// Refactor
const [a, b] = objetos
const listA = [...Object.keys(a), ...Object.keys(b)]
const values = [...Object.values(a), ...Object.values(b)].reduce((acc, value) => acc + value)
console.log(listA);
console.log(values);


//uso de trim elimina espacios al inicio y al final
let name = "Gisela   "
namw.trim()

//uso de flat anidar arrays

//variables o metodos privados con #

//nullish "sin valor" valores null, undefined, falseys
let tesr = undefined;
 //...mucha logica, ejemplo base de dato.
let nullish = test ?? "sin valor"
console.log(nullish);


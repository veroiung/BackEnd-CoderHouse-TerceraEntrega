const fs = require('fs');
const path = './file.txt';

if(fs.existsSync(path)){
    fs.promises.readFile(path, 'utf-8')
    .then((info)=>{
        console.log(info)
        return fs.promises.appendFile(path, 'segundo texto')
    })
    .then(()=>{
        console.log('info agragada con éxito');
        return fs.promises.readFile(path, 'utf-8');
    })
    .catch((error)=>{
        console.log(error);
    })
} else {
    fs.promises.writeFile(path, 'Primer texto')
    .then(()=>{
        console.log('archivo creado con éxito');
    })
    .catch((error)=> console.log(error))
}

/* ------------------------------------------------------ */

const products = [
{
    name: 'iphone',
    price: '500000',
    stock: '50'
},
{
    name: 'iphone',
    price: '500000',
    stock: '50',
},
{
    name: 'iphone',
    price: '500000',
    stock: '50'
},
];

const pathJSON = './products.json';

fs.writeFileSync(pathJSON, JSON.stringify(products));
const info = fs.readFileSync(pathJSON, 'utf-8');
const infojs = JSON.parse(info)
infojs.map((prod)=>{console.log(prod)})
console.log(infojs);


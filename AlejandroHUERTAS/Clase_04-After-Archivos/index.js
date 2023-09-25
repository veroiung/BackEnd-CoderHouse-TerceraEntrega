const ProductManager = require("./ProductManager.js");
let productManager = new ProductManager();
console.log(productManager);

let persistirProduct = async () => {
    let product = await productManager.createProduct('Denim', 'Azul', 5900, 'sin imagen', 'codigo002', 15 );


    let products = await productManager.productList();
    console.log(`Productos encontrados en Product Manager: ${products.length}`);
    console.log(products);
};

persistirProduct();
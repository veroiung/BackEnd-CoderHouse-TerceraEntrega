//import fs from 'fs';

const fs = require('fs');
const path = './products.json'

class productsManager {
    constructor(path) {
        this.path = path
        this.products = [];
       
    }

    async addProduct(title, description, price, thumbnail, code, stock) {
        try {
            // Validar que todos los campos sean obligatorios
            if (!title || !description || !price || !thumbnail || !code || !stock) {
                console.log("Todos los campos son obligatorios");
                return;
            }

            // Validar que el campo "code" no esté repetido
            const existingProduct = this.products.find(product => product.code === code);
            if (existingProduct) {
                console.log("El código de producto ya existe");
                return;
            }

            const product = {
                title: title,
                description: description,
                price: price,
                thumbnail: thumbnail,
                code: code,
                stock: stock
            }

            if (this.products.length === 0) {
                product.id = 1
            } else {
                product.id = this.products[this.products.length - 1].id + 1
            }

            //pusheamos el producto
            this.products.push(product)
            await fs.promises.writeFile(this.path, JSON.stringify(this.products, null, '\t'))


        } catch (error) {
            console.log(error);
        }
    }

    async getProducts(){
        try {
            if(fs.existsSync(this.path)){ // verificar que existe el archivo
                const products = await fs.promises.readFile(this.path, 'utf-8');
                const productsJs = JSON.parse(products);
                return productsJs;
            } else {
                return [] // si no existe, muestra un array vacío
            }
        }
        catch (error){
            console.log(error);
        }
    }

    async getProductById(productId){
        try {
            const productsFile = await this.getProducts();
            const idProduct = productsFile.find(product => product.id === productId)
            if (idProduct) {
                console.log(`id ${productId} info: `, idProduct);
                return idProduct
            } else {
                console.log(`Error, ese id ${productId} no existe`)
                return `Error, ese id ${productId} no existe`
            }
        }
        catch (error){
            console.log(error);
        }
    }



}

const myManager = new productsManager(path)

//myManager.addProduct ('rgb3n', '3rn3', 10, '3rtn', '3rn', 20);
//myManager.addProduct ('rgn', '3n3', 10, '3tn', '3n', 19);


console.log (myManager.getProductById());



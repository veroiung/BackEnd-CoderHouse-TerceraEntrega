class Auto {
    constructor(color, marca) {
        this.color = color;
        this.marca = marca;
    }
    //Metodos
    frenar() {
        return `Se frena el auto`;
    }
    acelerar() {
        return `Se acelera el auto ${this.color}`;
    }
}
//Creamos intancias 

const newAuto1 = new Auto('Negro', 'Peugeot');
const newAuto2 = new Auto('Azul', 'Ford');
const newAuto3 = new Auto('Amarillo', 'Tesla');

console.log(newAuto1);
console.log(newAuto1.acelerar());
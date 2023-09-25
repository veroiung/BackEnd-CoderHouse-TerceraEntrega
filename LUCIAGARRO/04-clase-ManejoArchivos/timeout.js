//console.log("tarea 1");

const temporizador = (callback) => {
    setTimeout(()=>{
        callback();
    }, 5000)
};

const operacion = () => console.log("Realizando Operación");

console.log("Inicio de Tareas");
temporizador(operacion);


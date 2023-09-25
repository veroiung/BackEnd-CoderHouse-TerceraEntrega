import UserManager from "./managers/UserManager.js";



const manager = new UserManager('./files/Usuarios.json');

const env = async () => {
    const usuarios = await manager.getUsers();
    console.log(usuarios);

    const user = {
        nombre: 'Lu',
        apellido: 'Garro',
        nombreUsuario: 'Lucia',
        contrasena: '1234'


    };


    await manager.createUser(user);
    const usersResult = await manager.getUsers();
    await manager.validateUser('Lu', '1234')
    console.log(usersResult);
}

env()
const fs = require('fs');

class UserManager {
constructor(path){
    this.path = path
} 

async getUser(){
    try {
        if(fs.existsSync(this.path)){
            const users = await fs.promises.readFile(this.path, 'utf-8');
            const usersjs = JSON.parse(users);
            return usersjs;
        } else {
            return []
        }
    } catch (error) {
        console.log(error);
    }
}
async createUser (user){
    try {
        const usersFile = await this.getUser();
        usersFile.push(user);
        await fs.promises.writerFile(this.path, JSON.stringify(usersFile));
        return user;
        } catch (error){
            console.log(error);
        }
}

}

const manager = new UserManager('./user.json');

const user1 = {
    firstname: 'Gastón',
    lastname: 'Merlo',
    age: 45
}

{
const user2 = {
    firstname: 'Matías',
    lastname: 'García',
    age: 48
}

const user3 ={
    firstname: 'Aleandro',
    lastname: 'Coder',
    age: 42
}

const test = async ()=>{
    const getUsers = await manager.getUsers()
    console.log('primer consulta: ', getUsers);
    await manager.createUser(user1);
    const getUsers2 = await manager.getUsers()
    console.log('2da consulta: ',getUsers2);
}

test()}
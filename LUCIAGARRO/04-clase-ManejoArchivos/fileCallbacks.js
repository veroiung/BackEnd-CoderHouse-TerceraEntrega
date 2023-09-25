const fs = require('fs');

fs.writeFile('./callback.txt', 'estoy trabajando con callback',
    error => {
        if (error) {
            throw new Error(`Error en la creación del archivo: ${error}`)
        }
        fs.readFile('./callback.txt', 'utf-8', (error, contenido) => {
            if (error) {
                throw new Error(`Error en la lectura del archivo: ${error}`)
            }

            console.log(contenido);

            fs.appendFile('/callback.txt', '\nIncorporo mas contenido de callback', error => {
                if (error) {
                    throw new Error(`Error en la lectura del archivo: ${error}`)
                }
            })
        })

        fs.unlinkSync('./callback.txt');
    })
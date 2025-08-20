const { ask } = require('../helpers/input.js');

async function saludar(nombre){
console.log(`hola estimado: ${nombre}, espero que tengas un buen dia`);
}

async function main() {
    const personas = ["pedro", "juan", "maria", "gaby", "osiris"];

    for (let i = 0; i < personas.length; i++) {
        saludar(personas[i]);
    }

    for (let j = personas.length - 1; j >= 0; j--) {
        saludar(personas[j]);
    }

    let limite = Number(await ask ('hasta que numero quieres contar?: '));
    let x = 1
     while(x <= limite){
        console.log(x);
        x++;

    }
}



main();

const {ask} = require('../helpers/input.js');

async function main() {
    const name = await ask("como te llamas?");
    const age = await ask("cuantos anos tienes?");
    const food = await ask("cual es tu comida favorita?");

    console.log("hola "+name+", tienes:"+ age + "anos")
}

main();
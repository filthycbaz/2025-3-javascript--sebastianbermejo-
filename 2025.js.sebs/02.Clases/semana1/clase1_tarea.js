const { ask } = require('../helpers/input.js');

async function main() {
  // TODO: Crear una calculadora simple que realice operaciones básicas:
let no1 = Number(await ask ("echame el primer numero")); // 1.- Pedir el primer número
let no2 = Number(await ask("echame el segundo numero"));  // 2.- Pedir el segundo número
let operador = await ask ("dame el operador (+, -, *, /):"); // 3.- Pedir operador
let resultado
if (operador === "+" ) {
  resultado = no1 + no2;
} else if (operador === "-"){
  resultado = no1 - no2;
} else if (operador === "*"){ 
  resultado = no1 * no2;
} else if (operador === "/"){
  if (no2 === 0) {
    console.log("nel carnal no se puede eso, entre cero no");
    return;
  }
  resultado = no1 / no2
} else {
  console.log("este no existe loco");
  return;
}

  console.log(`mira aqui esta el resultado: ${resultado}`)
}

main();
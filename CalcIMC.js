function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
}

let peso = prompt("Por favor introduce tu peso en kilogramos: ");
let altura = prompt("Por favor introduce tu altura en metros: ");
let imc = calcularIMC(peso, altura);
console.log("Tu Índice de Masa Corporal es de: " + imc + ".");

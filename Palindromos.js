function esPalindromo(frase) {
    let fraseSinEspacios = frase.replace(/ /g, '').toLowerCase();
    let fraseReversa = fraseSinEspacios.split('').reverse().join('');
    return fraseSinEspacios === fraseReversa;
}

let frase = prompt("Por favor introduce una palabra o frase: ");
let resultado = esPalindromo(frase) ? "es un palíndromo" : "no es un palíndromo";
console.log("La frase '" + frase + "' " + resultado + ".");

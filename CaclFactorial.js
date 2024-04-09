function factorial(n) {
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

let n = prompt("Por favor introduce un número: ");
let fact = factorial(n);
console.log("El factorial de " + n + " es " + fact + ".");

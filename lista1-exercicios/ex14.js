/*Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while. */

// Importa o módulo prompt-sync
const prompt = require('prompt-sync')();

// Solicita ao usuário um número inteiro
let numero = parseInt(prompt("Digite um número inteiro para calcular o fatorial: "));
let fatorial = 1;

// Calcula o fatorial usando um loop for
for (let i = 1; i <= numero; i++) {
    fatorial *= i;
}

// Exibe o resultado
console.log("O fatorial de " + numero + " é: " + fatorial);

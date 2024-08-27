/*As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra. */


// Importa o módulo prompt-sync para capturar a entrada do usuário
const prompt = require('prompt-sync')();

// Solicita ao usuário a quantidade de maçãs compradas
let quantidade = parseInt(prompt("Digite o número de maçãs compradas: "));
let precoPorUnidade;
let valorTotal;

// Define o preço por unidade com base na quantidade comprada
if (quantidade < 12) {
    precoPorUnidade = 0.30;
} else {
    precoPorUnidade = 0.25;
}

// Calcula o valor total da compra
valorTotal = quantidade * precoPorUnidade;

// Exibe o valor total
console.log("O valor total da compra é: R$ " + valorTotal.toFixed(2));

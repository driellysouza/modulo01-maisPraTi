/*Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero. 
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C) 
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C) 
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C) 
*/


// Importa o módulo prompt-sync para capturar a entrada do usuário
const prompt = require('prompt-sync')();

// Solicita ao usuário os valores dos lados do triângulo
let A = parseFloat(prompt("Digite o valor do lado A: "));
let B = parseFloat(prompt("Digite o valor do lado B: "));
let C = parseFloat(prompt("Digite o valor do lado C: "));

// Verifica se os lados fornecidos formam um triângulo
if (A < B + C && B < A + C && C < A + B) {
    console.log("Os lados fornecidos formam um triângulo.");

    // Verifica o tipo de triângulo
    if (A === B && B === C) {
        console.log("O triângulo é Equilátero.");
    } else if (A === B || A === C || B === C) {
        console.log("O triângulo é Isósceles.");
    } else {
        console.log("O triângulo é Escaleno.");
    }
} else {
    console.log("Os lados fornecidos não formam um triângulo.");
}

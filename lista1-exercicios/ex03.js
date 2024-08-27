/* Implemente um programa que recebe uma nota de 0 a 10 e classifica 
como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if. */



const  prompt = require('prompt-sync')();

let nota = Number(prompt('Informe uma nota: '))

if(nota <= 4) {
    console.log('Reprovado')
}else if(nota <= 6) {
    console.log('Recuperação')
}else {
    console.log('Aprovado')
}
/*. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for. */

const prompt = require('prompt-sync')()

let num = Number(prompt('Digite um número: '))
console.log(`TABUADA DO ${num}:`)
for(let i=0; i<=10; i++) {
    console.log(`${num} X  ${i} = `+ i*num )
}
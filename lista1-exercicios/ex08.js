/* Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente. */

const prompt = require('prompt-sync')()

let valor_1 = Number(prompt('Digite o primeiro valor: '))
let valor_2 = Number(prompt('Digite o segundo valor: '))

if(valor_1 > valor_2) {
    console.log(valor_1,'\n' ,valor_2)
}else{
    console.log(valor_2,'\n',valor_1)
}


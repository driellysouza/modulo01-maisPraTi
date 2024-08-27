

/*Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) 
com base no valor fornecido, utilizando uma estrutura de controle if-else. */

const prompt = require('prompt-sync')()

let idade = Number(prompt('Digite sua idade: '))

if(idade <= 12) {
    console.log('Classificação: criança')
}else if(idade<=17) {
    console.log('Classificação: adolescente')
}else if(idade <= 64) {
    console.log('Classificação: adulto')
}else {
    console.log('Classificação: idoso')

}
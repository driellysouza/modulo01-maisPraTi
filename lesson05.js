import entradaDados from 'readline-sync';

let x = entradaDados.question('Digite um valor: ')
let y = entradaDados.question('Digite o segundo valor: ')

let soma = Number(x) + Number(y)
console.log(soma)
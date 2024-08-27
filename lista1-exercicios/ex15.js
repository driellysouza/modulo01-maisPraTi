/*Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.*/


let n1 = 0, n2 = 1, proximoNumero;

console.log("Os primeiros 10 números da sequência de Fibonacci são:");

for (let i = 1; i <= 10; i++) {
    console.log(n1);
    proximoNumero = n1 + n2;
    n1 = n2;
    n2 = proximoNumero;
}

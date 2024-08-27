/*Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada. */

const prompt = require('prompt-sync')()

console.log('\n 1-Python\n 2-Java\n 3-JavaScript\n 0- sair')


let opcao = Number(prompt('Digite a opção: '))
    
    switch(opcao){
        case 1: console.log('Seus principais frameworks são: #Django, #Flask, #CherryPy ')
            break;
        case 2: console.log('Seus principais frameworks são: #Spring,#Play, #Struts  ')
            break;
        case 3: console.log('Seus principais frameworks são: #React, #Angular, #Node.js ')
            break;
        default:
            console.log('Fim.');
            
    }
   
    

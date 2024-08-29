/*let teste = function(){
    console.log('Olá, mundo!')
}*/

function showFunction(sucessCallback, errorCallback) {
    if(true){
        sucessCallback("Requisição bem sucedida")
    } else {
        errorCallback("Erro na requisição")
    }

}

let sucessCallback = function(message) {
    console.log(message)
}

let errorCallback = function(message) {
    console.error(message)
}

showFunction(sucessCallback, errorCallback)
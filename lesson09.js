// 1.Soma dos Elementos de um Array

let sum = 0
let arr =[1, 5, 2, 14, 13, 8]

for(let i = 0; i < arr.length; i++) {
    sum += arr[i]
}
console.log(sum)

// 2. Encontre o Maior número em um Array

let max = arr[0]

for(let j=0; j < arr.length; j++){
    if(arr[j] > max) {
        max = arr[j]
    }
}
console.log(max)

// 3. Reverter um Array;

let reversed = []

for(let k = arr.length -1; k >= 0; k--) {
    reversed.push(arr[k])
}
console.log(reversed)

// 4. Criem um novo array contendo apenas os números pares
let pares = []
for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0){
        pares.push(arr[i])
    }
}
console.log(pares)

// 5. Contar ocorrências de um valor

let vet = [10, 10, 7, 5, 10]
let value=10
let count = 0

for(let l=0; l < vet.length; l++){
    if(vet[l] === value){
        count++
    }
}
console.log(`O valor ${value} ocorre ${count} vezes no vetor.`)


//Arrays multidimensionais

/*let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.table(matriz)
console.log(matriz[1][1])

for(let i = 0; i < matriz.length; i++) {
    for(let j = 0; j < matriz[i].length; j++){
        console.log(`Elemento na posição [${i}][${j}]: ${matriz[i][j]}`)
    }
}*/

let arr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let arr2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
]

let resultado = []
if(arr1.length !== arr2.length || arr1.length !== arr2[0].length){
    throw new Error('Os arrays devem ter o mesmo tamanho.')
}

for(let i=0; i< arr1.length; i++) {
    let somaLinha = []
    for(let j=0; j< arr1[i].length; j++){
        somaLinha.push(arr1[i][j] + arr2[i][j])
    }
    resultado.push(somaLinha)
}
console.table(resultado)
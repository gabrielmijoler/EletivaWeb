    // Vetor
let frutas = ['laranja', 'banana', 'maçã']


let [fruta1, fruta2, fruta3] = frutas

console.log({fruta1, fruta2, fruta3})


// Desestruturando o vetor em variáveis avulsas
// let [x, y, z] = frutas

// console.log('x:', x)
// console.log('y:', y)
// console.log('z:', z)

// // Desestruturação parcial
// let [a, b] = frutas
// console.log('a:', a)
// console.log('b:', b)

// let [i, , j] = frutas
// console.log('i:', i)
// console.log('j:', j)


// DESESTRUTURACAO DE OBJETO
let pessoa = {
    nome:'gabriel mijoler',
    sexo: 'M',
    dataNasc: '03-12-1997',
    email: 'gabrielmijoler@hotmail.com'
}

let {sexo, nome, email} = pessoa
console.log(pessoa)
console.log({nome:'jorge', sexo:'F', email})
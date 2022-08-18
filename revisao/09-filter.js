const numeros = [10,19,3,-4,13,-11,15,0,-1]
let frutas = ['laranja', 'banana', 'maçã','uva', 'jabuticaba', 'maracujá']


let primeiroNegativo = numeros.filter(n => n < 0)
let primeiroDiv5 = numeros.filter(n => n % 5 === 0)
let comecacomM = frutas.filter(n => n.charAt(0) === 'l') // charAt a posição da palavra
let comecacomE = frutas.filter(n => n.charAt(0) === 'e') // charAt a posição da palavra


console.log({primeiroNegativo, primeiroDiv5, comecacomM, comecacomE})

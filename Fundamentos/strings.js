const escola = "Cod3r"

console.log(escola.charAt(4)) //imprimi a letra a qual o numero corresponde a posicao
console.log(escola.charAt(5)) //quando a letra nao existir retorna vazio
console.log(escola.charCodeAt(3)) //mostra o valor do caracter na tabela Code
console.log(escola.indexOf('3')) //procura um item na palavra

console.log(escola.substring(1)) //print td exceto o primeiro caracter
console.log(escola.substring(0, 3)) //print os tres primeiros caracteres da palavra

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")

console.log(escola.replace(3, 'e')) //substitui o 3 por e

console.log('Ana,Maria,Pedro'.split(',')) //varias strings transformadas em um Array

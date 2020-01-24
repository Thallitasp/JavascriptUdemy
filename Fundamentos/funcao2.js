//Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)


//Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(5, 4))

//retorno implicito
const subtrabao = (a, b) => a - b

console.log(subtrabao(5, 2))


//retorno implicito com 1 parametro
const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')

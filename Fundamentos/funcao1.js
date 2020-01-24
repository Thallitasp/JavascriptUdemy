//funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7, 8) //ignora depois dos 2 primeiros
imprimirSoma()


//funcao com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(3, 4))
console.log(soma(2))


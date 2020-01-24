function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] //caso o min for > q o max, inverte as posicoes
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([0, 10]))
console.log(rand([]))

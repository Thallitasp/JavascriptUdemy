let valor //nao inicializada
console.log(valor)
console.log(valor2)

valor = null //ausencia de valor
console.log(valor)
//console.log(valor.toString()) - vai dar erro!

const produto = {}
console.log(produto.preco)

console.log(produto)
produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
//delete produto.preco - forma correta de se retirar o preco do produto
console.log(produto)

produto.preco - null //sem preco
console.log(!!produto.preco)
console.log(produto)

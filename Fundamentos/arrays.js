const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores[4])
console.log(valores.length)

valores.push({ id: 3 }, false, null, 'teste') //adicionando itens ao vetor
console.log(valores)


console.log(valores.pop()) //retornar e retira o ultimo valor do array
delete valores[0] //remove o que está na posicao 0 do vetor

console.log(valores)
console.log(typeof valores)

const saudacao = 'Opa'

function exec() {
    const saudacao = 'Falaa'
    return saudacao;
}

//Objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Thallita',
    idade: 23,
    peso: 69,
    endereco: {
        logradouro: 'Rua Jornalista Geraldo Rocha',
        numero: 39
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)

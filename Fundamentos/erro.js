function tratarErroELancar(erro) {
    //throw new Error('deu ruim!')
    //throw 10
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!!')
    }
    catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto' } //vai dar erro
//const obj = { name: 'Roberto' } - forma correta
imprimirNomeGritado(obj)

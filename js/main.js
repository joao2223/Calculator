const numeros = document.querySelectorAll('[data-numero]')
const operacoes = document.querySelectorAll('[data-operacao]')
const mostra = document.querySelector('[data-input]')
const calcular = document.querySelector('[data-calcula]')
const limpar = document.querySelector('[data-limpaTudo]')
const limpaUm = document.querySelector('[data-limpaUm]')

var num1 = ''
var num2 = ''
var op

function escreveNumero(num) {
    if (mostra.value == '+' || mostra.value == '-' || mostra.value == '*' || mostra.value == '/') {
        mostra.value = parseInt(num)
        num2 = mostra.value
        return
    }
    if (num2) {
        mostra.value = mostra.value + parseInt(num)
        num2 = mostra.value
        return
    }
    mostra.value = mostra.value + parseInt(num)
    num1 = mostra.value
    console.log(num1)
}

function escreveOperacao(operacao) {
    if (num1 != '') {
        mostra.value = operacao
        op = mostra.value
    }

}

function limpaTela() {
    num1 = ''
    num2 = ''
    op = ''
    mostra.value = ''
}

function limpaUmNumero () {
    mostra.value = mostra.value.slice(0, -1);
    if(num2 == '') {
        num1 = num1.slice(0, -1)
    }else {
        num2 = num2.slice(0,-1)
    }
}

function calculaResultado() {
    if (op == "+") {
        mostra.value = parseInt(num1) + parseInt(num2)
    }

    if (op == '*') {
        mostra.value = parseInt(num1) * parseInt(num2)
    }

    if (op == '/') {
        mostra.value = parseInt(num1) / parseInt(num2)
    }

    if (op == '-') {
        mostra.value = parseInt(num1) - parseInt(num2)
    }

    num1 = mostra.value
    num2 = ''
    op = ''
}

numeros.forEach(numero => {
    numero.onclick = function () {
        escreveNumero(numero.value)
    }
})

operacoes.forEach(operacao => {
    operacao.onclick = function () {
        escreveOperacao(operacao.value)
    }
})

calcular.onclick = function () {
    calculaResultado()
}

limpar.onclick = function () {
    limpaTela()
}

limpaUm.onclick = function () {
    limpaUmNumero()
}

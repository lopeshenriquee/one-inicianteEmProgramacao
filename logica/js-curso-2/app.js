// let titulo = document.querySelector('h1')
// titulo.innerHTML = 'Jogo do Número Secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let nSecreto = gerarNumeroAleatorio()

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTexto('h1', 'Jogo do Número Secreto');
exibirTexto('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == nSecreto) {
        exibirTexto('h1', 'Acertou!')
        exibirTexto('p', 'Você descobriu o número secreto!')
    } else {
        if (chute > nSecreto){
            exibirTexto('p', 'O número secreto é menor...')
        } else {
            exibirTexto('p', 'O número secreto é maior...')
        }
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

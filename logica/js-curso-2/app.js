// let titulo = document.querySelector('h1')
// titulo.innerHTML = 'Jogo do Número Secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

function exibirTexto(){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTexto('h1', 'Jogo do Número Secreto');
exibirTexto('p', 'Escolha um número entre 1 e 10');

function verificarChute(){
    console.log('Botao foi clicado!');
}

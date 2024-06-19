alert("Boas vindas ao jogo!");
//let é para declarar variável
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativa = 1;

while (chute != numeroSecreto) {

    chute = prompt("Escolha um número entre 1 e 10");
    if (chute == numeroSecreto) {
        break;
    } else {
        //alert('Você errou, o número era: ' + numeroSecreto + ' e você digitou: ' + chute);
        if (chute > numeroSecreto) {
            alert(`O número Secreto é menor que ${chute}`);
        } else {
            alert(`O número Secreto é maior que ${chute}`);
        }
        tentativa++;
    }
}
let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí, você descobriu o número secreto ${numeroSecreto} com ${tentativa} ${palavraTentativa}!`);

/*
if(tentativa > 1){
    alert(`Isso aí, você acertou  com ${tentativa} tentativas! O número era: ${numeroSecreto}`);
} else {
    alert(`Isso aí, você acertou! com ${tentativa} tentativa! O número era: ${numeroSecreto}`);
}
*/
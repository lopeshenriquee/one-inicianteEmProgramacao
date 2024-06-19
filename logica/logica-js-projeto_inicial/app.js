alert("Boas vindas ao jogo!");
//let é para declarar variável
let numeroSecreto = 5;
console.log(numeroSecreto)
let chute = prompt("Escolha um n entre 1 e 10")

if (chute == numeroSecreto ){
    alert(`Isso aí, você acertou! O número era: ${numeroSecreto}`);
}
else {
    alert('Você errou, o número era: ' + numeroSecreto + ' e você digitou: ' + chute);
}
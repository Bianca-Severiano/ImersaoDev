/* Jogo - Usuário irá chutar números até que acerte um pré determinado
 1. A cada chute, deverá ser dito se número é maior ou menor que o valor pré determinado */
 var NumSecreto = 581;

 // Solicitar ao usuário que digite algo
 var NumDigitado = prompt('Digite seu palpite:');

 //Estrutura de decisão que compara valor digitado ao secreto e com base nisso dar um resultado
 if (NumSecreto == NumDigitado) {
    alert('Parabens! Você acertou!!');
 } else {
    if (NumSecreto > NumDigitado) {
        alert ('Número menor que o esperado');
    } else {
        alert ('Número maior que o esperado');
    };
 };
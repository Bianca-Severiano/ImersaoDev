/* Jogo - Usuário irá chutar números até que acerte um pré determinado pelo método Sort()
 1. A cada chute, deverá ser dito se número é maior ou menor que o valor pré determinado */

 var NumSecreto = parseInt(Math.random() * 1001);

/*parse = analise 
int = inteiro
Math.random = Escolhe número aleatório entre 0 e 0,9999 */

 while (NumSecreto != NumDigitado) { // Enquanto usuário não acertar palpite
    
    // Solicitar ao usuário que digite algo
    var NumDigitado = prompt('Digite seu palpite:');
    //Estrutura de decisão que compara valor digitado ao secreto e com base nisso dar um resultado
    if (NumSecreto == NumDigitado) { //Valor digitado é o correto
        alert('Parabéns! Você acertou!!');
    } else {  // Valor digitado é incorreto
        if (NumSecreto > NumDigitado) {  // Se número < secreto
            alert ('Número menor que o esperado');
        } else {  // Se número > secreto
            alert ('Número maior que o esperado');
        };
    };
 };
 
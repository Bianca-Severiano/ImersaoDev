/*Primeiro comando - Apresentar mensagem na tela */
//alert('Vamos iniciar nossa imersão agora!')

//Projeto da Aula 1 - Conversor de moedas

/*1- Criar uma variável, nomeá-la e atribuir um valor
        Uma para o valor em dólar e a outra para a cotação
 2 - Armazenar o resultado da razão entre as duas variáveis em uma terceira chamada 
 ValorEm Real - Apresentar o resultado*/

//var ValorEmDolar = 30;
// var CotacaoDolar = 5.32;
// var ValorEmReal = ValorEmDolar * CotacaoDolar;

/*Arredondamento de valores (Duas casas decimais) - Mozzila Javascript

 - Função Math.round() - Arredonda valor para inteiro mais próximo
 - toFixedd() - Formata um núdero utilizando notação de ponto fixo

    Atribuir resultado a mesma variável já criada anteriormente*/
// alert ('R$'+ ValorEmReal);
function texto(Moeda) {
    elementoSub.innerHTML = elementoSub.innerHTML + '<p>Convertendo ' + Moeda +' para Real'
}

function apagatexto () {
    elementoSub.innerHTML = ''
}

var Moeda = ''
var elementoSub = document.getElementById('subtitulo')

function converteWon () {
   apagatexto()
   var Moeda = document.getElementById('moedaWon').value
   texto(Moeda)
}

function converteDolar() {
    apagatexto()
    var Moeda = document.getElementById('moedaDolar').value
    texto(Moeda)
}

function converteEuro() {
    apagatexto()
    var Moeda = document.getElementById('moedaEuro').value
    texto(Moeda)
}





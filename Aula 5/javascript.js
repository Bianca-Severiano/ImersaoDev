/*Criando tabela de classificação de pontos de um jogo*/

//Para armazenar as informações e dados de cada jogador criaremos um objeto em javascript
var paulo = { //objeto paulo
    nome: 'Paulo',
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
}

// alert (paulo.vitoria) - Como acessar a propriedade de um objeto específico

var rafa = { //objeto paulo
    nome: 'Rafa',
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
}

var guilherme = { //objeto paulo
    nome: 'Guilherme',
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
}

var bianca = { //objeto paulo
    nome: 'Bianca',
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
}

/*adicionar jogadores na tabela
1 - Selecionar tabela pelo ID*/



var elementoTabela = document.getElementById('tabelaJogadores')
exibirNaTela()

function exibirNaTela() {
    elementoTabela.innerHTML = ` 
        <tr>
        <td>${paulo.nome}</td>
        <td>${paulo.vitoria}</td>
        <td>${paulo.empate}</td>
        <td>${paulo.derrota}</td>
        <td>${paulo.pontos}</td>
        <td><button onClick="adicionarVitoria(paulo)">Vitória</button></td>
        <td><button onClick="adicionarEmpate(paulo)">Empate</button></td>
        <td><button onClick="adicionarDerrota(paulo)">Derrota</button></td>
        </tr>
        `
}

function adicionarVitoria(jogador) {
    // Reconhecer qual jogador receberá a vitória
    //console.log(jogador) - substitui o alert para no momento do teste não interromper execução
    jogador.vitoria++
    jogador.pontos = jogador.pontos + 3
    exibirNaTela()
}

function adicionarEmpate(jogador) {
    jogador.empate++
    jogador.pontos = jogador.pontos + 1
    exibirNaTela()
}

function adicionarDerrota(jogador) {
    jogador.derrota++
    exibirNaTela()
}
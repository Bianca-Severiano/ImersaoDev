/*Criando nossa primeira função. Todas elas devem conter um nome próprio*/

function adicionarFilme() {
    // TESTE - alert('Botão funcionando');
    var filmeFav = document.getElementById('filme').value // Pegar conteúdo pelo id da tag
    // TESTE - alert(filmeFav): Verficar se conteúdo do input está sendo copiado

    //document.write('<img src=' + filmeFav + '>') - Inserindo assim perde-se a confguração pois não determinamos o lugar do HTML onde imagem será "impressa"
    
    var elementoListaFilmes = document.getElementById('listaFilmes') // pegar referência para imprimir imagens usando o css do elemento

    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + '<img src=' + filmeFav + '>' // Adicionando dentro da refernência cada tag img, de modo a concatenar todas unidas e apresentando na mesma div que vai sendo sobreposta a cada adição de URL

    //Limpando o INPUT para que o usuário não precise fazê-lo a cada adição de URL
    document.getElementById('filme').value = ''
}
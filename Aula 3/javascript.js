/*Nesta aula iremos criar um catálogo de filmes utilizando javascript.

1 - Selecionar imagens pela internet e salvar seus links em variáveis*/

var filme1 = 'https://br.web.img2.acsta.net/medias/nmedia/18/87/77/49/19961415.jpg';
var filme2 = 'https://br.web.img3.acsta.net/medias/nmedia/18/97/52/82/20534159.jpg'
var filme3 = 'http://image.tmdb.org/t/p/original/gd12nM0VnrgbaUmZDjte4oBedGZ.jpg'

/*Criando elementos no HTML utilizando javascript com document.write() */
// src = source
document.write('<img src=' + filme1 + '>')
document.write('<img src=' + filme2 + '>')
document.write('<img src=' + filme3 + '>')

/*Utilizando listas para salvar várias informações em uma única variável, utilizando laço de repitição para apresentar resultados */

var listaFilmes = []
listaFilmes[0] = 'https://kbimages1-a.akamaihd.net/57ab93cd-05a0-4438-bd3f-f07800a70b60/1200/1200/False/camp-rock-the-junior-novel.jpg'
listaFilmes[1] = 'https://www.rbsdirect.com.br/imagesrc/35798348.jpg?version=1575255600'
listaFilmes[2] = 'http://cheirodelivro.com/wp-content/uploads/2017/09/mae-poster.jpg'

for ( var i = 0; i < listaFilmes.length; i++) {
    document.write('<img src=' + listaFilmes[i] + '>')  
} 
// no laço utilizamos lista.length para que o próprio js reconheça o tamanho da lista

/* É possível declarar a lista já com todos os componentes, sem precisar listar um a um por posição*/

var listaFilmes2 = ['https://m.media-amazon.com/images/I/91g9Dvtf+jL.jpg', 
'https://br.web.img3.acsta.net/pictures/210/163/21016356_20130627200847944.jpg', 
'https://play-lh.googleusercontent.com/Y8jmhSXKhy-FeQgfJLAPxNQJAbNxxbxFvq8g0DOz4pCBfPpB2vBiSFFvaFk4dbmDrELk',
'https://upload.wikimedia.org/wikipedia/pt/thumb/c/c1/Twilight_Poster.jpg/230px-Twilight_Poster.jpg', 
'https://lumiere-a.akamaihd.net/v1/images/690x0w_br_9e5801a5.jpeg?region=0%2C0%2C690%2C1035',
'https://br.web.img2.acsta.net/medias/nmedia/18/87/29/90/19874059.jpg', 
'https://www.maceioparqueshopping.com.br/sites/pqm/files/cinema/tudo-em-todo-o-lugar-ao-mesmo-tempo_1.jpg',
'https://upload.wikimedia.org/wikipedia/pt/3/37/Spider-Man_3.jpg']

for ( var i =  0; i < listaFilmes2.length; i++) {    
    document.write('<img src=' + listaFilmes2[i] + '>')
}
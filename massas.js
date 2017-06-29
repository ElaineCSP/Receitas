
var divReceitas = document.querySelectorAll('.receita');

var divReceitaNhoque = document.querySelector('.receita-nhoque');
var divReceitalasanha = document.querySelector('.receita-lasanha'); 
var divReceitaCoxinha = document.querySelector('.receita-coxinha'); 

var botaoNhoque = document.querySelector('#nhoque');
var botaolasanha = document.querySelector('#lasanha');
var botaoCoxinha = document.querySelector('#coxinha');

apagarTodasReceitas();
divReceitaNhoque.style.display = 'block'; 

botaoNhoque.addEventListener('click', function() {
    apagarTodasReceitas();
    divReceitaNhoque.style.display = 'block'; 
});
botaolasanha.addEventListener('click', function() {
    apagarTodasReceitas();
    divReceitalasanha.style.display = 'block';
});
botaoCoxinha.addEventListener('click', function() {
    apagarTodasReceitas();
    divReceitaCoxinha.style.display = 'block';
});

function apagarTodasReceitas() {
    for (i = 0; i < divReceitas.length; i++) {
        divReceitas[i].style.display = 'none';
    }
}

var divReceitas = document.querySelectorAll('.receita');

var divReceitaBemCasado = document.querySelector('.receita-bemcasado'); 
var divReceitaPudim = document.querySelector('.receita-pudim'); 
var divReceitaTorta = document.querySelector('.receita-torta');

var botaoBemCasado = document.querySelector('#bem-casado');
var botaoPudim = document.querySelector('#pudim');
var botaoTorta = document.querySelector('#torta');

apagarTodasReceitas();
divReceitaPudim.style.display = 'block';


botaoBemCasado.addEventListener('click', function() {
    apagarTodasReceitas();
    divReceitaBemCasado.style.display = 'block'; 
});
botaoPudim.addEventListener('click', function() {
    apagarTodasReceitas();
    divReceitaPudim.style.display = 'block';
});
botaoTorta.addEventListener('click', function() {
    apagarTodasReceitas();
    divReceitaTorta.style.display = 'block';
});

function apagarTodasReceitas() {
    for (i = 0; i < divReceitas.length; i++) {
        divReceitas[i].style.display = 'none';
    }
}


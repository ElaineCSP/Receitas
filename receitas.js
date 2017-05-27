
var divReceitas = document.querySelectorAll('.receita');

var divReceitaBemCasado = document.querySelector('.receita-bemcasado'); 
var divReceitaPudim = document.querySelector('.receita-pudim'); 
var divReceitaTorta = document.querySelector('.receita-torta');
var divReceitaCaldo = document.querySelector('.receita-caldo');

var botaoBemCasado = document.querySelector('#bem-casado');
var botaoPudim = document.querySelector('#pudim');
var botaoTorta = document.querySelector('#torta');
var botaoCaldo = document.querySelector('#caldo');

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
botaoCaldo.addEventListener('click', function() {
    apagarTodasReceitas();
    divReceitaCaldo.style.display = 'block';
})

function apagarTodasReceitas() {
    for (i = 0; i < divReceitas.length; i++) {
        divReceitas[i].style.display = 'none';
    }
}


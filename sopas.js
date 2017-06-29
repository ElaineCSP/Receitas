var divReceitas = document.querySelectorAll('.receita');

var divReceitaCaldo = document.querySelector('.receita-caldo');
var divReceitaSopaErvilha = document.querySelector('.receita-ervilha'); 
var divReceitaCremeAbobora = document.querySelector('.receita-abobora'); 

var botaoCaldo = document.querySelector('#caldoVerde');
var botaoSopaErvilha = document.querySelector('#sopaErvilha');
var botaoCremeAbobora = document.querySelector('#cremeAbobora');

apagarTodasReceitas();
divReceitaCaldo.style.display = 'block'; 

botaoCaldo.addEventListener('click', function() {
    apagarTodasReceitas();
    divReceitaCaldo.style.display = 'block'; 
});
botaoSopaErvilha.addEventListener('click', function() {
    apagarTodasReceitas();
    divReceitaSopaErvilha.style.display = 'block';
});
botaoCremeAbobora.addEventListener('click', function() {
    apagarTodasReceitas();
    divReceitaCremeAbobora.style.display = 'block';
});

function apagarTodasReceitas() {
    for (i = 0; i < divReceitas.length; i++) {
        divReceitas[i].style.display = 'none';
    }
}
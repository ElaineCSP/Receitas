var divReceitas = document.querySelectorAll('.receita');

var divReceitaTortaFrango = document.querySelector('.receita-torta-frango');
var divReceitaQuichePoro = document.querySelector('.receita-quichePoro'); 
var divReceitaQuicheCogumelos = document.querySelector('.receita-QuicheCogumelos'); 

var botaoTortaFrango = document.querySelector('#tortaFrango');
var botaoQuichePoro = document.querySelector('#quichePoro');
var botaoQuicheCogumelos = document.querySelector('#quicheCogumelos');

apagarTodasReceitas();
divReceitaTortaFrango.style.display = 'block'; 

botaoTortaFrango.addEventListener('click', function() {
    apagarTodasReceitas();
    divReceitaTortaFrango.style.display = 'block'; 
});
botaoQuichePoro.addEventListener('click', function() {
    apagarTodasReceitas();
    divReceitaQuichePoro.style.display = 'block';
});
botaoQuicheCogumelos.addEventListener('click', function() {
    apagarTodasReceitas();
    divReceitaQuicheCogumelos.style.display = 'block';
});

function apagarTodasReceitas() {
    for (i = 0; i < divReceitas.length; i++) {
        divReceitas[i].style.display = 'none';
    }
}
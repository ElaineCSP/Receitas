
var divReceitaBemCasado = document.querySelector('.receita-bemcasado'); 
//usei '.' pq receita-bemcasado é uma classe

var divReceitaPudim = document.querySelector('.receita-pudim'); 
//diferente da receita de bem casado, no pudim vc nao colocou uma div para envolve-lo, faça isso para
// o queryselector funcionar!

divReceitaBemCasado.style.display = 'none';

var botaoBemCasado = document.querySelector('#bem-casado');
//usei '.' pq bem-casado é um id

// é assim que se coloca um evento de click
botaoBemCasado.addEventListener('click', function() {
    divReceitaBemCasado.style.display = 'block'; // aqui a div de bem casado aparece
    divReceitaPudim.style.display = 'none';
    // aqui a div de pudim some (quer dizer, quando ela tiver uma div envolvendo-a e com uma classe bacanuda pro query selector funcionar)
})
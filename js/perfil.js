const containerLoja = document.querySelector('.cards-loja-container');
const btnEsq = document.getElementById('btn-loja-esq');
const btnDir = document.getElementById('btn-loja-dir');
const larguraCard = 220; 

btnDir.addEventListener('click', () => {
    containerLoja.scrollLeft += larguraCard;
});

btnEsq.addEventListener('click', () => {
    containerLoja.scrollLeft -= larguraCard;
});
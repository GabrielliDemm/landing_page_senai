const botao = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');

botao.addEventListener('click', () => {  
    // Ativa e desativa a classe aberto (Usando: Toggle) 
    menu.classList.toggle('aberto');
});
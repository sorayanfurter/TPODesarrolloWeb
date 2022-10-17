const ham = document.querySelector('.toggle');
const menu = document.querySelector('.menu')

ham.addEventListener('click', ()=> {
    menu.classList.toggle('activarMenu');
    menu.classList.toggle('menu')
})



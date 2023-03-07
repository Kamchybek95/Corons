const burgerNav = document.getElementById('nav')
const burger = document.getElementById('burger')
const close = document.getElementById('close')
let bool = true;

burger.addEventListener('click', () => {
    burgerNav.classList.add('active')
})

close.addEventListener('click', () => {
    burgerNav.classList.remove('active')
})

burgerNav.addEventListener('click', (a) => {
    if(a.target == burgerNav) {
        burgerNav.classList.remove('active')
    }
})
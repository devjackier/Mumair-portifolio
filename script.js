const nightMode = document.getElementById('night__button')
const lightMode = document.getElementById('light__button')

nightMode.addEventListener('click', () =>{
    alert(`Entrando no modo escuro`)
    document.querySelector('body').style.backgroundColor = '#444242'
    document.querySelector('.header__logo').setAttribute('src', './assets/logo.night[.png')
    document.querySelector('.size__hi_dev').setAttribute('src', './assets/Uiux-night.png')
    document.querySelector('.section__apresentacao__text').style.color = 'white'
    document.querySelector('.about__item').style.color = 'white'
    document.querySelector('.parag__item').style.color = 'white'
    document.querySelector('.services__title').style.color = 'white'
    document.querySelector('.services__text').style.color = 'white'
    document.querySelector('.myprojects').style.color = 'white'
    document.querySelector('.parag__projects').style.color = 'white'
    document.querySelector('.testimonials__tittle').style.color = 'white'
    document.querySelector('.testimonials__tittle__text').style.color = 'white'
    document.querySelector('.title__lets').style.color = 'white'
    document.querySelector('.parag__lets').style.color = 'white'
})

lightMode.addEventListener('click', () => {
    alert(`Entrando no modo claro`)
    document.querySelector('body').style.backgroundColor = 'white'
    document.querySelector('.header__logo').setAttribute('src', './assets/logo.png')
    document.querySelector('.size__hi_dev').setAttribute('src', './assets/Hi.png')
    document.querySelector('.section__apresentacao__text').style.color = 'black'
    document.querySelector('.about__item').style.color = 'black'
    document.querySelector('.parag__item').style.color = 'black'
    document.querySelector('.services__title').style.color = 'black'
    document.querySelector('.services__text').style.color = 'black'
    document.querySelector('.myprojects').style.color = 'black'
    document.querySelector('.parag__projects').style.color = 'black'
    document.querySelector('.testimonials__tittle').style.color = 'black'
    document.querySelector('.testimonials__tittle__text').style.color = 'black'
    document.querySelector('.title__lets').style.color = 'black'
    document.querySelector('.parag__lets').style.color = 'black'
})
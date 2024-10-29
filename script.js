const bodyElement = document.querySelector('body')

const nightMode = document.getElementById('night__button')
const lightMode = document.getElementById('light__button')
const logoImg = document.querySelector('.header__logo')
const hiDevImg = document.querySelector('.size__hi_dev')

nightMode.onclick = () => {
    bodyElement.classList.add('dark-mode')
    logoImg.setAttribute('src', './assets/logo.night[.png')
    hiDevImg.setAttribute('src', './assets/Uiux-night.png')
}

lightMode.onclick = () => {
    bodyElement.classList.remove('dark-mode')
    logoImg.setAttribute('src', './assets/logo.png')
    hiDevImg.setAttribute('src', './assets/Hi.png')
}
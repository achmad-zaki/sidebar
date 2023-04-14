const sliderToggle = document.querySelector('.switch-button')
const sidebarClose = document.querySelector('.sidebar')
const navbarItem = document.getElementsByClassName('navbar-item')
const textLink = document.getElementsByClassName('text-link')
const brandLogo = document.querySelector('.brand-logo')
const arrowIcon = document.querySelector('.arrow-icon')
const nameAccount = document.querySelector('.name-account')
const imgAvatar = document.querySelector('.img-avatar')
const navItem = document.getElementsByClassName('nav-item')
const activeClass = document.getElementsByClassName('nav-link')

for (let i = 0; i < activeClass.length; i++) {
    activeClass[i].addEventListener('click', function() {
        const current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active', '')
        this.className += ' active'
    })
}

sliderToggle.addEventListener('click', () => {
    sliderToggle.classList.toggle('light')
})

const sideBar = () => {
    sidebarClose.classList.toggle('close')
    brandLogo.classList.toggle('close')
    for (let i = 0; i < navbarItem.length; i++) {
        navbarItem[i].classList.toggle('close')
    }
    for (let i = 0; i < textLink.length; i++) {
        textLink[i].classList.toggle('close')
    }
    arrowIcon.classList.toggle('close')
    nameAccount.classList.toggle('close')
    imgAvatar.classList.toggle('close')
}

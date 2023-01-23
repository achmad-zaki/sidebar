const body = document.querySelector('body')
const switchButton = document.querySelector('.toggle-switch')
const toggleDarkMode = document.querySelector('.switch')
const toggleClose = document.querySelector('.toggle-icon')
const sidebar = document.querySelector('.sidebar')

switchButton.addEventListener('click', () => (
    body.classList.toggle('dark')
))

switchButton.addEventListener('click', () => (
    toggleDarkMode.classList.toggle('dark')
))

toggleClose.addEventListener('click', () => (
    sidebar.classList.toggle('close')
))

toggleClose.addEventListener('click', () => (
    toggleClose.classList.toggle('close')
))

const navbarItem = document.getElementById('navbar-item')
const navLink = navbarItem.getElementsByClassName('nav-link')
for(let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', function() {
        const current = document.getElementsByClassName("active")
        current[0].className = current[0].className.replace(" active", "")
        this.className += " active"
    })
}
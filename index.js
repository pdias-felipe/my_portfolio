const btnMobile = document.querySelector('#btn-mobile')

function toggleMenu(){
    const personalMenu = document.querySelector('#personal-menu') 
    personalMenu.classList.toggle('active')
}
btnMobile.addEventListener('click', toggleMenu)
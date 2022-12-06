/*Menu*/
function menuShow(){
    const menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src = './imgs/menu_white_36dp.svg'
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = './imgs/close_white_36dp.svg'
    }
}


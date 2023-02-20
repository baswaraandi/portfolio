//navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const title = document.querySelector('#titlePort');
    const navMenu = document.querySelector('#navMenu');

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        title.classList.add('title-color');
    }else{
        header.classList.remove('navbar-fixed');
        title.classList.remove('title-color');
    }
}

//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener('click',function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})
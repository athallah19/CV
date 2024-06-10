// navbar fixed

window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
};


// Hambuger

const hambuger = document.querySelector('#hambuger');
const navMenu = document.querySelector('#nav-menu');

hambuger.addEventListener('click', function () {
    hambuger.classList.toggle('hambuger-active')
    navMenu.classList.toggle('hidden')
})


// klik diluar hambuger

window.addEventListener('click', function (e) {
    if (e.target != hambuger && e.target != navMenu) {
        hambuger.classList.remove('hambuger-active');
        navMenu.classList.add('hidden');
    }
})


//darkmode toggle

const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});


//Memindahkan posisi toggle sesuai mode yang dipilih

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    darkToggle.checked = true;
} else {
    document.documentElement.classList.remove('dark')
    darkToggle.checked = false;
}
const horas = document.getElementById('hour');
const minutos = document.getElementById('minute');
const segundos = document.getElementById('seconds');

class MobileNavbar {
    constructor(menu, list, navLinks) {
        this.menu = document.querySelector(menu);
        this.list = document.querySelector(list);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = 'active';

        this.handleClick = this.handleClick.bind(this);
    }
    animateLinks() {
        this.navLinks.forEach(link => {
            link.style.animation ?
                (link.style.animation = '') :
                (link.style.animation = 'navLinkFade .7s ease forwards');
        });
    }
    handleClick() {
        this.list.classList.toggle(this.activeClass);
        this.animateLinks();
    }
    addClickEvent() {
        this.menu.addEventListener('click', this.handleClick);
    }
    init() {
        if (this.menu) {
            this.addClickEvent();
        }
        return this;
    }
}
const mobileNavbar = new MobileNavbar('.menu', '.list', '.list li');
mobileNavbar.init();


const relogio = setInterval (function time () {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    if(sec < 10) sec = '0' + sec;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;
})

const rel = document.getElementById('btnRel');
const login = document.getElementById('btnLogin');
const carro = document.getElementById('btnCar');
const pokemon= document.getElementById('btnPoke');
const game = document.getElementById('btnGame');
document.getElementById('btnRel').addEventListener('click', function () {
    window.open("http://127.0.0.1:5500/digital/index.html", "_blank");
});
document.getElementById('btnLogin').addEventListener('click', function () {
    window.open("http://127.0.0.1:5500/Responsivo-master/index.html", "_blank");
});
document.getElementById('btnCar').addEventListener('click', function () {
    window.open("http://127.0.0.1:5500/devcar-main/index.html", "_blank");
});
document.getElementById('btnPoke').addEventListener('click', function () {
    window.open("http://127.0.0.1:5500/Pokedex-main/index.html", "_blank");
});
document.getElementById('btnGame').addEventListener('click', function () {
    window.open("http://127.0.0.1:5500/asteroids/index.html", "_blank");
});
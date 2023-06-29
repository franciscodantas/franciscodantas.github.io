let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    //reset: true,
    distance: '60px',
    duration: 2500,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});

ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form, .education-container, .row', {origin: 'bottom'});

ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});

ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});

const typed = new Typed('.multiple-text', {
    strings: ['FullStack Developer', 'Streamer', 'Gamer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDaelay: 1000,
    loop: true
});

const button = document.getElementById('btn');
const theme = document.getElementById('iconTheme');

button.onclick = () => {
    if (theme.classList.contains('bx-sun')) {
        theme.classList.remove('bx-sun');
        theme.classList.add('bxs-sun');
        document.documentElement.style.setProperty('--bg-color', '#fff');
        document.documentElement.style.setProperty('--second-bg-color', '#0ef');
        document.documentElement.style.setProperty('--text-color', '#1f242d');
        document.documentElement.style.setProperty('--main-color', '#323946');
    } else {
        theme.classList.remove('bxs-sun');
        theme.classList.add('bx-sun');
        document.documentElement.style.setProperty('--bg-color', '#1f242d');
        document.documentElement.style.setProperty('--second-bg-color', '#323946');
        document.documentElement.style.setProperty('--text-color', '#fff');
        document.documentElement.style.setProperty('--main-color', '#0ef');
    }
};


const navSlide = () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav-links');

    const navLinks = document.querySelectorAll('.nav-links li');

    //Toggle Nav

    menu.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');
    });

    //Animate links

    navLinks.forEach((link, index)=>{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
    });
};

navSlide();
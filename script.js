//Activte menu buttons 
let menuBtn = document.querySelector('#menu-btn');
let menuBar = document.querySelector('#menu-bar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('bx-x');
    menuBar.classList.toggle('active');

}

//lets remove menu bar on scroll 
window.onscroll = () => {
menuBtn.classList.remove('bx-x');
menuBtn.classList.remove('active');
}

//scroll revel
ScrollReveal({
    reset:true,
    distance: '100px',
    duration: 2000,
    delay: 200

});
ScrollReveal().reveal('.home-bio h1, .about-resume', { origin: 'left' });
ScrollReveal().reveal('.home-bio p', { origin: 'right' });
ScrollReveal().reveal('.home-bio p, heading', { origin: 'top' });
ScrollReveal().reveal('.profile-pic, .about-items, .skills-items, .project-items, .form', { origin: 'bottom' });

/*typing annimation*/
const aniTxt = new Typed('.animated-text',{
    strings:['FullStack Developer', 'Pharmacist', 'Front-end Developer' ],
    backSpeed:100,
    typeSpeed:100,
    backDelay:600,
    loop: true
});


gsap.registerPlugin(ScrollTrigger);

// Configuración de la animación para el modo diurno
let dayModeTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".line-one",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
    }
});

// Animación de entrada
dayModeTl.from('.line-one span', {
    y: '100vh',
    stagger: 0.4,
    duration: 1,
    opacity: 0
});

// Animación de cambio de color de fondo
dayModeTl.to('.line-one', {
    backgroundColor: 'yellow',
    duration: 1,
    ease: 'none'
}, '+=0.5');

// Animación de movimiento del sol
dayModeTl.from('.sun', {
    x: '20vw',
    duration: 1,
    ease: 'power1.out'
}, '+=0.9'); 

dayModeTl.to('.sun', {
    x: '-100vw',
    duration: 1,
    ease: 'power1.out'
}, '+=1'); 

dayModeTl.to('.line-one span', {
    x: '100vw',
    duration: 1,
    ease: 'power1.out'
}, '+=0');

dayModeTl.to('.line-one', {
    backgroundColor: 'white',
    duration: 1,
    ease: 'none'
}, '+=0.5');

// Configuración de la animación para el modo or
let orTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".line-two",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
    }
});

// Asegúrate de que .line-two esté visible al inicio
orTl.from('.line-two', {
    scale: 15,
    duration: 1,
    ease: 'power1.out',
    transformOrigin: "center"
}, 0);

orTl.to('.line-two', {
    scale: 1,
    duration: 1,
    ease: 'power1.out',
    transformOrigin: "center"
}, '+=1');

orTl.to('.line-two span', {
    y: '-10vh',
    stagger: 0.4,
    duration: 1,
});

// Configuración de la animación para el modo nocturno
let nightModeTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".line-three",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
    }
});

// Animación de entrada
nightModeTl.from('.line-three span', {
    y: '100vh',
    stagger: 0.4,
    duration: 1,
    opacity: 0
});

// Animación de cambio del gradiente
nightModeTl.to('.line-three', {
    background: 'linear-gradient(to right, black 50%, black 50%)', // Cambia el gradiente a negro
    duration: 1,
    ease: 'power1.out'
}, '+=0.5');

// Animación de cambio de color del texto
nightModeTl.to('.line-three span', {
    color: 'white',
    duration: 1,
    ease: 'none'
}, '+=0');

// Animación de la luna
nightModeTl.from('.moon', {
    x: '20vw',
    duration: 1,
    ease: 'power1.out'
}, '+=0.5');
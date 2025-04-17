




document.addEventListener("DOMContentLoaded", () => {


    const elements = document.querySelectorAll(".name-shadow");
    const element2 = document.querySelectorAll(".section-box")
    const cajitas = document.querySelectorAll(".cajitas")
    const intro = document.querySelectorAll(".services-intro")
    const smallBox = document.querySelectorAll(".small-box")
    const box2 = document.querySelectorAll('.service-box-2')
    const box3 = document.querySelectorAll('.service-box-3')

    const t1 = document.querySelectorAll('.service-titu')
    const t2 = document.querySelectorAll('.service-p2')
    const t3 = document.querySelectorAll('.div-info-principal')

    const t4 = document.querySelectorAll('.main-h2-p')
    const t5 = document.querySelectorAll('.img-main')
    const t6 = document.querySelectorAll('.main-h1')
    const t7 = document.querySelectorAll('.main-h2')


    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Deja de observar una vez que se muestra
            }
        });
    }, { threshold: 0.3 }); // Se activará cuando el 30% del elemento sea visible

    elements.forEach(element => observer.observe(element));
    element2.forEach(element2 => observer.observe(element2));
    cajitas.forEach(cajitas => observer.observe(cajitas));
    intro.forEach(intro => observer.observe(intro))
    smallBox.forEach(smallBox => observer.observe(smallBox))
    box2.forEach(box2 => observer.observe(box2))
    box3.forEach(box3 => observer.observe(box3))
    t1.forEach(t1 => observer.observe(t1))
    t2.forEach(t2 => observer.observe(t2))
    t3.forEach(t3 => observer.observe(t3))
    t4.forEach(t4 => observer.observe(t4))
    t5.forEach(t5 => observer.observe(t5))
    t6.forEach(t6 => observer.observe(t6))
    t7.forEach(t7 => observer.observe(t7))
});





// const links = document.getElementsByClassName('div-links')

// menu.addEventListener("click", () => {
//     links.classList.toggle("active")
// })

    
    const menu = document.querySelector(".menu-btn");
    const link = document.querySelector(".div-links");
    const close = document.querySelector(".close")


    if (menu && link && close) {
        menu.addEventListener("click", () => {
            link.classList.add("visible");
        });
    
        close.addEventListener("click", () => {
            link.classList.remove("visible");
        });
    } else {
        console.error("Uno o más elementos no fueron encontrados en el DOM.");
    }

    // menu.addEventListener("click", () => {
    //     link.classList.add("visible");
    // });

    // close.addEventListener("click", () => {
    //     link.classList.remove('visible')
    // })


    const fechaInput = document.getElementById('fecha');
    const hoy = new Date().toISOString().split('T')[0];        // Obtiene la fecha actual en formato YYYY-MM-DD
    fechaInput.setAttribute('min', hoy);                      // Establece la fecha mínima como hoy


document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Manejo del Header dinámico
    const nav = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.padding = '10px 0';
            nav.style.backgroundColor = '#112a20';
            nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.3)';
        } else {
            nav.style.padding = '15px 0';
            nav.style.backgroundColor = 'rgba(27, 67, 50, 0.95)';
            nav.style.boxShadow = 'none';
        }
    });

    // 2. Animación de Contadores
    const counters = document.querySelectorAll('.counter');
    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText.replace('+', '');
                const increment = target / 100;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target + '+';
                }
            };
            updateCount();
        });
    };

    // Observer para activar contadores al llegar a la sección
    const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) {
            animateCounters();
            observer.disconnect();
        }
    }, { threshold: 0.7 });

    observer.observe(document.querySelector('.stats-bar'));

    // 3. Envío simulado del Formulario
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        btn.innerText = 'Enviando...';
        btn.disabled = true;

        setTimeout(() => {
            alert('¡Gracias! Tu mensaje ha sido enviado a Saturno Technology.');
            btn.innerText = 'Enviar Mensaje';
            btn.disabled = false;
            contactForm.reset();
        }, 1500);
    });
});
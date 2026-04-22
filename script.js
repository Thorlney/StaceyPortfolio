/* ── Smooth scroll for nav links ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return; // skip placeholder links
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // Close mobile menu if open
        navUl.style.display = 'none';
    });
});

/* ── Scroll-in animations ── */
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('fade-in');
    });
}, observerOptions);
document.querySelectorAll('section').forEach(section => observer.observe(section));

/* ── Mobile menu toggle ── */
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navUl = document.querySelector('nav ul');

mobileMenuBtn.addEventListener('click', function () {
    const isOpen = navUl.style.display === 'flex';
    if (isOpen) {
        navUl.style.display = 'none';
    } else {
        navUl.style.display    = 'flex';
        navUl.style.flexDirection = 'column';
        navUl.style.position   = 'absolute';
        navUl.style.top        = '70px';
        navUl.style.left       = '0';
        navUl.style.right      = '0';
        navUl.style.background = 'white';
        navUl.style.padding    = '1rem 2rem';
        navUl.style.boxShadow  = '0 10px 20px rgba(0,0,0,0.1)';
    }
});

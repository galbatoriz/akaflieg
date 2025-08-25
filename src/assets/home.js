// Update year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const btn = document.querySelector('.menu-btn');
const links = document.querySelector('.navlinks');
btn?.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// Add background when scrolled
const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 10);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Smooth anchor fix for fixed nav offset
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const id = a.getAttribute('href').slice(1);
        if(!id) return;
        const el = document.getElementById(id);
        if(el){
            e.preventDefault();
            const top = el.getBoundingClientRect().top + window.scrollY - 64; // nav height
            window.scrollTo({ top, behavior: 'smooth' });
            links.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
        }
    });
});
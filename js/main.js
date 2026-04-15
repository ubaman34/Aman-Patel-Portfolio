/* ============================================================
   AMAN PATEL PORTFOLIO – main.js
   ============================================================ */

/* ── Year ──────────────────────────────────────────────────── */
document.getElementById('year').textContent = new Date().getFullYear();

/* ── Navbar scroll ─────────────────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ── Active nav link ───────────────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');

function setActive() {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}
window.addEventListener('scroll', setActive, { passive: true });
setActive();

/* ── Mobile Nav ────────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const mobileNav = document.createElement('nav');
mobileNav.className = 'mobile-nav';
mobileNav.innerHTML = `
  <a href="#home"       class="nav-link">Home</a>
  <a href="#about"      class="nav-link">About</a>
  <a href="#experience" class="nav-link">Experience</a>
  <a href="#projects"   class="nav-link">Projects</a>
  <a href="#awards"     class="nav-link">Awards</a>
  <a href="#contact"    class="nav-link">Contact</a>
`;
document.body.appendChild(mobileNav);

hamburger.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  document.body.style.overflow = isOpen ? 'hidden' : '';
  const spans = hamburger.querySelectorAll('span');
  if (isOpen) {
    spans[0].style.cssText = 'transform:translateY(6.5px) rotate(45deg)';
    spans[1].style.cssText = 'opacity:0;transform:scaleX(0)';
    spans[2].style.cssText = 'transform:translateY(-6.5px) rotate(-45deg)';
  } else {
    spans.forEach(s => s.style.cssText = '');
  }
});

mobileNav.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
    hamburger.querySelectorAll('span').forEach(s => s.style.cssText = '');
  });
});

/* ── Scroll reveal ─────────────────────────────────────────── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = parseInt(entry.target.dataset.delay || 0);
      setTimeout(() => entry.target.classList.add('is-visible'), delay);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

/* ── Typing effect ─────────────────────────────────────────── */
const roles = [
  'Developer',
  'Community Leader',
  'Open Source Contributor',
  'Microsoft Student Ambassador',
  'Content Creator',
];

const typingTarget = document.querySelector('.hero-tag');
if (typingTarget) {
  let roleIndex = 0, charIndex = 0, isDeleting = false;
  function type() {
    const current = roles[roleIndex];
    typingTarget.textContent = isDeleting
      ? current.substring(0, charIndex--)
      : current.substring(0, charIndex++);
    let delay = isDeleting ? 60 : 110;
    if (!isDeleting && charIndex === current.length + 1) { delay = 1800; isDeleting = true; }
    else if (isDeleting && charIndex === 0) { isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; delay = 400; }
    setTimeout(type, delay);
  }
  setTimeout(type, 1200);
}

/* ── Hero orb parallax ─────────────────────────────────────── */
const orb1 = document.querySelector('.hero-orb--1');
const orb2 = document.querySelector('.hero-orb--2');
window.addEventListener('mousemove', e => {
  const cx = window.innerWidth / 2, cy = window.innerHeight / 2;
  const dx = (e.clientX - cx) / cx, dy = (e.clientY - cy) / cy;
  if (orb1) orb1.style.transform = `translate(${dx*20}px,${dy*20}px)`;
  if (orb2) orb2.style.transform = `translate(${-dx*15}px,${-dy*15}px)`;
}, { passive: true });

/* ── Award card tilt ───────────────────────────────────────── */
document.querySelectorAll('.award-card, .timeline-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    card.style.transform = `translateY(-4px) rotateY(${x*3}deg) rotateX(${-y*3}deg)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});

/* ── Console easter egg ────────────────────────────────────── */
console.log('%c👋 Hi! I\'m Aman Patel', 'font-size:18px;font-weight:bold;color:#c9a96e;');
console.log('%cDeveloper · Community Leader · Open Source Contributor', 'color:#8888aa;font-size:12px;');
console.log('%c📧 aman9726patel@gmail.com', 'color:#7c6fff;font-size:12px;');

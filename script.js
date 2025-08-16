// Page switching with animation & mobile menu handling
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => { p.classList.add('hidden'); p.classList.remove('active'); });
    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.classList.remove('hidden');
        requestAnimationFrame(() => activePage.classList.add('active'));
    }
    const nav = document.getElementById('navLinks');
    if (nav && nav.classList.contains('show')) nav.classList.remove('show');
}

function toggleMenu() {
    const nav = document.getElementById('navLinks');
    if (nav) nav.classList.toggle('show');
}

// Simple starfield background
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

function sizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
sizeCanvas();

const STAR_COUNT = 150;
const stars = Array.from({ length: STAR_COUNT }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.2,
    dx: (Math.random() - 0.5) * 0.18,
    dy: (Math.random() - 0.5) * 0.18,
}));

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#ffffff';
    for (const s of stars) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
        s.x += s.dx; s.y += s.dy;
        if (s.x < 0 || s.x > canvas.width) s.dx *= -1;
        if (s.y < 0 || s.y > canvas.height) s.dy *= -1;
    }
    requestAnimationFrame(draw);
}
requestAnimationFrame(draw);

window.addEventListener('resize', sizeCanvas);

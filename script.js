const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.site-nav');

menuBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.textContent = open ? '×' : '☰';
});

document.querySelectorAll('.site-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn?.setAttribute('aria-expanded', 'false');
    if (menuBtn) menuBtn.textContent = '☰';
  });
});

const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lightbox-img');
const lbTitle = document.getElementById('lightbox-title');
const closeBtn = document.querySelector('.lightbox-close');
const backdrop = document.querySelector('.lightbox-backdrop');

function openLightbox(src, title, alt='') {
  if (!lightbox || !lbImg) return;
  lbImg.src = src;
  lbImg.alt = alt || title;
  lbTitle.textContent = title || '';
  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';
  closeBtn?.focus();
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.hidden = true;
  lbImg.src = '';
  document.body.style.overflow = '';
}

document.querySelectorAll('.open-lightbox').forEach(card => {
  card.addEventListener('click', () => {
    openLightbox(card.dataset.src, card.dataset.title, card.querySelector('img')?.alt || '');
  });
});

closeBtn?.addEventListener('click', closeLightbox);
backdrop?.addEventListener('click', closeLightbox);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
});
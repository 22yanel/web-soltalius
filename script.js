
const menuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
if (menuButton && mobileMenu) {
  const icon = menuButton.querySelector('i');
  menuButton.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    icon.className = open ? 'fas fa-xmark' : 'fas fa-bars';
  });
}
const modal = document.getElementById('gallery-modal');
const modalImage = document.getElementById('gallery-modal-image');
const modalCaption = document.getElementById('gallery-modal-caption');
const closeButton = document.getElementById('gallery-close');
function closeGallery(){ if(!modal) return; modal.classList.remove('open'); modalImage.src=''; document.body.style.overflow=''; }
document.querySelectorAll('[data-gallery-image]').forEach(card => card.addEventListener('click', () => { modalImage.src=card.dataset.galleryImage; modalImage.alt=card.dataset.galleryTitle; modalCaption.textContent=card.dataset.galleryTitle; modal.classList.add('open'); document.body.style.overflow='hidden'; }));
if(closeButton) closeButton.addEventListener('click', closeGallery);
if(modal) modal.addEventListener('click', e => { if(e.target===modal) closeGallery(); });
document.addEventListener('keydown', e => { if(e.key==='Escape') closeGallery(); });

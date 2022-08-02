function closeMenu() {
  const closeModal = document.getElementById('mobile-nav-open');
  const hamburgerIcon = document.getElementById('mobile-nav-closed');
  const body = document.getElementsByTagName('body')[0];

  closeModal.style.display = 'none';
  hamburgerIcon.style.display = '';
  body.style.overflow = '';
}

function openMenu() {
  const openModal = document.getElementById('mobile-nav-open');
  const hamburgerIcon = document.getElementById('mobile-nav-closed');
  const body = document.getElementsByTagName('body')[0];

  openModal.style.display = 'block';
  hamburgerIcon.style.display = 'none';
  body.style.overflow = 'hidden';
}

const closeMark = document.getElementById('closeMark');
const menuIcon = document.getElementById('hamburger-menu');

closeMark.addEventListener('click', () => {
  window.onclick = (event) => {
    if (event.target.className === 'fa-solid fa-xmark') {
      closeMenu();
    }
  };
});

menuIcon.addEventListener('click', () => {
  window.onclick = (event) => {
    if (event.target.className === 'fa-solid fa-bars') {
      openMenu();
    }
  };
});
function closeMenu() {
  const closeModal = document.getElementById('mobile-nav-open');

  closeModal.style.display = 'none';
  document.body.style.zIndex = 1;
}

function openMenu() {
  const openModal = document.getElementById('mobile-nav-open');

  openModal.style.display = 'block';
  openModal.style.zIndex = 1;
  document.body.style.zIndex = '-1';
}

const closeMark = document.getElementById('closeMark');
const menuIcon = document.getElementById('hamburger-menu');

closeMark.addEventListener('click', () => {
  window.onclick = function (event) {
    if (event.target.className === 'fa-solid fa-xmark') {
      closeMenu();
    }
  };
});

menuIcon.addEventListener('click', () => {
  window.onclick = function (event) {
    if (event.target.className === 'fa-solid fa-bars') {
      openMenu();
    }
  };
});
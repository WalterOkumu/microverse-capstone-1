function closeMenu() {
  const closeModal = document.getElementById('mobile-nav-open');

  closeModal.style.display = 'none';
}

function openMenu() {
  const openModal = document.getElementById('mobile-nav-open');

  openModal.style.display = 'block';
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
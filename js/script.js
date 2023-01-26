// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// Ketika Hambureger Menu Di Click
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const hambureger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
  if (!hambureger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});

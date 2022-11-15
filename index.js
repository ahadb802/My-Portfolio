const menuBox = document.getElementById('menuBox');
const menuIcon = document.getElementById('menuIcon');
const header = document.getElementById('myHeader');
const sticky = header.offsetTop;

menuIcon.onclick = function () {
  menuBox.classList.toggle('open-menu');
  if (menuBox.classList.contains('open-menu')) {
    menuIcon.src = 'images/Icon.png';
  } else {
    menuIcon.src = 'images/Icon-Menu.png';
  }
};

document.querySelectorAll('.nav-links').forEach((n) => n.addEventListener('click', () => {
  menuBox.classList.remove('open-menu');
  if (menuBox.classList.contains('open-menu')) {
    menuIcon.src = 'images/Icon.png';
  } else {
    menuIcon.src = 'images/Icon-Menu.png';
  }
}));

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}
window.onscroll = function () { myFunction(); };

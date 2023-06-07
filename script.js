const hamburger = document.getElementById('menu-bar');
const menuList = document.querySelector('nav ul');

hamburger.addEventListener('click', function() {
    menuList.classList.toggle('slide');
});
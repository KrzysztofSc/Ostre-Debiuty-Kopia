const navMobile = document.querySelector('.nav__mobile');
const bars = document.querySelector('.fa-bars');
const xMark = document.querySelector('.fa-xmark');
const headerBtn = document.querySelector('.header__btn');
const navLinks = document.querySelectorAll('.nav__mobile__item');
const halloween = document.querySelector('.halloween');
const liver = document.querySelector('.liver');
const open = document.querySelector('.open');
const defens = document.querySelector('.defens');

const showNav = () => {
	navMobile.classList.add('active');
};

const hideNav = () => {
	navMobile.classList.remove('active');
};

navLinks.forEach((item) => {
	item.addEventListener('click', hideNav);
});

halloween.addEventListener('click', function () {
	window.location.href = 'halloween.html';
});
liver.addEventListener('click', function () {
	window.location.href = 'liver.html';
});
defens.addEventListener('click', function () {
	window.location.href = 'defens.html';
});
open.addEventListener('click', function () {
	window.location.href = 'open.html';
});

bars.addEventListener('click', showNav);
xMark.addEventListener('click', hideNav);
headerBtn.addEventListener('click', function () {
	window.location.href = '#course';
});

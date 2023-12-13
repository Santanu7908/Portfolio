const Hamburger = document.querySelector('.Header .nav-bar .nav-list .Hamburger');
const Mobile_Menu = document.querySelector('.Header .nav-bar .nav-list ul');
const Menu_Item = document.querySelectorAll('.Header .nav-bar .nav-list ul li a');
const Header = document.querySelector('.Header.container');


Hamburger.addEventListener('click',()=> {
    Hamburger.classList.toggle('active');
    Mobile_Menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        Header.style.backgroundColor = '#29323c';

    } else {
        Header.style.backgroundColor = 'transparent' ;
    }
});

Menu_Item.forEach((Item) => {
    Item.addEventListener('click', () => {
        Hamburger.classList.toggle('active');
        Mobile_Menu.classList.toggle('active');
    });
});
    

// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');


// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}

// Page transition 

for(var i = 0; i < navItems.length; i++ ){ 
    navItems[i].addEventListener('click', pageflip);
}

function pageflip(){
    toggleMenu()
    var link = this.getAttribute("value")
    setTimeout(function(){ 
        window.location.href = link; 
    }, 800);
}

// Particeles.js 

particlesJS.load('particles-js', 'particles.json', function(){
      console.log('particles.json loaded...');
    });















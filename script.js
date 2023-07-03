"use strict";


/* sideBar */

let sideBar = document.querySelector('#sideBar');
let sideBarToggler = document.querySelector('.menu');


// Toggling the sideBar

sideBarToggler.addEventListener('click', () => {
    sideBar.classList.toggle('show');
    sideBarToggler.classList.toggle('opened')
    sideBarToggler.setAttribute('aria-expanded',sideBarToggler.classList.contains('opened')); 
    sideBarToggler.classList.contains('opened')
    
});


// Closing the sideBar on clicking Outside and on the sideBar-Links
window.addEventListener('click', (e) => {
    if (sideBar.classList.contains('show') && !sideBarToggler.contains(e.target) ) {
     console.log('Sidebar clicked out')
     sideBar.classList.remove('show');
     sideBarToggler.classList.remove('opened')
    }
});




 



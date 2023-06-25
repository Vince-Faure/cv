"use strict";


/* Sidebar */

let sidebar = document.querySelector('#sideBar');
let sidebarToggler = document.querySelector('.sideBarToggler');


// Toggling the Sidebar
sidebarToggler.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});


// Closing the Sidebar on clicking Outside and on the Sidebar-Links
window.addEventListener('click', (e) => {
    if (e.target.id !== 'sideBar' && e.target.className !== 'sideBarToggler') {
        sidebar.classList.remove('show');
    }
});




 



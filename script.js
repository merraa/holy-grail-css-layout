const div = document.querySelector('.outer-grid');
const nav = document.querySelector('nav');
function toggleNav(){
    div.classList.toggle('outer-grid-expanded');
    nav.classList.toggle('hide-nav');
}
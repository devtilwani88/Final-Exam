/*=================sticky navbar==============*/

window.onscroll = () => {
    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);
   
}


// dark mode

let darkModeIcon = document.querySelector("#darkMode-icon");

darkModeIcon.onclick = () => {

    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');    

};
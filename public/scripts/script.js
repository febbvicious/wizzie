// ketika scroll,navbar berubah bg-white
const navbar = document.getElementById("navbar");
const iconImg = document.querySelector("#navbar #icon .image");
document.addEventListener("scroll",function(){
    if(window.scrollY > 0){
        navbar.style.background ="#ffffff";
        navbar.style.color = "rgb(0,0,0)";
        iconImg.style.background = "black";
    }else {
        navbar.style.background = "";
        navbar.style.color = "#ffffff";
        iconImg.style.background = "";
    }
});

// memunculkan/menghilangkan navbar ketike mode smartphone
const hamburger = document.querySelector("#navbar-extra #hamburger");
const navbarGroup = document.getElementById("navbar-group");
let showNavbar = false;
hamburger.addEventListener("click",function(){
    if(showNavbar){
        navbarGroup.style.transform = "scaleY(0)";
    }else {
        navbarGroup.style.transform = "scaleY(1)";
    }
    showNavbar = !showNavbar;
});

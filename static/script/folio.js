
var cv= document.getElementById("cv");
var moncv= document.getElementById("moncv");
var contact= document.getElementById("contact");
var moncontact= document.querySelector(".moncontact");
var aboutme= document.getElementById("aboutme");
var sidemenu= document.getElementById("side-menu")
var containerImg= document.getElementById("about");
var ret=document.getElementById("ret");
var realize=document.getElementById("realisation");
var game=document.getElementById("jeu");

cv.addEventListener("click", () => {
    moncv.style.display= "inline";  
    moncontact.style.display= "none";
    game.style.display= "none";    
});

contact.addEventListener("click", () => {
    moncontact.style.display= "inline";
    moncv.style.display= "none";
    game.style.display= "none";    
});

aboutme.addEventListener("click", () => {
    moncv.style.display= "none";
    moncontact.style.display= "none";
    game.style.display= "none";    
    sidemenu.style.transform= 'translateY(150%)';
    sidemenu.style.transition= "transform 3s";
    containerImg.style.opacity= "1";
});

ret.addEventListener("click", function() {
    window.location.replace("/");
});

realize.addEventListener("click", () => {
    moncv.style.display= "none";
    moncontact.style.display= "none";  
    game.style.display= "inline";    
})
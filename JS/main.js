function displayText() {
    var div1 = document.getElementById("monprofil");
    var div2 = document.getElementById("moncv");
    var div3 = document.getElementById("mail");

    if (div1.style.display == "none") {
        div2.style.display = "none";
        div3.style.display = "none";
        div1.style.display = "block";  } 
    else { 
        div1.style.display = "none";
        div2.style.display = "none";
        div3.style.display = "none" }
    }

function displayCv() {
    var div1 = document.getElementById("monprofil");
    var div2 = document.getElementById("moncv");
    var div3 = document.getElementById("mail");

    if (div2.style.display == "none") {
        div1.style.display = "none";
        div3.style.display = "none";
        div2.style.display = "block"; }
    else { 
        div2.style.display = "none";
        div1.style.display = "none";
        div3.style.display =  "none";  }
    }

function mailing() {
    var div1 = document.getElementById("monprofil");
    var div2 = document.getElementById("moncv");
    var div3 = document.getElementById("mail");

    if (div3.style.display == "none") {
        div3.style.display = "block";
        div1.style.display = "none";
        div2.style.display = "none"; }
    else {
        div3.style.display ="none"; 
        div2.style.display = "none";
        div1.style.display = "none";  }
    }

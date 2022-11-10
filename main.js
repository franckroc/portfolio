function displayText() {

    var div1 = document.getElementById("monprofil");
    var div2 = document.getElementById("moncv");
    var div3 = document.getElementById("monmail");
    
    if (div1.style.opacity == "0") 
        {
        div1.style.opacity = "1";
        div2.style.display = "none";
        div3.style.display = "none";
        } 
    else 
        { 
        div1.style.opacity = "0";
        div2.style.display = "none";
        div3.style.display = "none" 
        }
    
    }

function displayCv() {
    
    var div1 = document.getElementById("monprofil");
    var div2 = document.getElementById("moncv");
    var div3 = document.getElementById("monmail");
    
    if (div2.style.display == "none") 
        {
        div1.style.opacity = "0";
        div2.style.display = "block"; 
        div3.style.display = "none";
        }
    else 
        { 
        div1.style.opacity = "0";
        div2.style.display = "none";
        div3.style.display =  "none";  
        }
    }

function mailing() {

    var div1 = document.getElementById("monprofil");
    var div2 = document.getElementById("moncv");
    var div3 = document.getElementById("monmail");

    if (div3.style.display == "none") 
        {
        div1.style.opacity = "0";
        div2.style.display = "none";     
        div3.style.display = "block";
        }
    else 
        {
        div1.style.opacity = "0";  
        div2.style.display = "none";    
        div3.style.display ="none"; 
        }
    }

    function animation1() {
        for (let i = 0; i < 20; i++) {
            
        }

    }
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

// canvas anim1 
var monCanvas = document.getElementById('anim1');
if (monCanvas.getContext){
    var ctext = monCanvas.getContext('2d');
    // couleur rectangle
    var gradient = ctext.createRadialGradient(450, 80, 50, 450, 85, 2*Math.PI);
    gradient.addColorStop(0, '#ffa500');
    gradient.addColorStop(1, '#ffffff');
    ctext.fillStyle = gradient;
    // translation au centre du contexte
    ctext.translate(monCanvas.width/2,monCanvas.height/2)
    // incrément
    var i = 0;
    var a = 0;
    // timer
    var inter = setInterval(Truc,1);    
} else {
    alert('canvas non supporté par ce navigateur');
}

//dessin 
function Truc() {
    ctext.lineWidth = 1;
    ctext.beginPath();
    a--;
    //ctext.clearRect(0, 0, monCanvas.width,monCanvas.height);
    // arc : x, y, radius, startAngle, endAngle, antiClockwise 
    ctext.arc(a,a, 5, 0, 2 * Math.PI, false);
    ctext.fill();
    
    ctext.rotate(0.5);
    
    //ctext.arc(monCanvas.width/2,monCanvas.height/2, 10, 0, 2 * Math.PI, false);
    //ctext.fillRect(0, 0, 200, 20); 

    
    
}
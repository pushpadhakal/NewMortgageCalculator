
var document;

var country_list = ["United States", "Canada"];
var neighbor = document.getElementById("test");
for (var i=0; i< country_list.length; i++) {
    var opt = document.createElement("option");
    opt.innerHTML = country_list[i];
    opt.value = country_list[i];
    neighbor.appendChild(opt);
}

function checkAmt(){
    var temp = document.getElementById("principleAmount").value;
    if (temp> 200000) {
        alert("error!");
            
    }
}


/*var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("floating");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 1000); // Change image every 1 seconds
}*/



//$(document).ready(function() {

    setInterval(function(){
        var sec = new Date().getSeconds();
        if((sec > 0 && sec <= 5) || (sec > 15 && sec <= 20) || (sec > 30 && sec <= 35) || (sec > 45 && sec <= 50))
        {
           $('body').css({"background":"url(floatingImage/picA.jpeg) fixed no-repeat", "background-size":"cover"});
        }
        else if((sec > 5 && sec <= 10) || (sec > 20 && sec <= 25) || (sec > 35 && sec <= 40) || (sec > 50 && sec <= 55))
        {
           $('body').css({"background": "url(floatingImage/picB.jpg) fixed no-repeat", "background-size":"cover"});
        }
        else if((sec > 10 && sec <= 15) || (sec > 25 && sec <= 30) || (sec > 40 && sec <= 45) || (sec > 55 && sec <= 60))
        {
            $('body').css({'background': 'url(floatingImage/picC.jpg) fixed no-repeat', "background-size":"cover"});
        }
        
    }, 1000);

//});




var theme = new Audio("bgmusic.mp3");
theme.play();

var divs = document.querySelector(".startupcont");
var divss = document.querySelector(".startupcont2");

 divs.innerHTML = "3";


 setTimeout(two,1000);

 function two(){
   divs.innerHTML = "2";

   setTimeout(one,1000);
   function one(){
     divs.innerHTML = "1";

     setTimeout(start,1000);
     function start(){
       divs.innerHTML = "";
       divss.innerHTML = "START";
       setTimeout(open,1000);
   function open() {
  window.location.replace("MEDIUMindex.html");}
     }
   }
 }

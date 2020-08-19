var pos = -18;
var posNext = 100;
var pos11 = 3;
var pos5 =22;
var pos16 =41;
var pos2 = 60;
var pos10 = 79;
var pos7 =3;
var pos12 = 22;
var pos19 =41;
var pos1 = 60;
var pos9 =79;
var pos13 = 3;
var pos8 = 22;
var pos18 = 41;
var pos4 = 60;
var pos6 =79;
var pos20 = 3;
var pos15 = 22;
var pos14 =41;
var pos17 = 60;
var pos3 = 79;
var theme = new Audio("bgmusic.mp3");
theme.play();
setInterval(animation,20);

function animation(){
  var ele11 = document.querySelector(".eleven");
  pos11++;
  ele11.style.left = pos11 + "%";
  if(pos11 == 100){
    pos11 = -18;
    ele11.style.display = "none";
    ele11.style.left = pos +"%";
    ele11.style.display = "inline";
  }

  var ele5 = document.querySelector(".five");
  pos5++;
ele5.style.left = pos5 + "%";
  if(pos5 == 100){
    pos5 = -18;
    ele5.style.display = "none";
    ele5.style.left = pos +"%";
    ele5.style.display = "inline";
  }


  var ele16 = document.querySelector(".sixteen");
  pos16++;
  ele16.style.left = pos16 + "%";
  if(pos16 == 100){
    pos16 = -18;
    ele16.style.display = "none";
    ele16.style.left = pos +"%";
    ele16.style.display = "inline";
  }

  var ele2 = document.querySelector(".two");
  pos2++;
  ele2.style.left = pos2 + "%";
  if(pos2 == 100){
    pos2 = -18;
    ele2.style.display = "none";
    ele2.style.left = pos +"%";
    ele2.style.display = "inline";
  }

  var ele10 = document.querySelector(".ten");
  pos10++;
ele10.style.left = pos10 + "%";
  if(pos10 == 100){
    pos10 = -18;
    ele10.style.display = "none";
    ele10.style.left = pos +"%";
    ele10.style.display = "inline";
  }

  var ele7= document.querySelector(".seven");
  pos7++;
   ele7.style.left = pos7 + "%";
  if(pos7 == 100){
    pos7 = -18;
    ele7.style.display = "none";
    ele7.style.left = pos +"%";
    ele7.style.display = "inline";
  }

  var ele12 = document.querySelector(".twelve");
  pos12++;
ele12.style.left = pos12 + "%";
  if(pos12 == 100){
    pos12 = -18;
    ele12.style.display = "none";
    ele12.style.left = pos +"%";
    ele12.style.display = "inline";
  }

  var ele19 = document.querySelector(".nineteen");
  pos19++;
ele19.style.left = pos19 + "%";
  if(pos19 == 100){
    pos19 = -18;
    ele19.style.display = "none";
    ele19.style.left = pos +"%";
    ele19.style.display = "inline";
  }


  var ele1 = document.querySelector(".one");
  pos1++;
   ele1.style.left = pos1 +"%";
  if(pos1 == 100){
    pos1 = -18;
    ele1.style.display = "none";
    ele1.style.left = pos +"%";
    ele1.style.display = "inline";
  }

  var ele9 = document.querySelector(".nine");
  pos9++;
  ele9.style.left = pos9 + "%";
  if(pos9 == 100){
    pos9 = -18;
    ele9.style.display = "none";
    ele9.style.left = pos +"%";
    ele9.style.display = "inline";
  }

  var ele13 = document.querySelector(".thirteen");
  pos13 --;
  ele13.style.left = pos13 + "%";
  if(pos13 == -18){
    pos13 = 100;
    ele13.style.display = "none";
    ele13.style.left = pos + "%";
    ele13.style.display = "inline";
  }

  var ele8 = document.querySelector(".eight");
  pos8 --;
  ele8.style.left = pos8 + "%";
  if(pos8 == -18){
    pos8 = 100;
    ele8.style.display = "none";
    ele8.style.left = pos + "%";
    ele8.style.display = "inline";
  }


  var ele18 = document.querySelector(".eighteen");
  pos18 --;
  ele18.style.left = pos18 + "%";
  if(pos18 == -18){
    pos18 = 100;
    ele18.style.display = "none";
    ele18.style.left = pos + "%";
    ele18.style.display = "inline";
  }



  var ele4 = document.querySelector(".four");
  pos4 --;
  ele4.style.left = pos4 + "%";
  if(pos4 == -18){
    pos4 = 100;
    ele4.style.display = "none";
    ele4.style.left = pos + "%";
    ele4.style.display = "inline";
  }


  var ele6 = document.querySelector(".six");
  pos6 --;
  ele6.style.left = pos6 + "%";
  if(pos6 == -18){
    pos6 = 100;
    ele6.style.display = "none";
    ele6.style.left = pos + "%";
    ele6.style.display = "inline";
  }

  var ele20 = document.querySelector(".twenty");
  pos20 --;
  ele20.style.left = pos20 + "%";
  if(pos20 == -18){
    pos20 = 100;
    ele20.style.display = "none";
    ele20.style.left = pos + "%";
    ele20.style.display = "inline";
  }

  var ele14 = document.querySelector(".fourteen");
  pos14 --;
  ele14.style.left = pos14 + "%";
  if(pos14 == -18){
    pos14 = 100;
    ele14.style.display = "none";
    ele14.style.left = pos + "%";
    ele14.style.display = "inline";
  }
  var ele15 = document.querySelector(".fifteen");
  pos15 --;
  ele15.style.left = pos15 + "%";
  if(pos15 == -18){
    pos15 = 100;
    ele15.style.display = "none";
    ele15.style.left = pos + "%";
    ele15.style.display = "inline";
  }

  var ele17 = document.querySelector(".seventeen");
  pos17 --;
  ele17.style.left = pos17 + "%";
  if(pos17 == -18){
    pos17 = 100;
    ele17.style.display = "none";
    ele17.style.left = pos + "%";
    ele17.style.display = "inline";
  }

  var ele3 = document.querySelector(".three");
  pos3 --;
  ele3.style.left = pos3 + "%";
  if(pos3 == -18){
    pos3 = 100;
    ele3.style.display = "none";
    ele3.style.left = pos + "%";
    ele3.style.display = "inline";
  }























}


var rand1=Math.floor(Math.random()*6)+1;
var rand2=Math.floor(Math.random()*6)+1;
var rand_img1="images/dice"+rand1+".png";
var rand_img2="images/dice"+rand2+".png";

var change1=document.querySelectorAll("img")[0];
var change2=document.querySelectorAll("img")[1];

change1.setAttribute("src",rand_img1);
change2.setAttribute("src",rand_img2);

if(rand1>rand2)
document.querySelector( "h1").innerHTML="Player 1 Wins✨";
else if(rand2>rand1)
document.querySelector( "h1").innerHTML="Player 2 Wins✨";
else
document.querySelector( "h1").innerHTML="Its a Draw ";


function menuOpen(){
  var m=document.getElementById("menu");
  var w=document.getElementById("wg");
  var b=document.getElementById("bar");
    m.style.display="block";
    b.style.display="none";
    w.style.display="block";


}
/* function menuAni(menu){
  menu.style.display="block";
  menu.style.animationDirection="reverse";

} */
function menuClose(){
  var m=document.getElementById("menu");
  var w=document.getElementById("wg");
  var b=document.getElementById("bar");
  m.style.display="none";
/*   
 menuAni(m) */
 
    setTimeout(()=>{m.style.display="block";
    m.style.animationDirection="reverse";},100)
    b.style.display="block";
    w.style.display="none";
    setTimeout(()=>{m.style.display='none'; m.style.animationDirection="alternate";},1100);
}
var i = 0;
var txt = "Welcome To Let's Code </>";
var speed = 220;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("h1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
document.getElementById("loader").style.display="block";
document.getElementById("content").style.display="none";

/* window.onload = function(){ document.getElementById("loader").style.display="none";
document.getElementById("content").style.display="block";

}  */

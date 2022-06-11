function menuOpen(){
    var m=document.getElementById("menu");
    var w=document.getElementById("wg");
    var b=document.getElementById("bar");
      m.style.display="block";
      b.style.display="none";
      w.style.display="block";
  }
  function menuClose(){
    var m=document.getElementById("menu");
    var w=document.getElementById("wg");
    var b=document.getElementById("bar");
      m.style.display="none";
      b.style.display="block";
      w.style.display="none";
  }
  var i = 0;
  var txt = "Welcome To Let's Code </>";
  var speed = 220;
  
window.onload = function(){ document.getElementById("loader").style.display="none";
document.getElementById("content").style.display="block";
typeWriter();
} 
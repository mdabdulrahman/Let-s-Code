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
  
  function courseNext(d){
  var o=document.getElementById("sec1");
  var c=document.getElementById("sec2");
  var testQuiz=document.getElementById("sec3");
  var tick1=document.getElementById("tickIcon1");
  var tick2=document.getElementById("tickIcon2");
  var tick3=document.getElementById("tickIcon3");
  var untick1=document.getElementById("untickIcon1");
  var untick2=document.getElementById("untickIcon2");
  var untick3=document.getElementById("untickIcon3");
  var result=document.getElementById("sec4");
  console.log("Starts");
  if (d==1) {
                  o.style.display="none";
                  c.style.display="block";
                  untick1.style.display="none";
                  tick1.style.display="block";
                  console.log("Next page shown");
  }
  else if(d==2) {
                  o.style.display="none";
                  c.style.display="none";
                  testQuiz.style.display="block";
                  untick2.style.display="none";
                  tick2.style.display="block";
                  result.style.display="none";
                  console.log("Next page shown");
  } 
  else if(d==3){
      o.style.display="none";
                  c.style.display="none";
                  testQuiz.style.display="none";
                  untick2.style.display="none";
                  tick3.style.display="block";
                  console.log("Next page shown");
  }
  else if (d==4){
      o.style.display="none";
      c.style.display="none";
      testQuiz.style.display="none";
      result.style.display="block";
      tick3.style.display="block";
      untick3.style.display="none";
  }
  else	{
                  o.style.display="block";
                  c.style.display="none";
                  testQuiz.style.display="none";
                  console.log("Previous page shown");																
  }				
  }
  
  
  function result(h){
  var ans1 = document.getElementsByName("q1");
  var ans1selected = Array.from(ans1).find( answer1=>answer1.checked);
  var ans2 = document.getElementsByName("q2");
  var ans2selected = Array.from(ans2).find( answer2=>answer2.checked);
  var ans3 = document.getElementsByName("q3");
  var ans3selected = Array.from(ans3).find( answer3=>answer3.checked);
  var ans4 = document.getElementsByName("q4");
  var ans4selected = Array.from(ans4).find( answer4=>answer4.checked);
  var ans5 = document.getElementsByName("q5");
  var ans5selected = Array.from(ans5).find( answer5=>answer5.checked);
  
  let count=0;
  console.log(ans1selected.value);
  if (ans1selected.value=="true"){
      count++;
  }
  if (ans2selected.value=="true"){
      count++;
  }
  if (ans3selected.value=="true"){
      count++;
  }
  if (ans4selected.value=="true"){
      count++;
  }
  if (ans5selected.value=="true"){
      count++;
  }
  if (count>=3){
  document.getElementById("marking").innerHTML=`Good! ,You Got ${count} out of 5`
  document.getElementById("marking").style.color="green";
  document.getElementById("ctick").style.display="block";
  document.getElementById("cwrong").style.display="none";
  document.getElementById("try").style.display="none";
  document.getElementById("cont").style.display="block";
  userDbUpdateCourses("css",h,true);
}
  else if(count<3){
  document.getElementById("marking").innerHTML=`Try Again ,You Got ${count} out of 5`;
  document.getElementById("marking").style.color="red";
  document.getElementById("try").style.display="block";
  document.getElementById("cont").style.display="none";
  document.getElementById("ctick").style.display="none";
  document.getElementById("cwrong").style.display="block";
  }
  
  }
  document.getElementById("loader").style.display="block";
document.getElementById("content").style.display="none";
const firebaseConfig = {
  apiKey: "AIzaSyD_8GZiznCmMPHudMbYO23j7PB1wSdqblc",
  authDomain: "letscoder2-0.firebaseapp.com",
  databaseURL: "https://letscoder2-0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "letscoder2-0",
  storageBucket: "letscoder2-0.appspot.com",
  messagingSenderId: "592564234699",
  appId: "1:592564234699:web:74fdb240deef7e8c88ae4e",
  measurementId: "G-3YLXG9ME7E"
};
firebase.initializeApp(firebaseConfig);

const auth=firebase.auth();
console.log(auth);
const db=firebase.firestore();
console.log(db);
var storage=firebase.storage();
var storageRef=storage.ref();
console.log(storage);
console.log(storageRef);
var spaceRef = storageRef.child('images/space.jpg');
var imagesRef = storageRef.child('images');
var uid=window.localStorage.getItem("uid");

/* function database creation for new user */
function newDb(name,email,phonenumber,id){
  console.log(id)
db.collection("users").doc(id).set({
    profileInfo:{
      userName:name,
      emailId:email,
      phoneNumber:phonenumber
    },
    courses:{
      html:{
        h1:false,
        h2:false,
        h3:false,
       
        h4:false,
        h5:false,
        h6:false,
        h7:false,
        h8:false,
        h9:false,
        h10:false,
        h11:false,
        h12:false,
        h13:false,
        h14:false,
        h15:false
      },
      css:{
       c1:false,
       c2:false,
       c3:false,
     
       c4:false,
       c5:false,
       c6:false,
       c7:false,
       c8:false,
       c9:false,
       c10:false,
       c11:false,
       c12:false,
       c13:false,
       c14:false,
       c15:false
     },
     js:{
       j1:false,
       j2:false,
       j3:false,
 
       j4:false,
       j5:false,
       j6:false,
       j7:false,
       j8:false,
       j9:false,
       j10:false,
       j11:false,
       j12:false,
       j13:false,
       j14:false,
       j15:false
     }
    }
  }).then(()=>{
    window.location.href="index.html"
  })


}


/* function for sign In ,signOut, newUser */

function authUser(signStatus){
  
  
  if (signStatus=="newAccount"){
    let emailidN=document.getElementById("emailidN").value;
  let passwordN=document.getElementById("passwordN").value;
  let nameN=document.getElementById("nameN").value;
  let phonenumberN=document.getElementById("phonenumberN").value;
  console.log(nameN);
  document.getElementById("content").style.display="none";
  document.getElementById("loader").style.display="block";
  firebase.auth().createUserWithEmailAndPassword(emailidN, passwordN)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    
   
    newDb(nameN,emailidN,phonenumberN,user.uid)
      
    console.log(user);
    alert("Your account have Succesfully Created");
   
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("There was Some Error ,Please Try Again")
    document.getElementById("loader").style.display="none";
    document.getElementById("content").style.display="block";
    // ..
  });
  
}
else if(signStatus=="signIn"){
  let emailidS=document.getElementById("emailidS").value;
  let passwordS=document.getElementById("passwordS").value;
  firebase.auth().signInWithEmailAndPassword(emailidS, passwordS)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user);
alert("You have Successfully signed in");
window.location.href="index.html";
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("You have entered a wrong password/emailid")
  });
}
else if(signStatus=="signOut"){
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        window.localStorage.removeItem("uid");
       alert("You signed Out");
location.reload();
window.location.href="index.html";
      }).catch((error) => {
        // An error happened.
      });
}
else{
    alert('there Was some error')
}
}
function change(status,user){
  if (status=="new"){
  let ul=document.querySelector("#menuLi");
  let li=document.createElement("li");
  let a=document.createElement("a");
let icon=document.createElement("i");
let logintxt=document.createTextNode("Login");
let newUsertxt=document.createTextNode("Create Account");
icon.classList.add("fa");
  icon.classList.add("fa-user");
  a.appendChild(icon);
a.setAttribute("href","newUser.html");
a.appendChild(newUsertxt);
li.appendChild(a);
ul.appendChild(li);
  }
  else if(status=="name"){
    let ul=document.querySelector("#menuLi");
    let a=document.createElement("a");
    a.setAttribute("href","progress.html");
   
    let li=document.createElement("li");
    let nametxt=document.createTextNode(user.email);
    a.appendChild(nametxt);
    li.appendChild(a);
    ul.appendChild(li);
    if (uid=="npBWwVtDjRZ0nyI2avunAsF9uMo1"){
       li=document.createElement("li");
     li.innerHTML="<a href=trainingTest/training.html>Create Test</a>"
   
   ul.appendChild(li);
    li=document.createElement("li");
     li.innerHTML="<a href=trainingTest/trainingUser.html>Take a Test</a>"
  
   ul.appendChild(li);
   
    }
else{
   li=document.createElement("li");
      li.innerHTML="<a href=trainingTest/trainingUser.html>Take a Test</a>"
  
   ul.appendChild(li);
}
  }
  else if(status=="out"){
    let ul=document.querySelector("#menuLi");
  
    let li=document.createElement("li");
    let out=document.createTextNode("Sign Out");
    li.setAttribute("onclick","authUser('signOut')");
    li.appendChild(out);
    ul.appendChild(li)
    
  }
  else{
    let ul=document.querySelector("#menuLi");
    let li=document.createElement("li");
    let a=document.createElement("a");
  let icon=document.createElement("i");
  let logintxt=document.createTextNode("Login");
  let newUsertxt=document.createTextNode("Create Account");
  icon.classList.add("fa");
  icon.classList.add("fa-sign-in");
  a.appendChild(icon);
a.setAttribute("href","login.html");
a.appendChild(logintxt);
li.appendChild(a);
ul.appendChild(li);
  }
}




function userInfo(profileInfo,courseInfo){
  
let nameplace=document.querySelector("#BanUsername").firstElementChild;

console.log(window.location.href)

  document.getElementById("loader").style.display="none";
document.getElementById("content").style.display="block";
if (window.location.href==="http://localhost:5500/index.html"||window.location.href==="https://letscoder2-0.firebaseapp.com/index.html"||window.location.href==="https://letscoder2-0.web.app/index.html"||window.location.href==="http://localhost:5500/"||window.location.href==="https://letscoder2-0.firebaseapp.com/"||window.location.href==="https://letscoder2-0.web.app/"){
typeWriter();
}
if (profileInfo.imgUrl){
  let nameNode=`<img src=${profileInfo.imgUrl} onclick="window.location.href='progress.html'" ><a id='linkProfile' href='progress.html'>${profileInfo.userName}</a>`;
nameplace.innerHTML=nameNode;
}
else{

  let nameNode=`<i class="fa fa-user"></i> <a id='linkProfile' href='progress.html'>${profileInfo.userName}</a>`;
nameplace.innerHTML=nameNode;
document.getElementById("linkProfile").style.display="block";
}


  console.log(profileInfo.phoneNumber);
   
  let htmlObj=courseInfo.html;
  let hcount=0;
  let cssObj=courseInfo.css;
  let ccount=0;
  let jsObj=courseInfo.js;
  let jcount=0;
  for (var value in htmlObj){
    console.log(htmlObj[value])
    if (htmlObj[value]==true){
      
  hcount++;
    }
  }
  for (var value in cssObj){
   console.log(cssObj[value])
   if (cssObj[value]==true){
  ccount++;
   }
  }
  for (var value in jsObj){
   console.log(jsObj[value])
   if (jsObj[value]==true){
  jcount++;
   }
  }
if (window.location.href==="http://localhost:5500/progress.html"||window.location.href==="https://letscoder2-0.firebaseapp.com/progress.html"||window.location.href==="https://letscoder2-0.web.app/progress.html"){
  console.log("Its working")
  document.querySelector("#namePG").innerHTML="Name : "+profileInfo.userName;
  document.querySelector("#emailPG").innerHTML="Email Id : "+profileInfo.emailId;
  document.querySelector("#phoneNumberPG").innerHTML="Phone Number : "+profileInfo.phoneNumber;
  document.querySelector("#htmlPG").setAttribute("value",hcount);
  document.querySelector("#cssPG").setAttribute("value",ccount);
  document.querySelector("#jsPG").setAttribute("value",jcount);
  document.querySelector("#allPG").setAttribute("value",jcount+hcount+ccount);
  document.querySelector(".htmlPG").innerHTML=`${hcount} HTML Lessons Completed`;
  document.querySelector(".cssPG").innerHTML=`${jcount}Javascript Lessons Completed`;
  document.querySelector(".jsPG").innerHTML=`${ccount} CSS  Lessons Completed`;
  document.querySelector(".allPG").innerHTML=`Total ${hcount+ccount+jcount} Lessons Completed`;
  if (profileInfo.imgUrl){
    document.getElementById("profileImg").setAttribute("src",profileInfo.imgUrl);
  }
}
else{
 
}
if (window.location.href==="http://localhost:5500/html.html"||window.location.href==="https://letscoder2-0.firebaseapp.com/html.html"||window.location.href==="https://letscoder2-0.web.app/html.html"){
for (var value in htmlObj){
  console.log(htmlObj[value])
  if (htmlObj[value]==true){
    document.querySelector(`.one${value}`).style.background="#f4f4f4";
    let i=document.createElement("i");
    i.setAttribute("style","color:green;font-size:large")
    i.classList.add("fas");
    i.classList.add("fa-check-circle");
    document.querySelector(`.one${value}`).appendChild(i);
   

  }
}
}
else if(window.location.href==="http://localhost:5500/css.html"||window.location.href==="https://letscoder2-0.firebaseapp.com/css.html"||window.location.href==="https://letscoder2-0.web.app/css.html"){
for (var value in cssObj){
 console.log(cssObj[value])
 if (cssObj[value]==true){
  document.querySelector(`.one${value}`).style.background="#f4f4f4";

  let i=document.createElement("i");
  i.setAttribute("style","color:green;font-size:large")
  i.classList.add("fas");
  i.classList.add("fa-check-circle");
  document.querySelector(`.one${value}`).appendChild(i);

 }
}
}
else if(window.location.href==="http://localhost:5500/js.html"||window.location.href==="https://letscoder2-0.firebaseapp.com/js.html"||window.location.href==="https://letscoder2-0.web.app/js.html")
for (var value in jsObj){
 console.log(jsObj[value])
 if (jsObj[value]==true){
  document.querySelector(`.one${value}`).style.background="#f4f4f4";
  let i=document.createElement("i");
  i.setAttribute("style","color:green;font-size:large")
  i.classList.add("fas");
  i.classList.add("fa-check-circle");
  document.querySelector(`.one${value}`).appendChild(i);

 }
}
else{
  console.log("usrInfo function")
}

 console.log(hcount)
 console.log(ccount)
 console.log(jcount)
  
 
}

firebase.auth().onAuthStateChanged((user) => {

    if (user) {
      
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
  userDb(uid);
  window.localStorage.setItem("uid",uid);
  
  change("name",user)
  
   change("out",user);
      // ...
    } else {
      // User is signed out
      // ...
      document.getElementById("loader").style.display="none";
      document.getElementById("content").style.display="block";
      typeWriter();
      change("new");
     change(3);
     
    }
  });
/* to upload user profile image and upload it */
let image=[]
document.getElementById("profileImgUp").addEventListener("change",function(e){
image=e.target.files
var metadata = {
  contentType: 'image/jpeg'
};

// Upload file and metadata to the object 'images/mountains.jpg'
var uploadTask = storageRef.child('Users/'+`profileImg/` +`${uid}` ).put(image[0], metadata);

// Listen for state changes, errors, and completion of the upload.
uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
       
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
      
    }
  }, 
  (error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
        break;
    }
  }, 
  () => {
    // Upload completed successfully, now we can get the download URL
    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
      userProfieImgUpdate(downloadURL);
      console.log('File available at', downloadURL);
    });
  }
);

})
/* user update profile in database */
function userProfieImgUpdate(imgurl){
  if (uid!=null){
    db.collection("users").doc(uid).update(
      {
        "profileInfo.imgUrl":imgurl
       
        
      }
       
        
      )
  }
}
function userDbUpdateProfile(userName,phoneNumber){
  if (uid!=null){
    console.log(uid)
    db.collection("users").doc(uid).update(
      {
        "profileInfo.userName":userName,
        "profileInfo.phoneNumber":phoneNumber,
       
        
      }
    )
  }
}
/* user course update in database */
function userDbUpdateCourses(course,CourseNum,boolean){
  if (uid!=null){
   if (course=="html"){
     var upd=db.collection("users").doc(uid);
    if (CourseNum==1){
      upd.update({"courses.html.h1":boolean});
    }
    else if (CourseNum==2){
      upd.update({"courses.html.h2":boolean});
    }
    else if (CourseNum==3){
      upd.update({"courses.html.h3":boolean});
    }
    else if (CourseNum==4){
      upd.update({"courses.html.h4":boolean});
    }
    else if (CourseNum==5){
      upd.update({"courses.html.h5":boolean});
    }
    else if (CourseNum==6){
      upd.update({"courses.html.h6":boolean});
    }
    else if (CourseNum==7){
      upd.update({"courses.html.h7":boolean});
    }
    else if (CourseNum==8){
      upd.update({"courses.html.h8":boolean});
    }
    else if (CourseNum==9){
      upd.update({"courses.html.h9":boolean});
    }
    else if (CourseNum==10){
      upd.update({"courses.html.h10":boolean});
    }
    else if (CourseNum==11){
      upd.update({"courses.html.h11":boolean});
    }
    else if (CourseNum==12){
      upd.update({"courses.html.h12":boolean});
    }
    else if (CourseNum==13){
      upd.update({"courses.html.h13":boolean});
    }
    else if (CourseNum==14){
      upd.update({"courses.html.h14":boolean});
    }
    else if (CourseNum==15){
      upd.update({"courses.html.h15":boolean});
    }
   }
   else if (course=="css"){
    var upd=db.collection("users").doc(uid);
   if (CourseNum==1){
     upd.update({"courses.css.c1":boolean});
   }
   else if (CourseNum==2){
     upd.update({"courses.css.c2":boolean});
   }
   else if (CourseNum==3){
     upd.update({"courses.css.c3":boolean});
   }
   else if (CourseNum==4){
     upd.update({"courses.css.c4":boolean});
   }
   else if (CourseNum==5){
     upd.update({"courses.css.c5":boolean});
   }
   else if (CourseNum==6){
     upd.update({"courses.css.c6":boolean});
   }
   else if (CourseNum==7){
     upd.update({"courses.css.c7":boolean});
   }
   else if (CourseNum==8){
     upd.update({"courses.css.c8":boolean});
   }
   else if (CourseNum==9){
     upd.update({"courses.css.c9":boolean});
   }
   else if (CourseNum==10){
     upd.update({"courses.css.c10":boolean});
   }
   else if (CourseNum==11){
     upd.update({"courses.css.c11":boolean});
   }
   else if (CourseNum==12){
     upd.update({"courses.css.c12":boolean});
   }
   else if (CourseNum==13){
     upd.update({"courses.css.c13":boolean});
   }
   else if (CourseNum==14){
     upd.update({"courses.css.c14":boolean});
   }
   else if (CourseNum==15){
     upd.update({"courses.css.c15":boolean});
   }
  }
  else if (course=="js"){
    var upd=db.collection("users").doc(uid);
   if (CourseNum==1){
     upd.update({"courses.js.j1":boolean});
   }
   else if (CourseNum==2){
     upd.update({"courses.js.j2":boolean});
   }
   else if (CourseNum==3){
     upd.update({"courses.js.j3":boolean});
   }
   else if (CourseNum==4){
     upd.update({"courses.js.j4":boolean});
   }
   else if (CourseNum==5){
     upd.update({"courses.js.j5":boolean});
   }
   else if (CourseNum==6){
     upd.update({"courses.js.j6":boolean});
   }
   else if (CourseNum==7){
     upd.update({"courses.js.j7":boolean});
   }
   else if (CourseNum==8){
     upd.update({"courses.js.j8":boolean});
   }
   else if (CourseNum==9){
     upd.update({"courses.js.j9":boolean});
   }
   else if (CourseNum==10){
     upd.update({"courses.js.j10":boolean});
   }
   else if (CourseNum==11){
     upd.update({"courses.js.j11":boolean});
   }
   else if (CourseNum==12){
     upd.update({"courses.js.j12":boolean});
   }
   else if (CourseNum==13){
     upd.update({"courses.js.j13":boolean});
   }
   else if (CourseNum==14){
     upd.update({"courses.js.j14":boolean});
   }
   else if (CourseNum==15){
     upd.update({"courses.js.j15":boolean});
   }
  }
   else{
     console.log("fail");
   }
  }
}
/* password reset function */
function passwordReset(){
 var user=firebase.auth().currentUser;
 var email=user.email;
  firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
    // Password reset email sent!
    alert("Your password reset link is sent to your email !! ")
   
    authUser("signOut");
    
    // ..
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}

  /* getting uid */
  
function userDb(UID){
db.collection("users").doc(UID)
    .onSnapshot((doc) => {
        console.log(doc.data().profileInfo);
        var userName=doc.data().profileInfo;
       
     userInfo(doc.data().profileInfo,doc.data().courses);
     
    });

  }



  
/* firebase photo upload */
/* var files=[]
document.getElementById("photo").addEventListener("change",function(e){
 files=e.target.files;
 console.log(e)
 
})
document.getElementById("up").addEventListener("click", function() {
  //checks if files are selected
  if (files.length != 0) {

  //Loops through all the selected files
  for (let i = 0; i < files.length; i++) {

    //create a storage reference
    var storage = firebase.storage().ref("astro");

    //upload file
    var upload = storage.put(files[i]);

    //update progress bar
    upload.on(
      "state_changed",
      function progress(snapshot) {
        var percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(percentage)
      },

      function error() {
        alert("error uploading file");
      },

      function complete() {
       console.log("completed")
      }
    );
  }
  } else {
  alert("No file chosen");
  }
  });

   
 */


 

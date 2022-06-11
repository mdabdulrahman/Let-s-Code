if (uid!=null){
    if (uid=="npBWwVtDjRZ0nyI2avunAsF9uMo1"){
        console.log("Hi ,Admin")
    }
    }
    else{
        alert("Please Login !!")
        window.location.href="../login.html";
    }
     let quesList={questions:{},timer:null};
     let  qusCountInp;
     let Optionlist=[];
     let imgExist=[];
     function Option(i,count,countOption,cc,opt){
        var p=document.createElement("p");
        if (opt.checked){
          
            p.innerHTML=`<input type='file' name='qus${i}img' id='qus${i}img'>`
            ques.appendChild(p);
            imgExist.push(1)
         }
         else{
             imgExist.push(0);
         }
         document.getElementById(`con${i}`).style.display="none";
        opt.disabled=true;
        var p=document.createElement("p");
        p.innerHTML=`<p>Enter the Option For Question ${i}</p>`
        ques.appendChild(p);
        for (let j=1;j<parseInt(count)+1;j++){
            var p=document.createElement("p");
            p.innerHTML=`<label for='ques${i}Option${j}'>Enter the Option ${j}</label><input type='text' id='ques${i}Option${j}' name='ques${i}Option${j}'>`
            ques.appendChild(p);
            
     }
     let ans=document.createElement("p");
    ans.innerHTML=`<label for='ans${i}'> Answer option for Question ${i} :</label><input type='number' id='ans${i}' name='ans${i}'>`
    ques.appendChild(ans)
    countOption.disabled=true;
    Optionlist.push(count)
    let g=i+1
    if (parseInt(cc)==i){
        console.log("successfull")
        var p=document.createElement("p");
        p.innerHTML=`<button id='lastBtn'>Upload</button>`
        ques.appendChild(p);
        p.addEventListener("click",function(e){
           
          createObj();
         
        newDbTrainings();
          
        })
      
    
    }
    else{
        quesGenerate(cc,g)
    }
    
    }
     function quesGenerate(qus,i){
      
         
        console.log(qus)
        let c=parseInt(qus)+1
      
           console.log(i)
           var p=document.createElement("p");
    p.innerHTML=`<label for='ques${i}'>Enter Question ${i} : </label> <input type='text' name='ques${i}' id='ques${i}'><br><label for='ques${i}OptionCount'>Enter How Many options : </label><input type='number' name='ques${i}OptionCount' id='ques${i}OptionCount'><br><label for='qus${i}imgO'>Do You want a Image?</label><input type='checkbox' name='qus${i}imgO' id='qus${i}imgO'><button id='con${i}'>Confirm</button>`
      ques.appendChild(p)
    let count=document.getElementById(`ques${i}OptionCount`)
    let imgOption=document.getElementById(`qus${i}imgO`);
    console.log(imgOption)
    
    document.getElementById(`con${i}`).addEventListener("click",function(e){
        Option(i,count.value,count,qus,imgOption)
    })
    
    }
    
    function titleSave(){
       if (document.getElementById("titleInp").value!=''){
           quesList.title=document.getElementById("titleInp").value;
           qusCountInp=document.getElementById("qusCountInp").value;
           console.log(quesList);
           var p=document.createElement("p");
           p.innerHTML=`<label for='timer'>Enter the Timer : </label> <input type='number' name='timer' id='timer'>`
              ques.appendChild(p)
           quesGenerate(qusCountInp,1);
       }
    }
    function newSession(){
        
       
        let ques=document.querySelector("#ques")
        let quesCreate=document.querySelector("#quesCreate").lastElementChild;
        quesCreate.innerHTML="<label for='titleInp'>Enter the Title : </label><input type='text' name='titleInp' id='titleInp'><br><label for='qusCountInp'>Enter the Number of Questions: </label><input type='number' name='qusCountInp' id='qusCountInp'><br>";
        document.getElementById("title").style.display='block';
    }
    
    function newDbTrainings(){
    db.collection("training").doc(quesList.title).set(quesList).then(()=>{alert("Sucessfully Uploded the Question")})
    }
    
     function createObj(){
        for (let v=1;v<parseInt(qusCountInp)+1;v++){
           
            if (imgExist[v-1]==1){
                // Create the file metadata
                var files=[];
                files=document.getElementById(`qus${v}img`).files
    var metadata = {
        contentType: 'image/jpeg'
      };
      
      // Upload file and metadata to the object 'images/mountains.jpg'
      var uploadTask = storageRef.child('trainings/'+`'${quesList.title}/'` +`'ques${v}image'` ).put(files[0], metadata);
      
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
            quesList.questions[`ques${v}`]={
                ques:document.getElementById(`ques${v}`).value,
                ans:parseInt(document.getElementById(`ans${v}`).value),
            countOption:parseInt(Optionlist[v-1]),
            opts:{},
            imgExt:imgExist[v-1],
            urlImg:downloadURL
            }
            for (let z=1;z<parseInt(Optionlist[v-1])+1;z++){
                
                quesList.questions[`ques${v}`].opts[z]=document.getElementById(`ques${v}Option${z}`).value;
             }
            console.log('File available at', downloadURL);
          });
        }
      );
      
            }
            else{
                quesList.questions[`ques${v}`]={
                    ques:document.getElementById(`ques${v}`).value,
                    ans:parseInt(document.getElementById(`ans${v}`).value),
                countOption:parseInt(Optionlist[v-1]),
                opts:{},
                imgExt:imgExist[v-1]
                }
                for (let z=1;z<parseInt(Optionlist[v-1])+1;z++){
                
                    quesList.questions[`ques${v}`].opts[z]=document.getElementById(`ques${v}Option${z}`).value;
                 }
            }
           
         
              
        }
        quesList.timer=document.getElementById(`timer`).value;
        console.log(quesList);
        console.log("herlli")
      
     
    }
    
    /* first lets test it  */
    // Create the file metadata
    
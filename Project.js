function imageHandler(e) {
    console.log(e,"ee....")
     const reader = new FileReader();
      reader.onload = () =>{
       if(reader.readyState === 2){
      console.log(document.getElementById("input1"),"aya form")
         console.log(reader,"reader result :",reader.result)
       }
     }
    
    //  console.log(FILES)
 
  console.log(   reader.readAsDataURL(e.target.files[0]))

    
     
      
   }
   

   const upload=(files)=>{const file = files[0];
    console.log(file.name,"filename....")

    
   
  
     }
  
  
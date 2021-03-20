// function imageHandler(e) {
//     console.log(e,"ee....")
//      const reader = new FileReader();
//       reader.onload = () =>{
//        if(reader.readyState === 2){
//       console.log(document.getElementById("input1"),"aya form")
//          console.log(reader,"reader result :",reader.result)
//        }
//      }
    
//     //  console.log(FILES)
 
//   console.log(   reader.readAsDataURL(e.target.files[0]))

    
     
      
//    }
   

//    const upload=(files)=>{const file = files[0];
//     console.log(file.name,"filename....")

    
   
  
//      }
  
  

window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');
            img.onload = () => {
                URL.revokeObjectURL(img.src);  // no longer needed, free memory
            }
  
            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
            console.log(img.src,"src")
            console.log(document.getElementById("form"),"chala  qnahi")
            var t=  document.getElementById("form").style.backgroundImage=`url(${img.src})`
        
            // console.log(document.getElementById("form").style,"chala  qnahi")
        }
    });
  });
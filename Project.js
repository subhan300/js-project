// function imageHandler(e) {
//     console.log(e,"ee....")
//      const reader = new FileReader();
//       reader.onload = () =>{
//        if(reader.readyState === 2){
//       console.log(document.getElementById("input1"),"aya form")
//          console.log(reader,"reader result :",reader.result)
//        }
//      }
//      console.log( reader.readAsDataURL(e.target.files[0]))
//     }









// // //    upload separate 

// // function upload(files){const file = files[0];
// //     console.log(file,"file hai ya nahi")
// //     console.log(file.name,"filename....") }
  
   

  
  

// window.addEventListener('load', function() {
//     document.querySelector('input[type="file"]').addEventListener('change', function() {
//         if (this.files && this.files[0]) {
//             // console.log(this.files)
//             ()=>{console.log("chakna")
//                 $('input[type=file]').change(function () {
//                     var filePath=$('#fileUpload').val(); 
                   
//                 });
//            }
//             var img = document.querySelector('img');
//             img.onload = () => {
//                 console.log(img,"img")
//                 URL.revokeObjectURL(img.src);  // no longer needed, free memory
//                }

  
//             img.src = URL.createObjectURL(this.files[0]); // set src to blob url
//             // console.log(img.src.revokeObjectURL)
//             console.log(img.src,"src")
//             console.log(document.getElementById("form"),"chala  qnahi")
            
//             // document.getElementById("form").style.backgroundImage=`url(${img.src})`
               
//             document.getElementById("img1").src=`${img.src}`
//             console.log(   document.getElementById("img1").src,"src")

//             const reader = (file) => {
//                 return new Promise((resolve, reject) => {
//                     const fileReader = new FileReader();
//                     fileReader.onload = () => resolve(fileReader.result);
//                     fileReader.readAsDataURL(file);
//                     console.log(fileReader.readAsDataURL(file),"yeh 1 firs wala")
//                 })
//             }
//             const readFile = (file) => {
//                 reader(file).then(result => console.log(result,"resukt bta"));
//             }
//             reader(img.src)

        
//             // console.log(document.getElementById("form").style,"chala  qnahi")
//         }
//     });
//   });



// // var imageFile=document.getElementById("imageFile")
// // console.log(imageFile,"imagefile")

// // var form=document.getElementsByClassName("form")
// // console.log(form,"form")


// // imageFile.addEventListener("change",handleImage,false)
// // function handleImage(e){
// //     console.log(e,"e")
// // }

var draglile = document.querySelector('.draginfo')
var dropara = document.querySelector('.dropara')
var droph4 = document.querySelector('h4')
var button = document.querySelector('button')
var input = document.querySelector('input')
let file;
dropara.addEventListener('dragover', (event)=>{
    event.preventDefault();
    dropara.classList.add("active")
    droph4.textContent='relsase to upload file'
    // console.log("drop")
   })

button.onclick =()=>{
input.click();
}
input.addEventListener('change', function(){
    file = this.files[0]
    showfile();
})

   dropara.addEventListener('dragleave', ()=>{
    dropara.classList.remove("active")
    droph4.textContent='Drag Your File'
  
    })
    
    dropara.addEventListener('drop', (event)=>{
        event.preventDefault();
        file = event.dataTransfer.files[0];
        showfile();
    })
    function showfile(){
        let fileType  = file.type;
        let validExtenstions = ['image/jpeg', 'image/jpg', 'image/png',];
        if(validExtenstions.includes(fileType)){
            let fileReader = new FileReader();
            fileReader.onload = ()=>{
                let fileURL = fileReader.result;
                let imgTag = `<img src="${fileURL}" alt="">`
                dropara.innerHTML = imgTag;
            }
            fileReader.readAsDataURL(file)
        }else{ 
            alert="oops! your file no saprot"
            dropara.classList.remove("active")
        }
    }
   
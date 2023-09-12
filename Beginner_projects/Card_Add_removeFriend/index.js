var req= document.querySelector("h2");
var btn= document.querySelector("button");
var flag=0;
btn.addEventListener("click",function(){
    if (flag===0){
       req.innerHTML="Friend";
       req.style.color="Green";
       flag=1;
       
    } 
    else{ 
       req.innerHTML="Stranger";
       req.style.color="red";
       flag=0;
    }
})

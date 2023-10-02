let data =[{img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"},
{img:"https://images.unsplash.com/photo-1521146764736-56c929d59c83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"},
{img:"https://images.unsplash.com/photo-1516239482977-b550ba7253f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1388&q=80"},
{img:"https://images.unsplash.com/photo-1493106819501-66d381c466f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"}];

let clutter = "";
let grow = 0;
data.forEach(function(elem, index){
    clutter += ` <div id="story">
    <img src="${elem.img}" id="${index}" alt="">
</div>`;
});

document.querySelector(".stories").innerHTML= clutter;

document.querySelector(".stories").addEventListener("click",(dets) => {
                                                                                       // console.log(data[dets.target.id]);
    document.querySelector('.fullScr').style.display = "block";

    document.querySelector('.fullScr').style.backgroundImage = `url(${data[dets.target.id].img})`;

    setTimeout(function(){
       document.querySelector('.fullScr').style.display = "none";
    },3000);

    if(grow<100){
    setInterval(() => {
        document.querySelector(".grow").style.width = `${grow}px`;
        grow++;
    }, 11);
   }else{
    grow = 0;
   }
});
//  var arr=[1,-2,-3,2,-65,-5676,,6,-34,-4,3,34,-43,4,-5,656,345];

// // var arr2 =
// arr.forEach(function(val,index) {
//     if(val<0){
//         arr.splice(index,1);
//     }
    
// });
// // var count=0;
// //  for(let i=0;i<arr.length;i++){
// //         if(arr[i]<0){
// //             count++;
// //         }

// //    }

// //    for(var j=0;j<count;j++){
    // //     for(var i=0;i<arr.length;i++){
    // //      if(arr[i]<0){
    // //         arr.splice(i,1);
// //         break;
// //     }
// //    }
// // }

var details=[
    {name:"Harsh",status:"Strangers",img:"https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"},
    {name:"Harshit",status:"Strangers",img:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"},
    {name:"Sonam",status:"Strangers",img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80"}
];

var card="";
details.forEach(function(val,index){
      
      card+=`<div class="card">
             <div class="image"><img src="${val.img}" alt=""></div>
             <h1>${val.name}</h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, culpa?</p>
             <h2>${val.status}</h2>
             <button id="${index}">Add friend</button>
             </div>`

})

document.querySelector("main").innerHTML=card;

document.querySelector("main");
main.addEventL































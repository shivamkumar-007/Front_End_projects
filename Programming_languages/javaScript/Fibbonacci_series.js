let pre=0;
let cur=1;
const fibboLength=prompt("Enter how many fibbo number we want ?");
console.log(pre);
console.log(cur);
calFibbo(fibboLength);

function calFibbo(fibboLength){
    
    for(let i=2;i<fibboLength;i++){
      let next=pre+cur;
      console.log(next);
      pre=cur;
      cur=next;
    }
}
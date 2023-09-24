
const countValue= document.querySelector('.count');

const increment= () => {
    let value= parseInt(countValue.innerHTML);
    value +=1;
    countValue.innerHTML = value;

};

function decrement(){
    let value = parseInt(countValue.innerHTML);
    value -=1;
    countValue.innerHTML = value;
}

function reset(){
     countValue.textContent ='0';
}
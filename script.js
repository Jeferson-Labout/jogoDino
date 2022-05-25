const dino = document.querySelector('.dino');

function handleKeyup(event){
    if(event.keyCode === 32){
       
    };
}

function jump(){
    let position = 0;
    let upInterval = setInterval(()=>{
    position += 20;
    dino.style.bottom = position + 'px'; 

    },20);
}


document.addEventListener('keyup', handleKeyup)
const text = document.querySelector('.welcome');
const strText = text.textContent;
text.textContent = "";

//Split each letter in .welcome into an array.
const splitText = strText.split("");

//Loop through splitText array.
for(let i=0; i < splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>"
}

let char = 0;
let timer = setInterval(onTick, 50);

//Add class for each span.
function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if(char === splitText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}
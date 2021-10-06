const btn = document.querySelector("#btn");
const colorName = document.querySelector("#heading");

function changeColor(){
    const background = document.querySelector('body');
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    background.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    colorName.innerText = `rgb(${r}, ${g}, ${b})`;
    if((r<115 && g<115)|| (r<115 && b<115)||(g<115 && b<115)){
        colorName.style.color = 'rgb(255,255,255)';
    }
    else{
        colorName.style.color = 'rgb(0,0,0)';
    }
}
btn.addEventListener('click', changeColor);
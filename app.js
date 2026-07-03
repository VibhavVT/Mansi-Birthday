const screens=document.querySelectorAll('.screen');
let current=0;

function nextScreen(){
screens[current].classList.remove('active');
current++;

if(current<screens.length){
screens[current].classList.add('active');
}
}

function shake(btn){
btn.classList.add('shake');

setTimeout(()=>{
btn.classList.remove('shake');
},400);
}

function openLetter(){
document.querySelector('.envelope').classList.toggle('open');
}

const hearts=document.querySelector('.hearts');

function createHeart(){

const h=document.createElement('div');

h.classList.add('heart');
h.innerHTML='❤';

h.style.left=Math.random()*100+'vw';
h.style.fontSize=(Math.random()*14+12)+'px';
h.style.animationDuration=(Math.random()*6+8)+'s';

hearts.appendChild(h);

setTimeout(()=>{
h.remove();
},14000);
}

setInterval(createHeart,700);

document.body.addEventListener('click',()=>{
document.getElementById('music').play().catch(()=>{});
});

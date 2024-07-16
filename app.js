 
let btn=document.querySelector("button");
function changecolor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb:${red},${green},${blue}`;
    return color;
}
btn.addEventListener("click",function(){
    let h1=document.querySelector("h1");
    let randomcolor=changecolor();
    h1.innerText=randomcolor;
     let div=document.querySelector("div");
     div.style.backgroundColor=randomcolor;
})
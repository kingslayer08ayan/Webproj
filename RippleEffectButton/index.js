const btnEl=document.querySelector(".btn"); //return element with class
btnEl.addEventListener("mouseover",(event)=>{
    //.pageX and  .pageY gives coordinates of mouseover
    const x=(event.pageX-btnEl.offsetLeft);
    const y=(event.pageY-btnEl.offsetTop);
    btnEl.style.setProperty("--xPos", x + "px");
    btnEl.style.setProperty("--yPos", y + "px");
});
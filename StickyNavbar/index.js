const NavbarEl=document.querySelector(".navbar");
const BottomContainerEl=document.querySelector(".bottom-container");

window.addEventListener("scroll",()=>{
    if(window.scrollY>BottomContainerEl.offsetTop - NavbarEl.offsetHeight- 50)
    {
        NavbarEl.classList.add("active");
    }
    else
    {
        NavbarEl.classList.remove("active");
    }    
});
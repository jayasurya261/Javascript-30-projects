let scrollC = document.querySelector(".gallery");
let backBtn = document.getElementById("back-btn");
let nextBtn  = document.getElementById("next-btn");

scrollC.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    scrollC.scrollLeft+=evt.deltaY;
});

nextBtn.addEventListener("click",()=>{
    scrollC.style.scrollBehavior = "smooth";
    scrollC.scrollLeft +=900;
});
backBtn.addEventListener("click",()=>{
    scrollC.style.scrollBehavior = "smooth";
    scrollC.scrollLeft -=900;
});
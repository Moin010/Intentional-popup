const button = document.querySelector("button");
const popupBG = document.querySelector(".popup-wrapper");
const popup = document.querySelector(".popup");
const cross = document.querySelector(".cross-btn");


button.addEventListener("click", ()=>{
    popupBG.style.display = "block";
    popupBG.style.cursor = "pointer";
    popup.style.cursor = "default";
})

cross.addEventListener("click", ()=>{
    popupBG.style.display = "none";
})

popup.addEventListener("click", ()=>{
    
})

popupBG.addEventListener("click", (event)=>{
    if(!event.target.classList.contains("popup")){
        popupBG.style.display = "none";
    }
})





const btnEl = document.querySelector("button");
const trailerContainerEl = document.querySelector(".trailer-container");
const closeEl = document.querySelector("i");
const videoEl = document.querySelector("video")
btnEl.addEventListener("click", ()=>{
    trailerContainerEl.classList.remove("active");
});

closeEl.addEventListener("click", ()=>{
    trailerContainerEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;
});

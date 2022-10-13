const btnEl = document.querySelector(".btn");
const popupEl = document.querySelector(".popup-container")
const containerEl = document.querySelector(".container")
const closeEl = document.querySelector(".close-icon");

btnEl.addEventListener("click", ()=>{
    popupEl.classList.remove("active");
    containerEl.classList.add("active");
});

closeEl.addEventListener("click", ()=>{
    popupEl.classList.add("active");
    containerEl.classList.remove("active");
})
let scrollContainer = document.querySelector(".cardContainer");
let backbtn = document.querySelector(".backbtn");
let nextbtn = document.querySelector(".nextbtn");

scrollContainer.addEventListener("wheel", (evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
})

nextbtn.addEventListener("click", ()=>{
    scrollContainer.scrollLeft += 1300;
});

backbtn.addEventListener("click", ()=>{
    scrollContainer.scrollLeft -= 1300;
});
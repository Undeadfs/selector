let nextBtn = document.querySelector(".next-btn");
let prevBtn = document.querySelector(".prev-btn");
let slides = document.querySelectorAll(".slide");
let slidePointers = document.querySelectorAll(".slide-pointer");
let numOfSlides = slides.length;
let slideNum = 0;

nextBtn.addEventListener("click",()=>{
    slides.forEach((item) => {
        item.classList.remove("active")
    });
    slidePointers.forEach((item) => {
        item.classList.remove("active")
    });
    slideNum++;
    if(slideNum>(numOfSlides-1)){
        slideNum=0;
    }
    slides[slideNum].classList.add("active");
    slidePointers[slideNum].classList.add("active");
});

prevBtn.addEventListener("click",()=>{
    slides.forEach((item) => {
        item.classList.remove("active")
    });
    slidePointers.forEach((item) => {
        item.classList.remove("active")
    });
    slideNum--;
    if(slideNum<0){
        slideNum=numOfSlides-1;
    }
    slides[slideNum].classList.add("active");
    slidePointers[slideNum].classList.add("active");
})
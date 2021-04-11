let cardSlides = document.querySelectorAll('.slide-content .card-slider');
let cardSlidesImg = document.querySelector('.slide-content .card-slider img'),
    next = document.querySelector('.second-slide .right'),
    prev = document.querySelector('.second-slide .left'),
    slideContent = document.querySelector('.slide-content'),
    index = 1;
const firstClone = cardSlides[0].cloneNode(true);
const lastClone = cardSlides[cardSlides.length - 1].cloneNode(true);

firstClone.id = `first-clone`;
lastClone.id = `last-clone`;    

//slideContent.append(firstClone);
//slideContent.prepend(lastClone);

//const slideWidth = cardSlides[index].clientWidth;

//  slide content dynamique width
function slideContentWidth(){
    slideContent.style.width = `${100 * (cardSlides.length)}%`;
}
window.addEventListener('DOMContentLoaded', slideContentWidth());

//  slide function

function autoSlide(){
    slideContent.style.transform = `translateX(-${(100 * index)/(cardSlides.length)}%)`;
    index++;
    //slideContent.prepend(lastClone);
    if(index >= 4){
        //slideContent.style.transition = `none`;
        //slideContent.style.transform = `translateX(-${(100 * index)/(cardSlides.length)}%)`;
        //slideContent.prepend(firstClone);
       //slideContent.style.transition = `none`;
       //slideContent.prepend(lastClone);
        //.style.width = `${100 * (cardSlides.length+1)}%`;
        //slideContent.style.transform = `translateX(${0}%)`;
        //slideContent.prepend(lastClone);
        index = 0;
        //slideContent.style.transition = `none`;
       // slideContent.style.width = `${100 * (cardSlides.length + 1)}%`;
        //slideContent.style.width = `${100 * (cardSlides.length)}%`;
        //slideContent.style.width = `${100 * (cardSlides.length)}%`;
        //slideContent.style.transform = `translateX(${0}%)`;
        
        
        //slideContent.style.transform = `translateX(${index})`;
        
        //slideContent.style.transform = `translateX(-${(100 * index)}%)`;
       // slideContent.style.transition = `.7s`;
    }else if(index >= 0){
        slideContent.style.transition = `.7s`;
    }
}
// add interval
let startSliding = setInterval(autoSlide,2000);
startSliding();

// check if slide in the end 

/// slide 3 /////////////////////////////////////////////:

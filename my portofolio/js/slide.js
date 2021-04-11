////////    CREATE SLIDE SHOW

let slideImgs = ["s2.jpg","s2.jpg","s4.jpg","s5.jpg","s6.jpg","s7.jpg","s8.jpg","s9.jpg","s10.jpg","s11.jpg",],

    slideDescription = ["Wonderful Picture in mountains hugs",
    "Look at the beauty of Tanga City in the beach",
    "On the road to climb the Mountain",
    "It's a nice turtle",
    "Look at the beauty of the tradional Maker hand",
    "The speech of Aid-Adha...what is more beautiful",
    "My friend has Climbed the mountain...Congratulations",
    "Me and My friend after we go to the top",
    "Let's go to Raid...look's wonderful",
    "it's my time to Enjoy the view"],

    slideImg = document.querySelector('.img-slide img'),
    slideheding = document.querySelector('.img-slide h4'),
    slideSpan = document.querySelector('.img-slide span'),
    nextSlide = document.querySelector('i.fa-chevron-right'),
    prevSlide = document.querySelector('i.fa-chevron-left');

function crateSlideShow(){
    
    let i = 0;
    console.log(i);
    slideImg.src = `../images/${slideImgs[i]}`;
    slideheding.textContent = `${slideDescription[i]}`;
    slideSpan.textContent = `pic ${i+1} :`

    /////////////////   next and previeus sliding
    nextSlide.addEventListener('click',function(){
    i++;
    slideImg.src = `../images/${slideImgs[i]}`;
    slideheding.textContent = `${slideDescription[i]}`;
    slideSpan.textContent = `pic ${i+1} :`
     if(i>=slideImgs.length - 1){
            i = -1;
        }
    });

    /////////////////////////////////////////////////////:
    prevSlide.addEventListener('click',function(){

        i--;
        if(i<= -1){
            i = slideImgs.length-1;
        } 
        
        slideImg.src = `../images/${slideImgs[i]}`;
        slideheding.textContent = `${slideDescription[i]}`;  
        slideSpan.textContent = `pic ${i+1} :`

        });
}
crateSlideShow();
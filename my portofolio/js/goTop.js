//////////      ADD SCROLL TOP BUTTON
let topBtn = document.querySelector('.up');


window.addEventListener('scroll',() => {
    if(window.pageYOffset > 400){
        topBtn.style.display = 'block';
    }else{
        topBtn.style.display = 'none';
    }
});

topBtn.addEventListener('click', function(){
    window.scrollTo({top:00 , left:00 , behavior:"smooth"});
});


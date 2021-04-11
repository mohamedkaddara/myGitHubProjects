let footer = document.querySelector('footer'),
    downBtn = document.querySelector('.scrollDown'),
    theBottom = footer.clientWidth;

downBtn.addEventListener('click', function(){
    window.scrollTo({top:10000 , left:00 , behavior:"smooth"});
});
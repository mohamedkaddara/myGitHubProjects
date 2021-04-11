let berger = document.querySelector('.nav-in-s-screen i.fas.fa-align-justify');
let nav = document.querySelector('.nav nav');
let logo = document.querySelector('.nav .logo');
let hiddenList = document.querySelector('.hidden-list');

function showBerger(){
    if(window.innerWidth < 750){
    berger.classList.add('nav-toogle');
    nav.style.display = 'none';
    }
}
showBerger();

function showHiddenList(){
    berger.addEventListener('click',function(){
        hiddenList.classList.toggle('nav-toogle');
        this.style.color = '#fff';
    })
}
showHiddenList();
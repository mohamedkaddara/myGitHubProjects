//////////////////////////////////////////////////////////////////////////////////////////:

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

///////////////     MY CARDS ///////////////////////////////////

let myInfo = [
    {
    images: "../images/fe.png",
    heading: "FrontEnd Web Developer",
    paragraphes: "i conseder my self a frontEnf Web developper, because it's my real job...,and a great experince",
    },

    {
        images: "../images/js.jpg",
        heading: "JavaScript Developer",
        paragraphes: "javascript is my favorite language and i'm a profesional in a lot of JS Technologie, and library's as JQuery And REACT and frameworks as ANGULAR...",
    },

    {
        images: "../images/desktop.png",
        heading: "DeskTop Applications Developer",
        paragraphes: "A real Skill that i've learned in whit time, deskTop APPs whit languages like JAVA & C++ & VisualBasic ....",
    },
    {
        images: "../images/at.jpg",
        heading: "WounderFul Atlhet",
        paragraphes: "A lot of you my friend did not know me my personel life. i'm a former runner and a great swimmer and gymnastiques and workout player...",
    },
]


let reviewImg = document.querySelector('.review .my-card_infos img'),
    cardHeading = document.querySelector('.review .my-card_infos h4'),
    cardParagraph = document.querySelector('.review .my-card_infos p'),
    goRight = document.querySelector('.review .my-card_infos .fas.fa-angle-right'),
    goLeft = document.querySelector('.review .my-card_infos i.fas.fa-angle-left'),
    supriseBtn = document.querySelector('.review .my-card_infos button');

///////////////////////////////////

let current = 0;

function showMyInfo(info){
    let item = myInfo[info];
    reviewImg.src = item.images;
    cardHeading.textContent = item.heading;
    cardParagraph.textContent = item.paragraphes;
}

window.addEventListener('DOMContentLoaded',function(){
    showMyInfo(current);
});

goRight.addEventListener('click',function(){
    showMyInfo(current++);
    if(current>=myInfo.length){
        current = 0;
    }
});

goLeft.addEventListener('click',function(){
    showMyInfo(current--);
    if(current<0){
        current = myInfo.length-1;
    }
});

supriseBtn.addEventListener('click',function(){
    let x = Math.random(),
    supriseNum = Math.floor(x*3);
    showMyInfo(supriseNum);

});  

////////////////////////////    body margin

//let slideImages = ["../images/","../images/","../images/","../images/","../images/"];


///////     END SCROLL TOP

/////////   writer

let introText = `I'M MOHAMED KADDARA & MOHAMED HBATA`,
    sT = `WE ARE WEB DEVELOPPERS`,
    i = 0,
    c = 0,
    pageTitle = document.querySelector('.btn-service .s2 h3'),
    spanE = document.querySelector('.btn-service .s2 h3 span')
    br = document.createElement('br');
    span = document.createElement('span');

function writer(){
 var use = setInterval(function(){
     pageTitle.innerHTML += introText[i];
     i++;
     if(i >= introText.length){
         clearInterval(use);
         pageTitle.appendChild(br);
         pageTitle.appendChild(span);
        var sW = setInterval(function(){
            span.innerHTML += sT[c];
            c++;
            if(c >= sT.length){
                clearInterval(sW);
            }
        },60)
     }
 },60)   
}
// paragraph
let pT = `Welcome every body to our Portofolio me and my friend mohamed hbata, we arre web developpers from Moroccon, we love our job, and we will be happy to do anyThing to`,
    p = document.querySelector('.btn-service .s2 p'),
    cp = 0;

function writerP(){
 let wp = setInterval(function(){

    p.innerHTML += pT[cp];
    cp++;
    if(cp >= pT.length){
        clearInterval(wp);
    }

 },25)   
}
writer();
setTimeout(writerP,4000);




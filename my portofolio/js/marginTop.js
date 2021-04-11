let nav1 = document.querySelector('.nav'),
    btnServices = document.querySelector('.this');


function marginBody(){ 
    btnServices.style.marginTop = `${nav1.offsetHeight}px`;
}
marginBody();

let intro = document.querySelector('.this'),
    nav1 = document.querySelector('.nav');
   
function marginBody(){
    intro.style.marginTop = `${nav1.offsetHeight + 100}px`;
}

marginBody();

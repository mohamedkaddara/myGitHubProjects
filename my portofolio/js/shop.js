let announce = document.querySelector('.announce');
let cartAn = document.querySelectorAll('.cart-an'),
    wWidth = 0,
    cW = window.innerWidth;
    ///////////////////////////////////////////////////
function move(){
    let tra = announce.style.transform = `translateX(${wWidth}px)`;
    wWidth = wWidth - cW;
    if(wWidth < -(cW * cartAn.length-1)){
        wWidth = 0;
    }
}

var moveInfo = setInterval(move,2000);
window.onload = function(){
    announce.style.transform = `translateX(${0}px)`;
    moveInfo;
}
/*announce.addEventListener('mouseenter', function(){
    clearInterval(moveInfo)
})
announce.addEventListener('mouseleave', function(){
    console.log('i leaved');
    setInterval(move,2000)
})
*/

let imgCart = document.querySelectorAll('.cart-an img');
    
function imgWidth(){

    imgCart.forEach(cart => {
            cart.setAttribute(`style`, `width:${window.innerWidth}px`);
    })

}
imgWidth();
/////////////////////////////////////////////////////////////////////

let category = document.querySelectorAll('.category h4');
category.forEach(ctg => {

    ctg.addEventListener('click', function(){

        category.forEach(ctg => {
            let removeAllActiveClasses = ctg.classList.remove('active');
            this.classList.add('active');
        })

})
});
/////////////////////////   category btns filter function

const infoCardObj = [
 {
     img: '../images/sportpro/pro1.jpg',
     h4: 'TRX GO Suspension Training',
     price: '169.95$',
     buy: 'buy Now',
     categories: 'sport',
 },
 {
    img: '../images/sportpro/pro2.jpg',
    h4: 'TheraBand Resistance Bands',
    price: '13.65$',
    buy: 'buy Now',
    categories: 'sport',
},
{
    img: '../images/sportpro/pro3.jpg',
    h4: 'Crossrope Get Lean Set',
    price: '99. 00$',
    buy: 'buy Now',
    categories: 'sport',
},
{
    img: '../images/sportpro/pro4.jpg',
    h4: 'Everlast Flex Slam Ball, 20 LBS',
    price: '39.95$',
    buy: 'buy Now',
    categories: 'sport',
},
{
    img: '../images/sportpro/pro5.jpg',
    h4: 'Reebok Nano x WIT Training Shoes',
    price: '150$',
    buy: 'buy Now',
    categories: 'sport',
},
{
    img: '../images/sportpro/pro6.png',
    h4: 'Qwesen Jump Rope jump rope workouts',
    price: '12$',
    buy: 'buy Now',
    categories: 'sport',
},
{
    img: '../images/accespro/acces2.jpg',
    h4: 'Classic Bracelet whit scale',
    price: '9.00$',
    buy: 'buy Now',
    categories: 'acces',
}, 
{
    img: '../images/accespro/acces1.jpg',
    h4: `Simple Bracelet for men's`,
    price: '4.20$',
    buy: 'buy Now',
    categories: 'acces',
},
{
    img: '../images/accespro/acces3.jpg',
    h4: `Black Bracelet for black color lovers`,
    price: '5.00$',
    buy: 'buy Now',
    categories: 'acces',
},
{
    img: '../images/accespro/acces4.jpg',
    h4: `Simple Bracelet 2020`,
    price: '3.99$',
    buy: 'buy Now',
    categories: 'acces',
},
{
    img: '../images/accespro/acces5.jpg',
    h4: `Classic Bracelet in black`,
    price: '7.20$',
    buy: 'buy Now',
    categories: 'acces',
},
{
    img: '../images/accespro/acces6.jpg',
    h4: `Scarfs for men's in winter season`,
    price: '15.49$',
    buy: 'buy Now',
    categories: 'acces',
},
{
    img: '../images/accespro/acces7.jpg',
    h4: `Scarfs for all seasons`,
    price: '9.49$',
    buy: 'buy Now',
    categories: 'acces',
},
{
    img: '../images/accespro/acces8.jpg',
    h4: `Sharlok holmes Hats`,
    price: '10.00$',
    buy: 'buy Now',
    categories: 'acces',
},
{
    img: '../images/accespro/acces9.jpg',
    h4: `Hats for cold and winter `,
    price: '18.99$',
    buy: 'buy Now',
    categories: 'acces',
},
{
    img: '../images/accespro/acces10.jpg',
    h4: `Necklaces for men's look very nice`,
    price: '20.99$',
    buy: 'buy Now',
    categories: 'acces',
},
{
    img: '../images/accespro/acces11.jpg',
    h4: `Classic Necklaces for necklaces lovers`,
    price: '21.99$',
    buy: 'buy Now',
    categories: 'acces',
},
{
    img: '../images/accespro/acces12.jpg',
    h4: `Belts for all men's`,
    price: '11.99$',
    buy: 'buy Now',
    categories: 'acces',
},
{
    img: '../images/accespro/acces13.jpg',
    h4: `Classic Belts for all men's`,
    price: '15.99$',
    buy: 'buy Now',
    categories: 'acces',
},
{
    img: '../images/accespro/acces14.jpg',
    h4: `Classic Shoes for men's`,
    price: '28.90$',
    buy: 'buy Now',
    categories: 'acces',
},
{
    img: '../images/accespro/acces15.jpg',
    h4: `very nice Watches to wear anyTimes`,
    price: '30.10$',
    buy: 'buy Now',
    categories: 'acces',
},
{
    img: '../images/accespro/acces16.jpg',
    h4: `Classic Watches for men's `,
    price: '24.20$',
    buy: 'buy Now',
    categories: 'acces',
},
//////////////////
{
    img: '../images/technopro/tech1.jpg',
    h4: `Computers & Office
    `,
    price: '800.00$',
    buy: 'buy Now',
    categories: 'techno',
},
{
    img: '../images/technopro/tech2.jpg',
    h4: `Pc Gaming
    `,
    price: '750.00$',
    buy: 'buy Now',
    categories: 'techno',
},
{
    img: '../images/technopro/tech3.jpg',
    h4: `Computers & Office Accessories`,
    price: '19.49$',
    buy: 'buy Now',
    categories: 'techno',
},
{
    img: '../images/technopro/tech4.jpg',
    h4: `Laptops
    `,
    price: '320.00$',
    buy: 'buy Now',
    categories: 'techno',
},
{
    img: '../images/technopro/tech5.jpg',
    h4: `Printers & Scanners
    `,
    price: '120.00$',
    buy: 'buy Now',
    categories: 'techno',
},
{
    img: '../images/technopro/tech6.jpg',
    h4: `HeadSets
    `,
    price: '25.99$',
    buy: 'buy Now',
    categories: 'techno',
},
{
    img: '../images/technopro/tech7.jpg',
    h4: `MemoireX 64GB Flash drive USB2.0`,
    price: '19.49$',
    buy: 'buy Now',
    categories: 'techno',
},
{
    img: '../images/books/book1.jpg',
    h4: `War and Peace
    by Leo Tolstoy`,
    price: '20.00$',
    buy: 'buy Now',
    categories: 'knowledge',
},
{
    img: '../images/books/book2.jpg',
    h4: `The Lord of the Rings
    by J.R.R.`,
    price: '19.00$',
    buy: 'buy Now',
    categories: 'knowledge',
},
{
    img: '../images/books/book3.jpg',
    h4: `The Help
    by Kathryn Stockett`,
    price: '17.00$',
    buy: 'buy Now',
    categories: 'knowledge',
},
{
    img: '../images/books/book4.jpg',
    h4: `The Cloud Atlas
    by David Mitchell`,
    price: '21.00$',
    buy: 'buy Now',
    categories: 'knowledge',
},
]
console.log(infoCardObj);
/////////////////////////
        
let products = document.querySelector('.products .container.grid3');
console.log(products);

///////////////////////////////////////

function displayMenuItems(menuItem){
    let displayMenu = menuItem.map(function(item){
        return `<div class="pro-card">
                    <div class="img-div">
                    <img src=${item.img} alt="">
                    </div>
                    <div class="info-div">
                    <h4>${item.h4}</h4>
                    <h3 class="price">${item.price}</h3>
                    <h5>${item.buy}</h5>
                    </div>
                </div>`;
    })
    // it return correct info items
    displayMenu = displayMenu.join('');
    products.innerHTML = displayMenu;
}

// load items
window.addEventListener('DOMContentLoaded', function(){
    displayMenuItems(infoCardObj);
});

// filter items
category.forEach(ctg => {
    ctg.addEventListener('click',function(e){
        let categore = e.target.dataset.id;
        const menuCategory = infoCardObj.filter(function(menuItem){
            //console.log(menuItem.categories)
            if(menuItem.categories === categore){
                return menuItem;
            }           
        })
        //console.log(menuCategory);
        ////////////////////////////
        if(categore === 'all'){
            displayMenuItems(infoCardObj);
        }else{
            displayMenuItems(menuCategory);
        }
    })
})

/////////////////////////   end of category btns filter function





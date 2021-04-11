    //  select element
let allSpanBtns = document.querySelectorAll('.buttons span'),
    resultPlace = document.querySelector('.result'),
    result = document.querySelector('.result span.output'),
    inputField = document.getElementById('the-input'),
    Ivalue = inputField.value;

 allSpanBtns.forEach(span => {

    span.addEventListener('click', (e) => {

        if(e.target.classList.contains('check-item')){
            checkItem();
        }
        if(e.target.classList.contains('add-item')){
            addItem();
        }
        if(e.target.classList.contains('delete-item')){
            deleteItem();
        }
        if(e.target.classList.contains('show-item')){
            showItem();
        }
    })
 })   
///////////////////////////////////////////////////////////////////////////////////

function showMessage(){
        resultPlace.innerHTML = `input can't be empty`;
}


///////////////////////////////////////////////////////////////////////////////////
 function checkItem(){
    if(inputField.value != ''){
        
        if(localStorage.getItem(inputField.value)){
            resultPlace.innerHTML = `Found Local item caled <span>${inputField.value}</span>`;
        }else{

            resultPlace.innerHTML = `No Local item caled <span>${inputField.value}</span>`;

        }

    }else{
        showMessage();
    }
 }


 function addItem(){
    if(inputField.value != ''){
        
        localStorage.setItem(inputField.value, 'key');
        resultPlace.innerHTML = `Local storage item <span>${inputField.value}</span> Added`;
        inputField.value = '';

    }else{
        showMessage();
    }
}

function deleteItem(){

    if(inputField.value != ''){
        
        if(localStorage.getItem(inputField.value)){
            localStorage.removeItem(inputField.value);
            resultPlace.innerHTML = `Local storage Called <span>${inputField.value}</span> Deleted`;
            inputField.value = '';
        }else{
            resultPlace.innerHTML = `No local Storage called <span>${inputField.value}</span> for delete it`;
            inputField.value = '';
        }

    }else{
        showMessage();
    }

}

function showItem(){
    if(localStorage.length){

        //resultPlace.innerHTML = `${localStorage.length}`
        for(let [key,value] of Object.entries(localStorage)){
            resultPlace.innerHTML += `<span>${value} <br> </span>`;
        }

    }else{
        resultPlace.innerHTML = `No local storeges To show`
    }
}
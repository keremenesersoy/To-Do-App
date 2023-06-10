buton = document.querySelector('#ekle')
buton.addEventListener('click', myfunc)
input = document.querySelector('#inputt')
ulList = document.querySelector('#myList')

ButtonSettings()

function ButtonSettings(){
closeButton = document.querySelectorAll('.bg-danger')

for(let i = 0 ; i < closeButton.length ; i++){
    closeButton[i].addEventListener('click' , function(){
    let li = this.parentElement.parentElement;
    li.remove()
})
}

confirmButton = document.querySelectorAll('.bg-success')

for(let i = 0 ; i < confirmButton.length ; i++){
    confirmButton[i].addEventListener('click' , function(){
    let li = this.parentElement.parentElement;
    li.classList.add("text-decoration-line-through","bg-opacity-50")
    li.style.backgroundColor = "darkgray"

})
}
}


function myfunc(){
    if (input.value !== ""){

    ulDOM = document.querySelector('#myList')
    liDOM = document.createElement('li')
    liDOM.classList.add("list-group-item","d-flex","justify-content-between","align-items-center")
    liDOM.innerHTML = input.value

    buttonDOM2 = document.createElement('button')
    buttonDOM2.classList.add("badge","badge-success","badge-pill","bg-success","fw-normal","me-1")
    buttonDOM2.innerHTML = "✓"
    
    buttonDOM = document.createElement('button')
    buttonDOM.classList.add("badge","badge-danger","badge-pill","bg-danger","fw-normal")
    buttonDOM.innerHTML = "X"

    spanDOM = document.createElement('span')
    spanDOM.append(buttonDOM2)
    spanDOM.append(buttonDOM)
 
    
    liDOM.append(spanDOM)
    ulDOM.append(liDOM)
    input.value = ""
    closeButton = document.querySelectorAll('.bg-danger')

    ButtonSettings()
    input.focus();
    }
    else{
        isActive = document.querySelector('#alert') === null
        if(isActive){
        let message = "Please Enter a Valid Text!"
        alertFunc(message)
        setTimeout(function(){
            let alertt = document.querySelector('#alert');
            alertt.remove();
        }, 3000)
        }
    }
    
}

function alertFunc(msg){
    let body = document.querySelector('body')
    let alertt = document.createElement('div')
    alertt.id = "alert"
    alertt.classList.add("alert","alert-danger","container",'text-center')
    alertt.innerHTML = msg
    body.prepend(alertt)
}




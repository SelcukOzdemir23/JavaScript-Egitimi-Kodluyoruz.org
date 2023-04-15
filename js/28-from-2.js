let formDOM = document.querySelector("#userForm")

formDOM.addEventListener("submit",formSubmit)


function formSubmit() {
    event.preventDefault() //default işlemi engellendi
    console.log("İşlem Gerçekleşti")
    
    let scoreInputDOM = document.querySelector("#score")
    console.log(scoreInputDOM.value)
    localStorage.setItem("score",scoreInputDOM.value)
}
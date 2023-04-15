let formDOM = document.querySelector("#userForm")

formDOM.addEventListener("submit",formSubmit)

function formSubmit() {
    event.preventDefault() //default işlemi engellendi
    console.log("İşlem Gerçekleşti")
}
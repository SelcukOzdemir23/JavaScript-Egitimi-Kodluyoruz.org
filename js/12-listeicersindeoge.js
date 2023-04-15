let lastChild = document.querySelector("ul#list>li:last-child")

lastChild.innerHTML = "son oge degisti"

let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerHTML = "son oge degisti"


let ulDOM = document.querySelector("ul#list")

let liDOM = document.createElement("li")

liDOM.innerHTML = "Kendi Oluşturduğumuz Oge"

ulDOM.append(liDOM)

// console.log(ulDOM.lastChild)

ulDOM.prepend(liDOM)


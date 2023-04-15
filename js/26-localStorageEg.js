//function egserzise

let counter = localStorage.getItem("counter")
let counterDOM = document.querySelector("#counter")

let increaseDOM = document.querySelector("#increase")
let decreaseDOM = document.querySelector("#decrease")


increaseDOM.addEventListener("click",clickEvent)
decreaseDOM.addEventListener("click",clickEvent)

function clickEvent()
{
    console.log(this.id)
    this.id == "increase" ? counter++ :counter--
    localStorage.setItem("counter",counter)
    counterDOM.innerHTML = counter
}

counterDOM.innerHTML = counter
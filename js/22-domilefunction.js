let greeting = document.querySelector("#greeting")



greeting.addEventListener("mouseover",domClick)

function domClick() {
    console.log("Etkinlik Denetlendi")
    console.log(this.innerHTML = "Memati Baş")
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"
}


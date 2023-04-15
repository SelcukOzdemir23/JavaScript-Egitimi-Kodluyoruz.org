let title = document.getElementById("title")

console.log(title.innerHTML)

title.innerHTML = "Degisen Bilgi"

console.log(title.innerHTML)

let link = document.querySelector("ul#list>li>a")

link.innerHTML = "Link Bilgisi Değiştirildi"

a = document.querySelector("#kodluyoruzLink")
a.innerHTML = "Naber Kelek"
console.log(link)

link.style.color = "red"
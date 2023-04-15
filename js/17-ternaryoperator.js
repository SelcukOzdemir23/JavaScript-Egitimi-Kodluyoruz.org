let userName = prompt("Kullanıcı Bilginizi Yazınız: ")

let info = document.querySelector("#info")

//ternary oepratır
//koşul ? dogruysa : yanlişsa


info.innerHTML =`${userName.length>0 ? userName :"Kullanıcı Bilginin yok"}`


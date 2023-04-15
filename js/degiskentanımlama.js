//let ve const değişken tanımlama

// var ile değişken tanımlamak

// var serverName = "kodluyoru.org"
// console.log(serverName)

// let ile değişkeni boş tanımlamak

let serverName;
console.log(serverName)

//let değişkeni ile bilgi atamak

serverName = "https://kodluyoruz.org"
console.log(serverName)

// let ile değişkene bilgi atayarak tnımlamaka

let password = "1234"
console.log(password)

//*--- Hatalı Kullanım--//
// console.log(fullName)
// var fullName = "Müşerref Selçuk Özdemir"


let fullName = "Müşerref Selçuk"

fullName = "lorem Lipsum"


fullName = fullName + "ahmet"


fullName = fullName + " Yeni Bilgi"
fullName = "2:Bilgi : " + fullName

fullName = "Sıfırlandı"

fullName+= "Ve yeni bilgi eklendi"
console.log(fullName)

//İçindeki bilginin değişmemesini istiyoruz. 

const serverPassword = "1234";
// serverPassword = "12345" değiştirilmez

console.log(serverPassword)

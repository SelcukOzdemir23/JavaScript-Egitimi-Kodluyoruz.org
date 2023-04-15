let username = prompt("Kullanıcı Adiniz : ")

let age = prompt("Yasiniz : ")

let info = document.querySelector("#info")

if(username && age>=18)
{
    console.log("Ehliyet Alabilirsiniz")
} 
else if (!username)
{
console.log("Kullanıcı Adınız Yok reis")
}
else if(!(age>=18))
{
console.log("Yaş bilgin yok ya da 18 yaşından küçüksün reis")
info.innerHTML = "Adam akıllı yaşa gel lan"
}
else
{
    console.log("Boş yapma be")
}
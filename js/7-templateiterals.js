let username = "hakan"
const DOMAIN = "kodluyoruz.org"

let email = username + "@" + DOMAIN

console.log(
    "Merhaba: ",username, " sitemize hosgeldin mail adresin : \n",email
)

//template iterals 

let info = `Merhaba ${username} emailnizi ${email}
mail adresinin uzunlugu ${email.length}
kısa isminiz : ${username[0]}.


borcunuz ${2+3*10}
gunun saat bilgisi ${new Date().getHours()}


`



console.log(info)

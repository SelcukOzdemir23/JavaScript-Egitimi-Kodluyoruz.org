let email = "hakanyalcinkaya@gmail.com"
let firstName = "hakan"
let lastName = "YALCINKAYA"

console.log(
    email.length
)
console.log(
 firstName[0]   
)
console.log(
    firstName.charAt(0)    
)
console.log(
    firstName.toUpperCase()    
)

console.log(
    firstName.toLowerCase()    
)

console.log(
    email.search("@")    
)
console.log(
    email[15]    
)
console.log(
    email.search("Memati")    
)

let DOMAIN = email.slice(email.search("@")+1)
console.log(
    DOMAIN
)


console.log(
    email.replace("gmail.com","hotmail.com")
)

console.log(
    email.includes("dks"),
    email.includes("@")
)

console.log(
    email.endsWith("gmail.com")    
)

let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1)}`

console.log(
    fullName
)
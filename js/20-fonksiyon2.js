let firstName = "Lorem"

function greetings(firstName="Memati",lastName = "Baş") {
    console.log(`Merhaba ${firstName} ${lastName}`)
}



greetings("Polat Alemdar")
greetings()
greetings("Polat","Alemdar")

// let info = greetings("Memati Baş")


function greetings2(firstName,lastName) {
    let info = `Merhaba ${firstName} ${lastName}`
    return info
}

let info  = greetings2("Memati","Baş")
console.log(info)



function domIdWriteInfo(id,info) {
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
}

let htmlInfo = `<span style="color:red"> Color Redd</span>`

domIdWriteInfo('greeting','merhaba')
domIdWriteInfo("info",greetings2("Lorem","Ipsum"))
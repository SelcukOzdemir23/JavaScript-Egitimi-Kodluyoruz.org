let items = [1,2,3,4,5]

let femaleUsers = ["Ayşe","Hulya","Merve"]
let maleUsers = ["Ahmet","Hasan","Mehmet"]

items.unshift(femaleUsers)

console.log(items)

items.push(maleUsers)

console.log(items)

console.log(items.length)

console.log(items[0].length)
console.log(items[0][2])


let newItems = items.splice(2,4)

console.log(items)
console.log(newItems)

items.unshift("Lorem")
items.push("İpsum")

console.log(items)
console.log(items.indexOf("İpsum"))

let copyItems = items

console.log(items)

copyItems.pop()
console.log(items)

copyItems = items.slice()//doğru şekil

console.log(items)

copyItems.pop()
console.log(items)


let allUsers = [...femaleUsers,...maleUsers]

console.log(allUsers)


console.log(allUsers.toString())
console.log(allUsers.join(" ----- "))

allUsers.splice(allUsers.length-1,0,"Melisa")

console.log(allUsers)
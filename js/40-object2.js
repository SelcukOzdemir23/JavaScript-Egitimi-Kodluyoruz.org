let laptop1 = {
    brand : "Apple",
    model : "MacBook Pro",
    "1model" : "MacBook Pro",
    "2kg":2,
    modelName : "MacBook Pro",
    model_name : "MacBook Pro"
}

console.log(laptop1)
console.log(laptop1.brand)
console.log(laptop1["2kg"])
console.log(laptop1.model)
console.log(laptop1["brand"])


laptop1.brand = "Mac"
laptop1["brand"] = "Mac1"
console.log(laptop1)


laptop1.version = "10.15.7"
console.log(laptop1)

keys = Object.keys(laptop1)
console.log(keys)

// for (const key in keys){
//     console.log(key)
// }


keys.forEach(item => {
    console.log(item)
    console.log(laptop1[item])
});


console.log(Object.values(laptop1))

let setting = {
    password:1234,
    userName : "user1"
}
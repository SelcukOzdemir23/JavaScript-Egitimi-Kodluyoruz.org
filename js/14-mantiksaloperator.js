let price = "100"
let user = "guest"

console.log(price==1)
console.log(price==100)


console.log(price===100) //=== hem türü hem değeri eşitse doğrulanır.

console.log(price != 1)

console.log(user != "guest")

console.log(price<1000)

console.log(price<10)

console.log(price>10)

console.log(price>1000)

price = 0
console.log(price>0 && user !="guest")

console.log(price>0 || user !="guest")

console.log(price>0 && !user =="guest")

user = "guest"
price = 1
console.log(price>0 && user =="guest")



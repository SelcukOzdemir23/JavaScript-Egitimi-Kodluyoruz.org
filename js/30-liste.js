let domain = "kodluyoruz"
let isActive = false
let items = [1,2,3,isActive,domain]

console.log(items)


let emptyArray = [] //boş liste

console.log(items.length)

console.log(items[0])

console.log(items[items.length-1])

console.log(typeof(items)) //object olarak çıkmış

console.log(Array.isArray(items))

//hangileri true idir
console.log(
    Array.isArray([])
)
console.log(
    Array.isArray(1)
)
console.log(
    Array.isArray(true)
)

console.log(
   items[Math.floor(items.length/2)]
)
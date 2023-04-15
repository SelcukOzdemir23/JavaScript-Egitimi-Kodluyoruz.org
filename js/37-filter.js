const PRODUCTS = ["Laptop","Phone","Speaker","Desktop","Server","Mouser","Keyboard"]

const NEW_PRODUCTS = PRODUCTS.filter(item => item.length>5)

console.log(NEW_PRODUCTS)

const ACTIVE_USERS = USERS.filter(users => users.isActive ===true)
console.log(ACTIVE_USERS)
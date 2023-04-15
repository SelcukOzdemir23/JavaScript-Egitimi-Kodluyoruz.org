const PRODUCTS = ["Laptop","Phone","Speaker","Desktop","Server","Mouser","Keyboard"]

PRODUCTS.forEach((prodcut,index,array) => 
array[index] = `${prodcut.toUpperCase()}`
)


console.log(PRODUCTS)
let items = [10,20,30,40]

console.log("İtems - ilk hali",items)

//sona eleman ekle
items.push(50)
console.log(items)
//sona eleman ekle
items.unshift(5)
console.log(items)

let lastItem = items.pop() //son elemanı attık
console.log("İtems",items," Last İtem",lastItem)

let firstItem = items.shift() //ilk eleman çıktı
console.log(items)


items[0] = 5;
console.log(items)

items[items.length-1] = "Ahmet"
console.log(items)
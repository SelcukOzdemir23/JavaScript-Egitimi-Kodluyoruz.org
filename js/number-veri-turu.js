let price = 100

let tax = 0.18
let priceTax = price * tax
let total = price + priceTax
console.log("Fiyat: ", price
,"\nKdv Tutarı : ",tax
,"\nToplam:",priceTax
,"Fiyat: ", total)

let counter = 320
counter += 1
counter++
counter--

counter*=10
counter/=2

console.log(counter)

console.log(2+3*10)
console.log((2+3)*10)

//mod kalan

console.log(3 % 2) // sıfır ise çift 1  ise tek

console.log("Koli Ornegi : ",18 % 8)


//us alma

console.log(2*2*2*2)
console.log(2**4)

//aşağı yuvarlama 
console.log("Asagi Yuvarlama: ",Math.floor(1.7))

//yukarı yuvarlama
console.log("Yukari Yuvarlama: ",Math.ceil(2.7))



//direk yuvarlama

console.log("Normal Yuvarlama: ",Math.round(1.3))

//sayıya çevir

let stringNumber = "11"

console.log(stringNumber)

let newNumber = Number(stringNumber)
console.log(newNumber)

console.log("Number Constractor içine bilgi gönerildi",Number("111"))
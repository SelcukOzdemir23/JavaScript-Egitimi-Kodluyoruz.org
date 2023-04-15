let products;

try {
    products.forEach(element => {
        console.log(element)
    });
} catch (error) {
    console.log("Hata var emmi")
    products = [1,2,3,4]
    products.forEach(element => {
        console.log(element)
    });
}



console.log("Hata yönetimi düzgün çalışıyor")

let info = "kodluyoruz"

console.log(info)


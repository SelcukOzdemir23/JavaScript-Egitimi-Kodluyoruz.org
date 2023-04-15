const LORELİST = [
    "lorem","ipsum","dolor","amet","consectetur","adipisicing","elit"
]

let counter = 0

// for (let index = 0; index < 10; index++) {
//     if(index==5){
//         break
//     }
//     console.log(index)
    
// }

for (let index = 0; index < 10; index++) {
    if(index==5){
        continue
    }
    console.log(index)
    
}

const UL_DOM = document.querySelector("#userListDOM")

for (let index = 0; index < LORELİST.length; index++) {
    if(LORELİST[index]=="dolor"){
        break
    }
    let LI_DOM = document.createElement("li")
    LI_DOM.innerHTML = LORELİST[index]
    UL_DOM.append(LI_DOM)
}
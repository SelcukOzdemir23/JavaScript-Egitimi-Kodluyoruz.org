let users = ["Lorem","Ipsum","Lorem"]

// for(let index = 0;index<10;index++){
//     console.log(index)
// }

// let index = 0

const userListDom = document.querySelector("#userList")

for (let index = 0; index < users.length; index++) {
    const liDOM = document.createElement("li")
    liDOM.innerHTML = users[index]
    userListDom.appendChild(liDOM)
    
}
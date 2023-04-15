let greeting = document.querySelector("#greeting")

greeting.classList.add("text-primary")
greeting.classList.add("title")

greeting.classList.add("new-info","second-class","third-class") // adding class

greeting.classList.remove("title","text-primary") //dlete class

console.log(greeting.classList)

function hello(firstName) {
    console.log(`Merhaba${firstName}`)
}

hello("Javascript")

const helloFuncV1 = (firstName) => {console.log(`Merhaba ${firstName}`)}

const helloFuncV2 = firstName => console.log(`Merhaba ${firstName}`)


const helloFuncv3 = (firstName,lastName) => 
    console.log(`Merhaba ${firstName} ${lastName}`)

const helloFuncv4 = (firstName,lastName) =>{
    let info = `Merhaba ${firstName} ${lastName}`
    console.log(info)
    return info
}
let settings = {
    userName : "loremIpsum",
    password : "asfdanf",
    isActive : true,
    ip : "190.168.1.1",
    serverName : "kodlamayız.org"
}

// let {userName,password,isActive,ip:serverIp,serverName} = settings


// console.log(userName)
// console.log(serverIp)


let {userName,password,isActive,...newSettings} = settings

console.log(newSettings)

// let settings2 = settings

// settings2.userName = "Değişen Bilgi"

// console.log(settings)

// console.log(settings2)

let settings2 = {...settings}


settings2.userName = "Değişen Bilgi"

console.log(settings)

// let settings2 = settings

// settings2.userName = "Değişen Bilgi"


let score = [100,200,300,400]

let [score1,score2, ...score3] = score

console.log(score1,score2,score3)


let copyScore = [...score]

console.log(copyScore)
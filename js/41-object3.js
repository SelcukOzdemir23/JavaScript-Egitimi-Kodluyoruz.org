let user1 = {
    firstName : "Bilgin",
    lastName : "Uzman",
    isActive : true,
    score : [1,2,3,4],
    shortName : function() {
        return `${this.firstName[0].toUpperCase()}. ${this.lastName}`
    }

}

console.log(user1.shortName())
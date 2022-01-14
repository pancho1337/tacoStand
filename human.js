console.log("init file running")
// create baby - eat sleep 
var Baby = function (name) {
    var product = {}
    product.name = name
    product.sex = (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * 100))
    product.ocean = {
        openness: Math.floor(Math.random() * 100),
        conscientiousness: Math.floor(Math.random() * 100),
        extraversion: Math.floor(Math.random() * 100),
        agreeableness: Math.floor(Math.random() * 100),
        neuroticism: Math.floor(Math.random() * 100)
    }
    product.health = 1000
    product.tired = 50
    product.age = 0
    product.eat = function () {
        product.health += 20
    }
    product.sleep = function () {
        product.health += 10
    }
    product.living = function () {
        product.health -= 10
        product.tired += 10
        product.age += 1
        console.log(product.name + " health: " + product.health + " tired: " + product.tired)
        if (product.health < 1) {
            alert(product.name + " is dead")
            clearTimeout(loop)
            product = null
            return
        } else if (product.tired >= 50) {
            console.log(product.name + " is crying!!")
        }
        console.log(product.age)
        if (product.age > 7) {
            product = Infant(product.name)
        }
        var loop = setTimeout(product.living, 1000)
    }
    product.living()
    return product
}

// infant - learn talk
var Infant = function (name) {
    var product = Baby(name)
    product.age = 8
    product.skill = 0
    product.social = 0
    product.talk = function () {
        product.social += 3
    }
    product.learn = function () {
        product.skill += 1
    }
    return product
}

// teen - showOff rebel
var Teen = function (name) {
    var product = Infant(name)
    product.age = 16
    product.rebel = function () {
        product.skill -= 5
        console.log(product.name + " your skill ranking is: " + product.skill)
    }
    product.showOff = function () {
        product.social += Math.random() < 0.5 ? -1 : 1 * (Math.floor(Math.random() * 100))
        console.log(product.name + " your social ranking is: " + product.social)
    }
    return product
}

// adult - work responsability income
var Adult = function (name) {
    var product = Teen(name)
    product.age = 28
    product.income = 0
    product.responsability = 0
    product.work = function () {
        product.income += (173 + product.responsability)
        product.responsability += 3
        console.log(product.name + " your income is: " + product.income)
    }
    return product
}

// midLifeCrysis - awarnessOfDeath
var MidLifeCrysis = function (name) {
    var product = Adult(name)
    product.age = 40
    product.income = 1000
    product.retirementFund = product.income *= 2
    product.awarnessOfDeath = 50
    product.wise = function () {
        product.age += 1
    }
    return product
}

// silverBackyears - giveAdvice acceptance
var SilverBackyears = function (name) {
    product = MidLifeCrysis(name)
    product.age = 60
    product.senile = product.age > 70
    return product
}

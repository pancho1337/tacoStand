console.log("init file running")

// create baby - eat sleep 
var Baby = function(name){
    var product = {}
    product.name = name
    product.health = 100
    product.notLoco = 100
    product.eat = function(){
        prouduct.health += 33
    }
    product.sleep = function(){
        if(notLoco < 0){
            alert("They killed Kenny!!")
        } else {
            product.notLoco = 100
        }
    }
    product.living = function(){
        product.health -= 1
        console.log("your health is " + product.health)
        setTimeout(product.living, 1000)
    }
    return product
}
var joe = Baby("Joe")
console.log(joe)
// infant - learn talk
// teen - socialize rebel
// adult - work responsability 
// midLifeCrysis - awarnessOfDeath
// silverBackyears - giveAdvice acceptance
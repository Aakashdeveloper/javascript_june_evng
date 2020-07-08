var firstname ="Michal"
var lastname="Zoe"

var sayhi={
    firstname:'John',
    lastname:'Brain',
    greet:function(){
        return `Say hi to ${this.firstname} ${this.lastname}`
    }
}

//without this
sayhi.greet()
"Say hi to Michal Zoe"

sayhi.greet()
"Say hi to John Brain"

/////////////
var car = new Object();
car.color="Red"
car.brand="Bmw"
"Bmw"
typeof(car)
"object"
car
{color: "Red", brand: "Bmw"}


var bob = new Object()
bob.age = 10
bob.city="newyork"
bob.setAge= function(newAge){
    this.age = newAge
}


var tony = new Object()
tony.age = 16
tony.city="London"
tony.setAge= function(newAge){
    this.age = newAge
}

let createAge = function(newAge){
    this.age = newAge
}

var bob = new Object()
bob.age = 10
bob.city="newyork"
bob.setAge= createAge

var tony = new Object()
tony.age = 16
tony.city="London"
tony.setAge= createAge
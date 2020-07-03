/*function  greet(){
    console.log("Hiii")
}


greet()*/

////IFFI////
(function(){
    console.log("Hiii")
}())

//Generator Function///
function looping(userinput){
    for(i=0;i<userinput;i++){
        console.log(i)
    }
}

looping(10

)

function* looping(userinput){
    for(i=0;i<userinput;i++){
        yield i
    }
}

var data = looping()
undefined
var data = looping(7)
undefined
data.next()
{value: 0, done: false}
data.next()
{value: 1, done: false}
data.next()
{value: 2, done: false}
data.next()
{value: 3, done: false}
data.next()
{value: 4, done: false}
data.next()
{value: 5, done: false}
data.next()
{value: 6, done: false}
data.next()
{value: undefined, done: true}

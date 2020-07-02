function
arrow
method
iffi
generator
////////////
var a = 10
var b = 20
a+b
30

///////function//////
function add(a,b){
    return a+b
}

add(1,2)
3
add('a','b')
"ab"

function isEven(userinput){
    var out;
    if(userinput%2==0){
        out = "even"
    }else{
        out= "Odd"
    }
    return out
}
undefined
isEven(32323)
"Odd"
isEven(3232)
"even"


/////Method//////
var add = function(a,b){
    return a+b
}
add(2,3)
5

///Es6////
////Arrow///

var add = (a,b) => {return a+b}
add(2,3)
5
//clouser> enclose something

var a = 10
/*function add(a){
    var b = 20
    return a+b
}

//console.log(add(a)
for(i=0;i<5;i++){
    let b = 20
    console.log(a+b+i)
}

console.log("a>>>",a)
console.log("b>>>>",b)
*/

var out = []

for(let i=0;i<3;i++){
    out[i]=function(){
        return "I am with "+i
    }
}


for(j=0;j<out.length;j++){
    console.log(out[j]())
}
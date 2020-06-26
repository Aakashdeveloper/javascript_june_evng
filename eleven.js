if(condition){
    //do something
}else{
  //do something
}

var a = 8888933
if(a%2===0){
    console.log(`Number ${a} is even`);
}else{
    console.log(`Number ${a} is odd`);
}
Number 8888933 is odd


var a = 8888933
if(a%2===0){
    console.log(`Number ${a} is even`);
}else if(a%3===0){
    console.log(`Number ${a} is divisble by 3`);
}
else{
    console.log(`Number ${a} is odd`);
}

var role = "Admin"
if(role=="Admin"){
    console.log(`You have some permission`);
}else if(role="SuperAdmin" || role=="Admin"){
    console.log(`You have all permission to delete admin also `);
}
else{
    console.log(`You are normal user`);
}


var role = "Admin"
if(role=="Admin"){
    console.log(`You have some permission`);
}
if(role="SuperAdmin" || role=="Admin"){
    console.log(`You have all permission to delete admin also `);
}
else{
    console.log(`You are normal user`);
}



var a = 15
if(a%2===0){
    console.log(`Number ${a} is even`);
}else if(a%3===0 && a%5===0){
    if(a%3===0){
        console.log(`Number ${a} is divisble by 3`);
    }else{
        console.log(`Number ${a} is divisble by 5`);
    }
}
else{
    console.log(`Number ${a} is odd`);
}

///////////
Ternory operator
/////////

var a = 10
a>10 ? "Hii":"Bie"
"Bie"
a == 10 ? "Hii":"Bie"
"Hii"
a%2===0?"Even":"Odd"
"Even"
var a = 3
undefined
a%2===0?"Even":"Odd"
"Odd"
a%2===0?a*2:a*3
9
var a = 2
undefined
a%2===0?a*2:a*3
4


var a = 10
a%2===0?true:false
true
var a = 10
a%2===0?true:false?a*2:a*3
true
var a = 12
a%2===0?true:false?a*2:a*3
true
var a = 11
a%2===0?true:false?a*2:a*3
33


for
while
dowhile 
for of
for in //Object
////////
Map
filter



/////////For/////////
for(i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4

var city = ["London", "Delhi", "Newyork", "Helsinki", "Amsterdam", "Nice"]
for(i=0;i<city.length;i++){
    console.log(city[i])
}
London
Delhi
Newyork
Helsinki
Amsterdam
Nice

var city = ["London", "Delhi",[1,2,3], "Newyork", "Helsinki", "Amsterdam", "Nice"]

undefined
Array.isArray(city)
true
var a = 10
undefined
Array.isArray(city)
true
Array.isArray(a)
false

var city = ["London", "Delhi",[1,2,3], "Newyork", "Helsinki", "Amsterdam", "Nice"]
for(i=0;i<city.length;i++){
    if(Array.isArray(city[i])){
        for(j=0;j<city[i].length;j++){
            console.log(city[i][j])
        }
    }else{
        console.log(city[i])
    }
   
}

London
VM668:8 Delhi
VM668:5 1
VM668:5 2
VM668:5 3
VM668:8 Newyork
VM668:8 Helsinki
VM668:8 Amsterdam
VM668:8 Nice

//////////////While//////
var i = 10;
while(i<5){
    console.log(i);
    i++
}

//////////////Do While//////
var i = 10;
do{
    console.log(i);
    i++
}
while(i<5)

///////For of/////
var colors =["Red","Yellow","Green"]
for(color of colors){
    console.log(color)
}

for(abc of colors){
    console.log(abc)
}

var colors =["Red","Yellow",[2,3,4],"Green"]
for(color of colors){
    if(Array.isArray(color)){
        for(abc of color){
            console.log(abc)
        }
    }else{
        console.log(color)
    }
}

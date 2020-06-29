var a = ['a','b','c','d']
var b = [1,2,3,4]
var c = [true,true,false,true]

var d  =[2,3,4,'a','b',true,4,'n']
array in the javascript can be homogenious or hetrogenious

var city = ["London","Delhi","Newyork","Helsinki","Amsterdam"]
typeof(city)
"object"
city.length
5
city[0]
"London"
city[1]
"Delhi"
city[2]
"Newyork"


var city = ["London","Delhi","Newyork","Helsinki","Amsterdam"]
undefined
city.push('Nice')
6
city
(6) ["London", "Delhi", "Newyork", "Helsinki", "Amsterdam", "Nice"]
city.push('Venice')
7
city
(7) ["London", "Delhi", "Newyork", "Helsinki", "Amsterdam", "Nice", "Venice"]
city.pop()
"Venice"
city
(6) ["London", "Delhi", "Newyork", "Helsinki", "Amsterdam", "Nice"]

var city = ["London", "Delhi", "Newyork", "Helsinki", "Amsterdam", "Nice"]

city.pop(2)
var city = ["London", "Delhi", "Newyork", "Helsinki", "Amsterdam", "Nice"]
undefined
city.pop(2)

"Nice"
city.pop(2000)

"Amsterdam"

var city = ["London", "Delhi", "Newyork", "Helsinki", "Amsterdam", "Nice"]
undefined
city.unshift('Insburg')
7
city
(7) ["Insburg", "London", "Delhi", "Newyork", "Helsinki", "Amsterdam", "Nice"]
city.shift()
"Insburg"
city
(6) ["London", "Delhi", "Newyork", "Helsinki", "Amsterdam", "Nice"]


Push> Add at the End 
unshift> Add at the begining
shift> remove from the begining
pop> remove from the end

var city = ["London", "Delhi", "Newyork", "Helsinki", "Amsterdam", "Nice"]
undefined
city.indexOf('Delhi')
1
city.indexOf('London')
0
city.indexOf('Amsterdam')
4
city.indexOf('Boston')
-1
city.indexOf('Dubai')
-1


var a = ['a','b','c','d']
var b = [1,2,3,4,5]
undefined
a+b
"a,b,c,d1,2,3,4,5"
a.concat(b)
(9) ["a", "b", "c", "d", 1, 2, 3, 4, 5]
b.concat(a)
(9) [1, 2, 3, 4, 5, "a", "b", "c", "d"]
var c = ['d','e','f']
undefined
a.concat(b,c)
(12) ["a", "b", "c", "d", 1, 2, 3, 4, 5, "d", "e", "f"]
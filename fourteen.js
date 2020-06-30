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

var city = ["London", "Delhi", "Newyork", "Helsinki", "Amsterdam", "Nice"]
undefined
city.slice(2)
(4) ["Newyork", "Helsinki", "Amsterdam", "Nice"]
city
(6) ["London", "Delhi", "Newyork", "Helsinki", "Amsterdam", "Nice"]
city.slice(2,5)
(3) ["Newyork", "Helsinki", "Amsterdam"]

var city = ["London", "Delhi", "Newyork", "Helsinki", "Amsterdam", "Nice"]
undefined
city.splice(3,0,'Boston','Dubai')
[]
city
(8) ["London", "Delhi", "Newyork", "Boston", "Dubai", "Helsinki", "Amsterdam", "Nice"]
city.splice(4,2)
(2) ["Dubai", "Helsinki"]
city
(6) ["London", "Delhi", "Newyork", "Boston", "Amsterdam", "Nice"]
city.splice(3,2,'Venice','Mumbai')
city
(6) ["London", "Delhi", "Newyork", "Venice", "Mumbai", "Nice"]

//Es6 Destructure
var a,b;
[a,b]=[10,20]

a
10
b
20

var colors=["Red","Yellow","Green"]
var [a,b] = colors
undefined
a
"Red"
b
"Yellow"

var url = "https://github.com/Aakashdeveloper/Angular5-Seed"
undefined
url.split('/')
(5) ["https:", "", "github.com", "Aakashdeveloper", "Angular5-Seed"]
var out = url.split('/')
undefined
out[length-1]
"Aakashdeveloper"
out[out.length-1]
"Angular5-Seed"
var url1="https://github.com/Aakashdeveloper/June_React_mrng"
undefined
var out = url1.split('/')
undefined
out[out.length-1]
"June_React_mrng"

var data ="I am working on javascript"
undefined
data.split(' ')
(5) ["I", "am", "working", "on", "javascript"]
var name = "JavaScript"
undefined
name.split('')
(10) ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

var mydata =  ["I", "am", "working", "on", "javascript"]
undefined
mydata.toString()
"I,am,working,on,javascript"
mydata.toString().replace(/,/g,' ')
"I am working on javascript"
var myname = ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
undefined
myname.toString()
"J,a,v,a,S,c,r,i,p,t"
myname.toString().replace(/,/g,'')
"JavaScript"


var city = ["London", "Delhi", "Newyork", "Helsinki", "Amsterdam", "Nice"]
undefined
city.sort()
(6) ["Amsterdam", "Delhi", "Helsinki", "London", "Newyork", "Nice"]
city.sort().reverse()
(6) ["Nice", "Newyork", "London", "Helsinki", "Delhi", "Amsterdam"]

var city = ["London", "Delhi", "Newyork", "Helsinki", "Amsterdam", "Nice"]
undefined
city.includes('Paris')
false
city.includes('Delhi')
true

var myarr = Array.of(6)
undefined
myarr
[6]
var myarr = Array.of(6,5,6)
undefined
myarr
(3) [6, 5, 6]
var a = [10,20,30,40]
undefined
a.fill(100,2)
(4) [10, 20, 100, 100]
a.fill(100,3)
(4) [10, 20, 100, 100]
a.fill(100,1)
(4) [10, 100, 100, 100]
var a = [10,20,30,40]
undefined
a.fill(100,1,3)
(4) [10, 100, 100, 40]


var myarr = ["Delhi","Mumbai",[1,2,3,['a','b'],4],"Pune","Chandigarh"]
undefined
myarr[2]
(5) [1, 2, 3, Array(2), 4]
myarr[2][3]
(2) ["a", "b"]
myarr[2][3][0]
"a"

var myarr = ["Delhi","Mumbai",[1,2,3,['a','b'],4],"Pune","Chandigarh"]
undefined
myarr.flat()
(9) ["Delhi", "Mumbai", 1, 2, 3, Array(2), 4, "Pune", "Chandigarh"]
myarr.flat(2)
(10) ["Delhi", "Mumbai", 1, 2, 3, "a", "b", 4, "Pune", "Chandigarh"]
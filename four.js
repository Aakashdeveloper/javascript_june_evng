console.log() > getting output and debugging
alert > to show popup message
prompt() > to take from user
confirm() > to take confirmation from user 

console.log("Hi to JS")
alert('Form submiited successfully')
undefined
alert('hii')

prompt("What is your age")
"10"
var age = prompt("What is your age")
undefined
age
"10"
confirm('Do you want to leave')
true
confirm('Do you want to leave')
false
var output = confirm('Do you want to leave')
undefined
output
true
var output = confirm('Do you want to leave')
undefined
output
false


var a = prompt('Enter first value');
var b = prompt('Enter second value');
alert(a+b)

var a = "10"
undefined
parseInt(a)
10
var b = "20"
undefined
parseInt(b)
20
parseInt(a)+parseInt(b)
30
parseInt(a+b)
1020

var a = "10.33"
undefined
var b = "20.43"
undefined
a+b
"10.3320.43"
parseInt(a)+parseInt(b)
30
parseFloat(a)
10.33
parseFloat(b)
20.43
var c = "20"
undefined
parseFloat(c)
20
parseFloat(a)+parseFloat(b)
30.759999999999998
var out = 30.759999999999998
undefined
out.toFixed(2)
"30.76"


var a = prompt('Enter first value');
var b = prompt('Enter second value');
var out = (parseFloat(a)+parseFloat(b)).toFixed(2)
alert(out)
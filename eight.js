var a = 10
undefined
var b = 12
undefined
a>b
false
a<b
true
a==b
false
a!=b
true
a!==b
true


a>=b
false
a<=b
true
a=<b
VM1880:1 Uncaught SyntaxError: Unexpected token '<'
a<=b
true
a=>b
a=>b
a>=b
false

var a = 10
isNaN(a)
false

var b = "Hi"
isNaN(b)
true

Math.PI
3.141592653589793
var pi = Math.PI
undefined
pi.toFixed(2)
"3.14"
pi.toFixed(3)
"3.142"
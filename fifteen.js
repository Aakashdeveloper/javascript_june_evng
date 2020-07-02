RegExp
^$
^([a-z])$

var a = "Hi"
a.match("([a-z])$")
null
var a = "h"
undefined
a.match("(^[a-z])$")
(2) ["h", "h", index: 0, input: "h", groups: undefined]

var a = "hi"
a.match("(^[a-z]+)$")

var a = "hi"
a.match("(^[a-z]{2,5})$")

"(^[A-Za-z0-9]{2,5})$"

var phone = 1223456789
phone.match("^[0-9]{10}$")

var phone = 1223456789
phone.toString()
"1223456789"
var b = "9834758"
parseInt(b)
9834758

var phone = 1223456789
phone.toString().match("^[0-9]{10}$")
["1223456789", index: 0, input: "1223456789", groups: undefined]

^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$

var email = "a@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
(4) ["a@a.com", "a", "a", "com", index: 0, input: "a@a.com", groups: undefined]
var email = "a@.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
var email = "@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
var email = "a@a"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
var email = "a@a."
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
var email = "a@a.ddd"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
(4) ["a@a.ddd", "a", "a", "ddd", index: 0, input: "a@a.ddd", groups: undefined]
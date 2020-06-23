var name = "alvin"
var name = "alvin"
undefined
name.toUpperCase()
"ALVIN"
name.toLowerCase()
"alvin"

var name = "alvin"
undefined
name.length
5
name[0]
"a"
name[1]
"l"
var name = "alvin   "
undefined
name.length
8
name.trim()
"alvin"
var name = "  alvin   "
undefined
name.trim()
"alvin"
var name = "  alvin .   "
undefined
name.length
12
name.trim()
"alvin ."



var email = "a@a.com"
undefined
var email1 = "A@a.com"
undefined
email == email1
false


var email = "a@a.com"
undefined
var email1 = "A@a.com"
undefined
email == email1
false
email.toLowerCase() == email1.toLowerCase()
true

var name = "alvin"
undefined
name.charAt(0)
"a"
name.charAt(1)
"l"
name.slice(1)
"lvin"
name.slice(2)
"vin"

var city = "amsterdam"
undefined
city.slice(1)
"msterdam"
city.slice(2,4)
"st"
city.slice(2,5)
"ste"


var city = "amSTerdAM"
undefined
city.charAt(0).toUpperCase()
"A"
city.slice(1).toLowerCase()
"msterdam"
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
"Amsterdam"

var greet = "Welcome to JavaScript"
undefined
greet.replace('JavaScript','JS')
"Welcome to JS"
var greet = "JavaScript Welcome to JavaScript"
undefined
greet.replace('JavaScript','JS')
"JS Welcome to JavaScript"
greet.replace(/JavaScript/g,'JS')
"JS Welcome to JS"
var name = "  alvin .   "
undefined
name.replace(/ /g,'')
"alvin."

var city = "amsterdam"
undefined
city.indexOf('s')
2
city.indexOf('m')
1
city.indexOf('z')
-1
city.indexOf('b')
-1

slice(start,end)
substring(start,end)
substr(start,length)

var city = "amsterdam"
undefined
city.slice(2,6)
"ster"
city.substring(2,6)
"ster"
city.substr(2,6)
"sterda"

var city = "Hongkong"

var city = "Hongkong"
undefined
city.slice(-2,2)
""
city.slice(2,-2)
"ngko"
city.slice(-2)
"ng"
city.slice(-3)
"ong"
city.slice(3)
"gkong"
city.substring(-2,2)
"Ho"
city.substring(2)
"ngkong"
city.substring(-2)
"Hongkong"
city.substring(2,-2)
"Ho"
city.substring(-2,-2)
""
city.slice(-2,-2)
""


slice can remove value from begining and end
substring can remove only from begining


var city = "Hongkong"
undefined
city.slice(-2,2)
""
city.slice(2,-2)
"ngko"
city.slice(-2)
"ng"
city.slice(-3)
"ong"
city.slice(3)
"gkong"
city.substring(-2,2)
"Ho"
city.substring(2)
"ngkong"
city.substring(-2)
"Hongkong"
city.substring(2,-2)
"Ho"
city.substring(-2,-2)
""
city.slice(-2,-2)
""
city.substr(-2)
"ng"
city.substr(-2,2)
"ng"
city.substr(2,-2)
""
city.substr(-2,-2)
""

var city = "Hongkong"
undefined
city.slice(-2,2)
""
city.slice(2,-2)
"ngko"
city.slice(-2)
"ng"
city.slice(-3)
"ong"
city.slice(3)
"gkong"
city.substring(-2,2)
"Ho"
city.substring(2)
"ngkong"
city.substring(-2)
"Hongkong"
city.substring(2,-2)
"Ho"
city.substring(-2,-2)
""
city.slice(-2,-2)
""
city.substr(-2)
"ng"
city.substr(-2,2)
"ng"
city.substr(2,-2)
""
city.substr(-2,-2)
""
Date()
"Fri Jun 26 2020 22:36:16 GMT+0530 (India Standard Time)"
var a = new Date()
undefined
a.getDate()
26
a.getDay()
5
a.getMonth()
5

switch(new Date().getDay()){
    case 1:
        console.log('Today is monday')
        break;
    case 5:
        console.log('Today is Friday')
        break;
    default:
        console.log('Unkown Day')
}

Today is Friday
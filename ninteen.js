var a = [3,4,6,7,5,8,9]
a.map((data) => { return data*2})
> Map help to iterate over the array and play logics as well
> filter help to take out specific value from the array

var age = [45,34,12,32,45,67,22]
age.filter((data) => {return data>35})


var age = [45,34,12,32,45,67,22]
age.filter((data) => {return data>35})
(3) [45, 45, 67]
var age = [45,34,12,32,45,67,22]
age.map((data) => {return data>35})
(7) [true, false, false, false, true, true, false]

var a = [0,1,2,3,4]
undefined
a.map((data)=>{return data*2})
(5) [0, 2, 4, 6, 8]
a.filter((data)=>{return data*2})
(4) [1, 2, 3, 4]
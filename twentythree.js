literal notation 
constructor notation
/////////

var moviename = "Avenger"
var movieRating = 4.5
var movielang="Eng"

var movies = {
    name:"Avenger",
    rating:4.5,
    language:"English"
}
undefined
movies
{name: "Avenger", rating: 4.5, language: "English"}
typeof(movies)
"object"
movies.name
"Avenger"
movies.rating
4.5
movies.language
"English"
movies['name']
"Avenger"
movies['rating']
4.5
movies['language']
"English"

var movies = {
    name:"Avenger",
    rating:4.5,
    language:"English"
}
undefined
movies.genre="Action"
"Action"
movies
{name: "Avenger", rating: 4.5, language: "English", genre: "Action"}
movies.rating=4.6
4.6
movies
{name: "Avenger", rating: 4.6, language: "English", genre: "Action"}
delete movies['language']
true
movies
{name: "Avenger", rating: 4.6, genre: "Action"}


//json
var movies =[
    {
        name:"Avenger",
        rating:4.5,
        language:"English"
    },
    {
        name:"Mad Max",
        rating:3.5,
        language:"English"
    },
    {
        name:"Edge of tommrow",
        rating:4.7,
        language:"English"
    } 
]

movies[0].name
"Avenger"
movies[2].name
"Edge of tommrow"


var sayhi={
    firstname:'John',
    lastname:'Brain',
    greet:function(){
        return `Say hi to everyone`
    }
}

sayhi
{firstname: "John", lastname: "Brain", greet: ƒ}
sayhi.firstname
"John"
sayhi.greet()
"Say hi to everyone"


var calc={
    sum:(a,b)=>{return a+b},
    sub:(a,b)=>{return a-b}
}
undefined
calc.sum(1,)
NaN
calc.sum(1,2)
3
calc.sub(1,2)
-1


var dbquery = {
    find:(table)=>{return `Select * from ${table}`},
    insert:(table,data) => {return `insert into ${table} name,city VALUES(${data.name},${data.city})`}
}

dbquery.find('Employee')
"Select * from Employee"
dbquery.insert('student',{name:'John',city:'Delhi'})
"insert into student name,city VALUES(John,Delhi)"
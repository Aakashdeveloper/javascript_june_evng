function language(name,country){
    this.name=name;
    this.country=country;
}

var Hindi = new language('Hindi','India')
Hindi
language {name: "Hindi", country: "India"}

//////Classes Es6/////

class language1{
    constructor(name,country){
        this.name=name;
        this.country=country; 
    }
}

var English = new language1('English','USA')
English
language1 {name: "English", country: "USA"}
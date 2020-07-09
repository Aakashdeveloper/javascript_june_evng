class geo{
    constructor(lat,long){
        this.lat = 41.22,
        this.long= -34.21
    }
}

class language extends geo {
    constructor(name,country,lat,long){
        super(lat,long)
        this.name=name;
        this.country=country
    }
}

var english = new language('English','USA')
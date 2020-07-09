var dbObj= {
}

dbObj.users = [
    {
        name:'Alvin',
        role:'Admin'
    },
    {
        name:'John',
        role:'Super Admin'
    }
]

dbObj.dbQuery ={
    find:(table)=>{return `Select * from ${table}`},
    insert:(table,data) => {return `insert into ${table} name,city VALUES(${data.name},${data.city})`}
}

//module.exports = dbObj;
export default dbObj;
let mongo = require('./db2.js');

module.exports = {
    getPersonas: function(){
        //mongo.connect();
        var person = new Array();
        return new Promise((res, rej) => {
            mongo.connect().then(async (instance)=>{
                const  db = instance;
                person = await db.collection("tabla1").find({}).toArray();                    
                res(person);      
            }).then(async() => {
                await mongo.disconnect();
            }).catch(err => {
                return rej(err);
            });
        });        
    }
}
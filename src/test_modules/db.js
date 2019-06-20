const MongoClient = require('mongodb').MongoClient;
const {HOST, PORT, NAME} = require('./config');
const connectionUrl = `mongodb://${HOST}:${PORT}`;

module.exports = (() => {
    let instance = null,
        isDisconnecting = false;

    function connect(){
        return new Promise((res, rej) => {
            MongoClient.connect(connectionUrl, {useNewUrlParser: true}, (err, client) => {
                if(err){rej(err);}
                console.log("Conectado satisfactoriamente al servidor de Mongo");
                instance = client;
                //res(client.db(NAME));
                res(instance);
            });
        });
    }

    function disconnect(){
        if(instance && !isDisconnecting){
            isDisconnecting = true;
            console.log("Desconectando instancia de Mongo");
            return new Promise((res, rej) => {
                instance.close((err, result) => {
                    if(err){
                        rej(err); 
                        isDisconnecting = false; 
                        return;
                    }
                    console.log("Instancia de Mongo desconectada");
                    res();
                });
            });
        }
    }

    function getInstance(){
        return instance;
    }

    return {
        connect,
        disconnect,
        getInstance
    }
});
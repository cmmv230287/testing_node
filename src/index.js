let prom = require('./test_modules/promises');
//let db = require('./test_modules/db2');
let personas = require('./test_modules/personas');

/*db.connect().then((res) =>{
    console.log(res);
}).catch(err => {
    console.log(err);
});*/

async function showMessageInOrder(){
    var persons = await personas.getPersonas();
    console.log(persons);
    /*await prom.process1(1000, true).then((res) => {
        console.log(res);    
    }).catch(rej => console.log(rej));
    await prom.process2(5000, false).then((res) => {
        console.log(res);    
    }).catch(rej => console.log(rej));
    await prom.process3(500, true).then((res) => {
        console.log(res);    
    }).catch(rej => console.log(rej));
    await prom.process4(10000, false).then((res) => {
        console.log(res);    
    }).catch(rej => console.log(rej));*/
}
showMessageInOrder();

console.log("fin !!!");
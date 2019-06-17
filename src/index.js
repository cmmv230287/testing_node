let express = require('express');
let app = new express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Home');
});

app.get('/persona/:nombre', (req, res) => {
    var nombre = req.params.nombre;
    res.send(`El nombre de la persona es ${nombre}`);
});

app.post('/persona', (req, res) => {
    var personas = req.body;
    var respuesta = `El nombre de la persona es ${personas[0].nombre} ${personas[0].apellido}`;
    res.send(respuesta);
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
// librerias, modulos, variables

const express = require('express');
const app = express();

const path = require('path');


// configuracion - //Middleware

app.use(express.static('public')); //llamar la carpeta public
app.set('port', process.env.PORT || 3000); //crear un objeto port

// rutas

app.get('/home', (request, response) => {
    response.sendFile(path.join(__dirname, "./views/home.html"))
});

app.get('/register', (request, response) => {
    response.sendFile(path.join(__dirname, "./views/register.html"))
});

app.get('/login', (request, response) => {
    response.sendFile(path.join(__dirname, "./views/login.html"))
});


// Levantar el servidor

app.listen(app.get('port'), () => {
    console.log(`Server Running on port ${app.get('port')}`);
})
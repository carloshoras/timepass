const express = require('express');
const app = express();
const indexRouter = require('./routes/index.js')
const endrouteRouter = require('./routes/endroute.js')
const hourMiddleware = require('./middlewares/horaMiddleware.js');
const validateHourMiddleware = require('./middlewares/validarHora.js');


app.get('/endroute', hourMiddleware, validateHourMiddleware, endrouteRouter)

app.get('/', hourMiddleware, indexRouter)

app.get('/error', hourMiddleware,  (req,res) => {
    let waitHour = "<h2>Aún no es la hora, espera hasta las 12</h2>"
    res.send(`<h1>Hola, ¿Qué tal?</h1> <h2>Hora actual:  ${req.dateType}</h2>${waitHour}<button><a href="./endroute">Endroute</a></button>`);
})

app.use((req, res) => {
    res.status(404).send('<h1>Page not found</h1><a href="/">home</a>');
});

app.listen(3000, () => {
    console.log('El servidor  está escuchando en el puerto 3000');
});
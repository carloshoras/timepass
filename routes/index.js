const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`<h1>Hola, ¿Qué tal?</h1> <h2>Hora actual:  ${req.dateType}</h2><button><a href="./endroute">Endroute</a></button>`);
});

module.exports = router
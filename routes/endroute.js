const express = require('express');
const router = express.Router();

router.get('/endroute', (req, res) => {
    res.send(`<h1>Ruta Final</h1><h2>¡Bienvenido a la ruta final!</h2><a href="/">home</a>`);
});

module.exports = router
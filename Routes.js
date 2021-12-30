const { Router } = require('express');
const express = require('express');
const router = express.Router();

const PruebaRepositorio = require('./Repositorios/Prueba');
const PruebasRepositorio = new PruebaRepositorio();
const numCuenta = '4152313868721916';

router.use(express.json()); 

router.post('/Pruebas', function (req, res) {
  PruebasRepositorio.guardar((req.body));
})

router.get('/Pruebas', function (req, res) {
  PruebasRepositorio.enviar(numCuenta).then( (resultado) => {
    res.send({
     resultado
    });
  });
})

module.exports = router;
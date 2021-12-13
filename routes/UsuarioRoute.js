const express = require('express');
const Usuario = require('../models/usuarios');
const router = express.Router()
const Controller = require('../controllers/UsuarioController');

router.get('/', Controller.usuario_all)
router.get('/:id', Controller.usuario_find)
router.post('/', Controller.add)
router.put('/update/:id', Controller.update)
router.delete('/:id', Controller.delete)

module.exports = router
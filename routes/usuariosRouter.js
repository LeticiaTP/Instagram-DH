const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');
const validarCadastro = require('../middlewares/validarCadastro');

router.get('/', usuariosController.index);
router.get('/registro', usuariosController.registro)
router.post('/', validarCadastro, usuariosController.create);
router.put('/:id', usuariosController.update);
router.delete('/:id', usuariosController.delete);

module.exports = router;
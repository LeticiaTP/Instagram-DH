const {Usuario, sequelize} = require('../models/');

const usuariosController = {
    index: async (req, res) => {
        let usuarios = await Usuario.findAll();
        return res.json(usuarios);
    },
    create: async (req, res) => {
        let {nome, email, senha} = req.body

        let novoUsuario = await Usuario.create({
            nome,
            email,
            senha
        });
        return res.json(novoUsuario);
    }
}

module.exports = usuariosController;
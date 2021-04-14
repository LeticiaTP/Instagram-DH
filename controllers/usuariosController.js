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
    },
    update: async (req, res) => {
        let {id} = req.params;
        let {nome, email, senha} = req.body;

        let usuarioAtualizado = await Usuario.update({
            nome,
            email,
            senha
        }, {
            where: {id}
        })
        return res.send(usuarioAtualizado);
    },
    delete: async (req, res) => {
        let {id} = req.params;
        let deletarUsuario = await Usuario.destroy({
            where: {id}
        })
        return res.json(deletarUsuario);
    }
}

module.exports = usuariosController;
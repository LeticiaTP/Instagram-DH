const {request} = require('express');
const {Post, sequelize} = require('../models/');

const postsController = {
    index: async (req, res) => {
        let posts = await Post.findAll({
            include: ['usuario', 'comentarios', 'curtiu']
        });
        return res.render('index', {
            listarPosts:posts
        });
    },
    create: async (req, res) => {
        let {texto, img, usuarios_id} = req.body;

        let novoPost = await Post.create({
            texto,
            img,
            usuarios_id,
        });
        return res.json(novoPost);
    },
    update: async (req, res) => {
        let {id} = req.params;
        let {texto, img, usuarios_id} = req.body;

        let postAtualizado = await Post.update({
            texto,
            img,
            usuarios_id,
        }, {
            where: {id}
        })
        return res.send(postAtualizado);
    },
    delete: async (req, res) => {
        let {id} = req.params;
        let deletarPost = await Post.destroy({
            where: {id}
        })
        return res.json(deletarPost);
    },
    show: async (req, res) => {
        let {usuarios_id} = req.params;
        let mostrarPost = await Post.findAll({
            where: {usuarios_id}
        })
        return res.json(mostrarPost);
    }
}

module.exports = postsController;
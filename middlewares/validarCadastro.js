const { Usuario } = require('../models')
​
module.exports = async (request, response, next) => {
    let { email } = request.body;
    let users = await Usuario.findAll({ where: { email } });
    if (users.length) {
        response.status(400).json({ erro: "Email já cadastrado" })
        return;
    } else {
        next();
    }
​
}
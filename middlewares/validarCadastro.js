const { Usuario } = require('../models');

module.exports = async (request, response, next) => {
    let { nome, email, senha } = request.body;
    let usuarios = await Usuario.findAll({ where: { email } });

    if(nome && email && senha){

        if (!usuarios.length) {

            if(senha.length >= 6 && senha.length <= 12){
                next();

            } else {
                response.status(400).json({ erro: "A senha deve ter entre 6 e 12 caracteres." });
                return;
                }  

        } else {
        response.status(400).json({ erro: "Email já cadastrado." });
        return;
        }

    } else {
        response.status(400).json({ erro: "Por favor, preencha todos os campos!" })
        return;
    }

}
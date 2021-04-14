module.exports = (sequelize, DataTypes) => {

    const Usuario = sequelize.define(
        "Usuario", {
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING
        }, {
            tableName: "usuarios",
            timestamps: false
        }
    );
    
    
    Usuario.associate = (models) => {
        Usuario.hasMany(models.Post, {as:"posts", foreignKey:"usuarios_id"});
        Usuario.belongsToMany(models.Post, {
            as: "curtiu", // alias da relação
            through: "curtidas", // tabela intermediária
            foreignKey: "usuarios_id",
            otherKey: "posts_id",
            timestamps: false
        })
    }

    return Usuario;

}
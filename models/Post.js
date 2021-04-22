module.exports = (sequelize, DataTypes) => {

    const Post = sequelize.define(
        'Post',{
            texto: DataTypes.STRING,
            img: DataTypes.STRING,
            usuarios_id: DataTypes.INTEGER,
            n_likes : DataTypes.INTEGER
        }, {
            tableName: "posts",
            timestamps: false
        }
    );

    Post.associate = (models) => {
        Post.belongsTo(models.Usuario, { as: "usuario", foreignKey: "usuarios_id" });
        Post.hasMany(models.Comentario, { as: "comentarios", foreignKey: "posts_id" });
        Post.belongsToMany(models.Usuario, {
            as: "curtiu", // alias da relação
            through: "curtidas", // tabela intermediária
            foreignKey: "posts_id",
            otherKey: "usuarios_id",
            timestamps: false
        })
    }

    return Post;
}
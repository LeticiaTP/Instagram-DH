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

    return Post;
}
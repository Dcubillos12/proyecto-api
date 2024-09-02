const { Sequelize } = require("sequelize");
require("dotenv").config();

const UserModel = require("./models/UserModels");
const PostModel = require("./models/PostModels");

const { DB_USER, BD_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${BD_PASSWORD}@${DB_HOST}/${DB_NAME}`, { logging: false }
);

// definicion de modelos a usar
UserModel(sequelize);
PostModel(sequelize);

//Crear las relaciones asocioaciones entre los modelos
const { User, Post } = sequelize.models;

// Un usuario puede tener muchos posts
User.hasMany(Post);

// Un post pertenece a un usuario
Post.belongsTo(User);

module.exports = {
    ...sequelize.models,
    coon: sequelize
}
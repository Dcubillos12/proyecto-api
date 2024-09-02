const axios = require('axios')
const { User, Post } = require('../db.js')
const { infoClean } = require('../utils/index.js')
const PostModels = require('../models/PostModels.js')
// se conecta con la BD fuente de informacion externa

const createUserDb = async (name, email, phone) => {
    return await User.create({ name, email, phone }) // retorna un nuevo usuario
}

const getUserById = async (id, source) => {
    const user = source === "api" ?
        (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data
        :
        await User.findByPk(id, {
            include: {
                model: Post,
                attributes: ['title', 'body']
            }
        });
    return user;
}

const getAllUsers = async () => {
    const usersDb = await User.findAll();
    const infoApi = (await axios.get('https://jsonplaceholder.typicode.com/users')).data
    const userApi = infoClean(infoApi)
    return [...usersDb, ...userApi]
}
const getUserByName = async (name) => {
    const infoApi = (await axios.get('https://jsonplaceholder.typicode.com/users')).data
    const userApi = infoClean(infoApi)
    const userFiltered = userApi.filter(user => user.name === name)
    const userDb = await User.findAll({ where: { name: name } })
    return [...userDb, ...userFiltered]
}

module.exports = { createUserDb, getUserById, getAllUsers, getUserByName }
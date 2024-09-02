const { Post } = require('../db.js')

const createPostBd = async (title, body, userId) => {
    const post = await Post.create({ title, body })
    await post.setUser(userId) // a este post seteamos el usuario hacemos la associacion
    return post
}

module.exports = { createPostBd }
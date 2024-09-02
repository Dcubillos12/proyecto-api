const { createPostBd } = require("../controllers/postController")
const postCreatePostHandler = async(req, res) => {
  const {title, body, userId} = req.body
  try {
    const newPost = await createPostBd(title, body, userId)
    res.status(200).json(newPost) // devolversela al frontend
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = {
    postCreatePostHandler
}
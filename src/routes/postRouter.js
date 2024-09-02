const { Router } = require("express");

const postRouter = Router();

const { postCreatePostHandler } = require("../handlers/postHandlers")


postRouter.post("/", postCreatePostHandler);



module.exports = postRouter
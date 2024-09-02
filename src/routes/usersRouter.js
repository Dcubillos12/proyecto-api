const { Router } = require("express");

const usersRouter = Router();

const {getDetailUserHandler, getUserHandler, postCreateUserHandler} = require("../handlers/usersHandlers");

usersRouter.get("/", getUserHandler);
usersRouter.get("/:id", getDetailUserHandler)
usersRouter.post("/", postCreateUserHandler)


module.exports = usersRouter
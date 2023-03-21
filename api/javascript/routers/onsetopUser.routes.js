const express = require("express");
const { createOnestopUser } = require("../controllers/onestopUserController");
const onestopUserRouter = express.Router();

onestopUserRouter.post("/onestop-user/", createOnestopUser);

module.exports = onestopUserRouter;

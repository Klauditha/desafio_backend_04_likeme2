const express = require("express");
const router = express.Router();
const postsRouter = require("./postsRouter");

//middleware
router.use("/posts", postsRouter);

module.exports = router;
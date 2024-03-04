const { Router } = require("express");
const moviesRouter = require("./moviesRouter");

const router = Router();
//verificaq si tiene varias / y las encausa
router.use("/movies", moviesRouter);
module.exports = router;
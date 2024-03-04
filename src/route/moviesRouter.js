const { Router } = require("express");
const moviesController = require("../controllers/moviesControllers");
const moviesRouter = Router();
moviesRouter.get("/", moviesController.getAllMovies);
module.exports = moviesRouter;

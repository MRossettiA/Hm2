const { Router } = require("express");
const moviesController = require("../controllers/moviesControllers");
const { testController } = require("../controllers/");
// Crear un nuevo enrutador para las rutas relacionadas con las películas
const moviesRouter = Router();
// Definir la ruta para obtener todas las películas
moviesRouter.get("/movies", moviesController.getMovies);
// Definir la ruta para obtener por titulo las películas
moviesRouter.get("/movies/by", moviesController.getMovieByTitle);

// Definir la ruta para obtener por id
moviesRouter.get("/movies/:id", moviesController.getMovieById);

// Exportar el enrutador para su uso en otros archivos
moviesRouter.post("/movies", moviesController.createMovie);

module.exports = moviesRouter;
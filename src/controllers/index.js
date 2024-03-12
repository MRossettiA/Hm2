const getAllmovies = (req, res) => {
  const movies = []; // Aquí deberías obtener las películas de tu base de datos o de algún otro origen de datos
  console.log("Contenido de movies:", movies); // Imprime el contenido de movies en la consola
  res.status(200).send("Estamos recibiendo una respuesta de las peliculas");
};
const testController = () => {
  console.log("estamos recibiendo una solicitud");
};

module.exports = {
  getAllmovies,
  testController,
};

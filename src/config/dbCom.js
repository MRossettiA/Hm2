require("dotenv").config();

const mongoose = require("mongoose");
const dbCom = async () => {
    try {
        // Realizar la conexión con la base de datos
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conexión a la base de datos establecida");
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
    }
};

module.exports = dbCom;

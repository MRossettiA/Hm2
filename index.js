const app = require("./src/server");
const dbCom = require("./src/config/dbCom.js");

dbCom().then((res) => {
        app.listen(3000,() => {
            console.log("servidor escuchando en el puerto 3000");
    });
})
.catch((error) => {
    console.error("error al conectarse", error);
    process.exit(1);
    });
 module.exports = dbCom;

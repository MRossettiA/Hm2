const express = require("express");
const router = require("./route/");
const morgan = require("morgan");
const cors= require("cors");
const app = express();
//recibe las solitudes 
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    console.log("pasamos por mi mither");
    next()
}, 
);
//y las encausa a router
app.use(router);
module.exports = app;

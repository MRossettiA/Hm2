const express = require("express");
const router = require("./route/index");
const app = express();
app.use(router);
module.exports = app;

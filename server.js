const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const htmlRoutes = require("./app/routing/htmlRoutes.js")

const app = express();

const PORT = process.env.PORT || 3000;

app.use("/",htmlRoutes);
app.use("/survey",htmlRoutes);

app.listen(PORT, function(){
    console.log("app listening on port " + PORT);
});
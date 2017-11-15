const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const htmlRoutes = require("./app/routing/htmlRoutes.js")
const apiRoutes = require("./app/routing/apiRoutes.js")

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);
// app.use("/survey",htmlRoutes);
// app.use("/api/friends",apiRoutes)
// if path is unknown or not defined it redirects back to home/index so keep this as last route
// app.use(function(req,res){
//     res.redirect("back");
// });

app.listen(PORT, function(){
    console.log("app listening on port " + PORT);
});
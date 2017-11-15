// const express = require("express");
// const bodyParser = require("body-parser");
const path = require("path");
// const router = express.Router();

// router.get("/",function(req,res){
//     res.sendFile(path.join(__dirname,"../public/home.html"));
// });

// router.get("/survey",function(req,res){
//     res.sendFile(path.join(__dirname, "../public/survey.html"))
// });

// module.exports = router;

module.exports = function(app){
    app.get("/",function(req,res){
        res.sendFile(path.join(__dirname,"../public/home.html"))
    });

    app.get("/survey",function(req,res){
        res.sendFile(path.join(__dirname,"../public/survey.html"))
    })
}
// const express = require("express");
// const bodyParser = require("body-parser");
// const path = require("path");
// const router = express.Router();
var friendArr = require("../data/friends");

// const app = express();

// app.use(bodyParser.json());

// router.post("/api/friends",function(req,res){
//     var userInfo = req.body;
//     friendArr.push(userInfo);
//     res.json(friendArr);
// })

// router.get("/api/friends",function(req,res){
//     res.json(friendArr);
// })

// module.exports = router;

module.exports = function(app){
    app.get("/api/friends",function(req,res){
        res.json(friendArr);
    });

    app.post("/api/friends",function(req,res){
        userInfo = req.body;
        friendArr.push(userInfo);
        // code for compatibility stuff
    })
}
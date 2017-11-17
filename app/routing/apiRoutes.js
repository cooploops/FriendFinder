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
        
        var userInfo = req.body;
        let totalDif = 0;
        let compatibleScores = [];
        let compatibleFriend;

        for(var i=0;i<friendArr.length;i++){
            for(var j=0;j<friendArr[i].scores.length;j++){
                totalDif += Math.abs(userInfo.scores[j] - friendArr[i].scores[j]);
            }
            compatibleScores.push(totalDif);
            totalDif = 0;
        }
        compatibleFriend = friendArr[compatibleScores.indexOf(Math.min(...compatibleScores))];

        friendArr.push(userInfo);
        res.send(compatibleFriend);
        // compatibleScores = [];
        // compatibleFriend = null;
    })
}
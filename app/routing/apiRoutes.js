var friendArr = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendArr);
    });

    app.post("/api/friends", function (req, res) {

        var userInfo = req.body;
        let totalDif = 0;
        let compatibleScores = [];
        let compatibleFriend;

        for (var i = 0; i < friendArr.length; i++) {
            for (var j = 0; j < friendArr[i].scores.length; j++) {
                totalDif += Math.abs(userInfo.scores[j] - friendArr[i].scores[j]);
            }
            compatibleScores.push(totalDif);
            totalDif = 0;
        }
        compatibleFriend = friendArr[compatibleScores.indexOf(Math.min(...compatibleScores))];

        friendArr.push(userInfo);
        res.send(compatibleFriend);
    })
}
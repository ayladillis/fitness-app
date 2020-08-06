
var path = require("path");

module.export = function(app) {

    app.get("/exercise", function(req, res){
        res.sendFile(path.join(_dirname, "../public/exercise.html"));
    });

    app.get("/", function(req, res){
        res.sendFile(path.join(_dirname, "../public/index.html"));
    });

    app.get("/stats", function(req, res){
        res.sendFile(path.join(_dirname, "../public/stats.html"));
    });
    
};
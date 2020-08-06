const workOutModel = require("../models/workout")

module.exports = function(app) {

    app.get("/api/workouts", function(req, res) {
        //use mongoose find function 
        workOutModel.find({}, function (err, doc) {
            if (err) {
                res.status(500).send(err)
            }else{
                res.json(doc)
            }
        });
    });

}


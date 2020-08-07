const workOutModel = require("../models/workout");
const { db } = require("../models/workout");

module.exports = function(app) {

    app.get("/api/workouts", function(req, res) {
        //use mongoose find function 
        workout.find({}, function (err, doc) {
            if (err) {
                res.status(500).send(err)
            }else{
                res.json(doc)
            }
        });
    });

    app.put("/api/workouts", function(req, res) {
        db.workout.update(req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function(dbworkout){
                res.json(dbworkout);
            });
    });

    app.post("/api/workouts", function(req, res) {
        
    });

    app.get("/api/workouts/range", function(req, res) {

    });

}


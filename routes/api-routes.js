const app = require("express").Router();
const workOutModel = require("../models/workout");
const { db } = require("../models/workout");

module.exports = function(app) {

    // app.get("/api/workouts", (req, res) => {
    //     workout.find({}, function (err, doc) {
    //         if (err) {
    //             res.status(500).send(err)
    //         }else{
    //             res.json(doc)
    //         }
    //     });
    // });

    app.get("/api/workouts", (req, res) => {
        workOutModel.find({})
        .then(function(workout){
            console.log("get", workout)
            res.send(workout)
        })
        .catch(function(err){
            if(err)throw err
        });
    });

    app.put("/api/workouts/:id", (req, res) => {
        workOutModel.findByIdAndUpdate(req.params.id, {$push: { exercises: req.body} }, {new: true})
        .then(function(workout){
            console.log("get", workout)
            res.send(workout)
        })
        .catch(function(err){
            if(err)throw err
        });
    });

    // app.put("/api/workouts", (req, res) => {
    //     workout.update(
    //         {where: req.body}
    //             ).then(function(dbworkout){
    //                 res.json(dbworkout);
    //             });
    // });

    // app.post("/api/workouts", (req, res) => {

    // });

    // app.get("/api/workouts/range", (req, res) => {
    //     workout.find({}, function (err, doc) {

    //     })
    // });

}


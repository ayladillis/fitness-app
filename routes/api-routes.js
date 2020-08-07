const app = require("express").Router();
const workOutModel = require("../models/workout.js");
const { db } = require("../models/workout");

module.exports = function(app) {

    app.get("/api/workouts", (req, res) => {
        workOutModel.find({}, function (err, doc) {
            if (err) {
                res.status(500).send(err)
            }else{
                res.json(doc)
            }
        });
    });

// put route, updating a workout

    // app.put("/api/workouts/:id", (req, res) => {
    //     workout.update(
    //         {where: req.body}
    //             ).then(function(dbworkout){
    //                 res.json(dbworkout);
    //             });
    // });

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

// creating a workout, post route

    // app.post("/api/workouts", (req, res) => {

    // });

// get route, similar to one we created, finding first 7 workouts

    // app.get("/api/workouts/range", (req, res) => {
    //     workout.find({}, function (err, doc) {

    //     })
    // });

}



// app.get("/api/workouts", (req, res) => {
//     workOutModel.find({})
//     .then(function(workout){
//         console.log("get", workout)
//         res.send(workout)
//     })
//     .catch(function(err){
//         if(err)throw err
//     });
// });



// // -------------------------- Route Middleware (ageCheck) --------------------------

import express from 'express';

const app = express();

function ageCheck(req, res, next) {
    if (!req.query.age || req.query.age < 18) {
        res.send("Alert! You can't access this url.");
    } else {
        next();
    }
} 

app.get("/profile", ageCheck, (req, res) => {
    res.send("Welcome Profile Page");
});

app.listen(3200);

//Check Url : http://localhost:3200/profile?age=20
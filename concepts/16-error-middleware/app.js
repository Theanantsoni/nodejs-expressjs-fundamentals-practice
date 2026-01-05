// // -------------------------- Error Handling Middleware --------------------------

import express from 'express';

const app = express();

app.get("/error", (req, res, next) => {
    const err = new Error("Error Occurred");
    err.status = 500;
    next(err);
});

// Create Middleware for Error Handling
function errorHandling(err, req, res, next){
    res.status(err.status || 500).send("Try after some time.");
}

app.use(errorHandling);

app.listen(3200);
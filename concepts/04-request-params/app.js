// // -------------------------- Understand Request Params --------------------------

import express from 'express';

const app = express();

app.get("/profile", (req, res) => {
    res.send("Age is : " + req.query.age);
});

app.listen(3200);

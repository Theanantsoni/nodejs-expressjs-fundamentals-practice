// // -------------------------- First App with Node js (Hello World) --------------------------


import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(3200);

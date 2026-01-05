// // -------------------------- Add CSS with Express JS --------------------------

import express from 'express';
import path, { resolve } from 'path';

const app = express();

const publicPath = resolve('public');
app.use(express.static(publicPath));

app.get("/home", (req, res) => {
    res.sendFile(path.resolve("view/home.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve("view/login.html"));
});


app.listen(3200);

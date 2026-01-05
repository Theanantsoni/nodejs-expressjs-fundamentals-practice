// // -------------------------- Render HTML file in Express JS --------------------------

import express from 'express';
import path from 'path';

const app = express();

app.get("/home", (req, res) => {
    res.sendFile(path.resolve("view/home.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve("view/login.html"));
});

app.listen(3200);
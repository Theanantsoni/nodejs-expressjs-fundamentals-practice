// // -------------------------- Modules and Routes --------------------------

import express from 'express';

import home, { contact } from '../../pages/home.js';
import about from '../../pages/about.js';
import login from '../../pages/login.js';
import submit from '../../pages/submit.js';

const app = express();

app.get("/home", (req, res) => {
    res.send(home());
});

app.get("/about", (req, res) => {
    res.send(about());
});

app.get("/contact", (req, res) => {
    res.send(contact());
});

app.get("/login", (req, res) => {
    res.send(login());
});

app.post("/submit", (req, res) => {
    res.send(submit());
});

app.listen(3200);

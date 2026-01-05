// // -------------------------- Load HTML file & show Output --------------------------

import express from 'express';
import path from 'path';

const app = express();

app.get("/", (req, res) => {
    const absPath = path.resolve("view/home.html");
    res.sendFile(absPath);
});

app.listen(3200);
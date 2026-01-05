// // -------------------------- Path Module & Path constants --------------------------

import express from 'express';
import path, { resolve } from 'path';

const app = express();

console.log(path.basename(resolve()));

app.get("/", (req, res) => {
    res.send("Path Module Working");
});

app.listen(3200);

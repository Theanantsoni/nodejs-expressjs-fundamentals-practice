// // -------------------------- External Middleware (Morgan) --------------------------

import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));

app.get("/", (req, res) => {
    res.send("Morgan Middleware Active");
});

app.listen(3200);
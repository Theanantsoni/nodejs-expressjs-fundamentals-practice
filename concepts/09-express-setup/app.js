// // -------------------------- Express JS setup --------------------------

import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("Express JS Setup Done");
});

app.listen(3200);

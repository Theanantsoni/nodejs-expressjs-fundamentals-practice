// // -------------------------- Create Server in Node js --------------------------

import express from 'express';

const app = express();

app.get("/response", (req, res) => {
    res.send("Server Response Explained");
});

app.listen(3200);
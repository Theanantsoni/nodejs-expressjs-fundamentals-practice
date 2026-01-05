// // -------------------------- Make Simple API in Node js --------------------------

import express from 'express';

const app = express();

app.get("/api/users", (req, res) => {
    res.json({
        name: "Anant",
        role: "Developer"
    });
});

app.listen(3200);
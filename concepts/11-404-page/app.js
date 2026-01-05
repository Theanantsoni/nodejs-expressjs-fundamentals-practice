// // -------------------------- 404 Page in Express JS --------------------------

import express from 'express';
import path from 'path';

const app = express();

app.use((req, res) => {
    const absPath = path.resolve("view/404.html");
    res.status(404).sendFile(absPath);
});

app.listen(3200);

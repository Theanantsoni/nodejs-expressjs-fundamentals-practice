// // -------------------------- Template Engine in Express JS --------------------------

import express from 'express';

const app = express();

//Use "views" folder for save ejs files.
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('home', {
        Name: 'Anant Soni',
        City: 'Surat',
        Age: 22
    });
});

app.listen(3200);

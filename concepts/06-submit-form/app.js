// // -------------------------- Submit form in Node js --------------------------

import express from 'express';

const app = express();

//ExpressJS Built-In Middleware Method
app.use(express.urlencoded({ extended: false }));

app.post("/submit", (req, res) => {
    console.log("Form Data: ", req.body);
    res.send("Form Submitted");
});

app.get("/", (req, res) => {
    res.sendFile(process.cwd() + "/view/form.html");
});

app.listen(3200);

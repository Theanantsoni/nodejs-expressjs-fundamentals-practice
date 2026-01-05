// // -------------------------- Middleware Method 2 --------------------------

import express from 'express';

const app = express();

app.use((req, res, next) => {
    console.log(" User is accessing : " + req.url + " Page. ");
    next();
});

app.get("/", (req, res) => {
    res.send("Middleware Method 2");
});

app.listen(3200);


// // -------------------------- Middleware Method 1 --------------------------

// import express from 'express';

// const app = express();

// function checkRoute(req, res, next){
//     console.log(" User is accessing : " + req.url + " Page. ");
//     next();
// }

// app.use(checkRoute);

// app.get("/", (req, res) => {
//     res.send("Middleware Method 1");
// });

// app.listen(3200);
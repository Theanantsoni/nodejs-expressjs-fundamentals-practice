// // -------------------------- Show Form Data on EJS Template Engine --------------------------

import express from "express";

const app = express();

app.use(express.urlencoded({extended:false}))

app.set('view engine', 'ejs');

app.get('/add-user', (req, res) => {
    res.render('addUser');
});

app.post('/submit-user', (req, res) => {
    console.log(req.body);
    res.render('submitUser', req.body);
});

app.listen(3200);


// // -------------------------- Conditions and Loops in EJS Template Engine --------------------------

// import express from "express";

// const app = express();

// app.use(express.urlencoded({extended:false}))

// app.set('view engine', 'ejs');

// app.get('/add-user', (req, res) => {
//     res.render('addUser');
// });

// app.post('/submit-user', (req, res) => {
//     console.log(req.body);
//     res.render('submitUser', req.body);
// });

// app.get('/users', (req, res) => {
//     const users = ['User1', 'User2', 'User3', 'User4', 'User5'];
//     res.render('users', {users : users, isLogin: false});
// });

// app.listen(3200);
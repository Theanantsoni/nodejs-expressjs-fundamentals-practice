// // -------------------------- API example with dynamic routes --------------------------

import express from 'express'
import userData from '../../users.json' with {type:'json'}
const app = express();

app.get("/", (req, res) => {
    console.log(userData);
    
    res.send(userData);
});

// http://localhost:3200/user/2

app.get("/user/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);

    let filterData = userData.filter((user) => user.id == id);
    res.send(filterData);
});

// http://localhost:3200/username/User2

app.get("/username/:name", (req, res) => {
    const name = req.params.name
    console.log(name);
    let filterData = userData.filter((user) => user.name.toLowerCase() == name.toLowerCase());
    res.send(filterData);
});

app.listen(3200);

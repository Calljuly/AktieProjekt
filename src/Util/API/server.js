const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db');
const app = express();

const PORT = process.env.PORT || 4001;

app.use(bodyParser.json());
app.use(cors());

app.get('/customer/:username', (req, res, next) => {
  console.log('requested id is ' + req.params.username);
  db.get(`SELECT * FROM Users WHERE UserName = "${req.params.username}"`,(err, row) => {
    if (err) {
      res.sendStatus(500);
    } else {
      if(row){
        console.log(row);
        res.send(row);
      }
      else{
        res.sendStatus(404);
      }
    }
  })
});

app.get('/customer/:username/:password', (req, res, next) => {
  db.get(`SELECT UserName FROM Users WHERE UserName = "${req.params.username}" AND Password = "${req.params.password}"`,(err, row) => {
    if (err) {
      res.sendStatus(500);
    } else {
      if(row){
        console.log(row);
        res.send(row);
      }
      else{
        res.sendStatus(404);
      }
    }
  })
});



app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))

const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const db = require('./db');
const app = express();

const PORT = process.env.PORT || 4001;

app.use(bodyParser.json());
app.use(cors());

app.get('/customer/:id', (req, res, next) => {
  console.log('requested id is ' + req.params.id);
  db.get(`SELECT * FROM Customers WHERE id = ${req.params.id}`,(err, row) => {
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

app.get('/customer/:mail/:password', (req, res, next) => {
  db.get(`SELECT id FROM Customers WHERE mail = "${req.params.mail}" AND password = "${req.params.password}"`,(err, row) => {
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

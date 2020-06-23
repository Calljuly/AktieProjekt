const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const  md5 = require('md5');

const db = require('./db');
const app = express();

const PORT = process.env.PORT || 4001;

app.use(bodyParser.json());
app.use(cors());

app.get('/users/:username', (req, res, next) => {

  db.get(`SELECT * FROM Users WHERE UserName = ?`,
  [req.params.username],
  (err, row) => {
    if (err) {
      res.sendStatus(500);
    } else {
      if(row){
        res.send(row);
      }
      else{
        res.sendStatus(404);
      }
    }
  })
});

app.get('/users/:username/:password', (req, res, next) => {
  db.get(`SELECT UserName FROM Users WHERE UserName = ? AND Password = ?`,
  [req.params.username, md5(req.params.password)],
  (err, row) => {
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

app.patch("/update/personalinformation/:username", (req, res, next) => {
  
  var data = {
      personalInformation: req.body.personalInformation
  };

  db.run(
      `UPDATE Users set PersonalInformation = (?) WHERE UserName = ?`,
      [JSON.stringify(data.personalInformation), req.params.username],
      
      function (err, result) {
          if (err){
              res.status(400).json({"error": res.message})
              return;
          }
          res.json({
              message: "success",
              data: data,
              changes: this.changes
          })
  });
})

app.delete("/delete/:username", (req, res, next) => {
  db.run(
      `DELETE FROM Users WHERE UserName = ?`,
      [req.params.username],
      
      function (err, result) {
          if (err){
              res.status(400).json({"error": res.message})
              return;
          }
          res.json({
              message: "DELETED",
              changes: this.changes
          })
  });
})

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))

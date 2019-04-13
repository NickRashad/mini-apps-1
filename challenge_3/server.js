const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db/db.js');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/', (req, res) => {
  let queryColumns = Object.keys(req.body.checkOutData).filter((val, ind) => ind > 0).join(', ');
  let queryValues = Object.values(req.body.checkOutData).filter((val, ind) => ind > 0);
  db.query(`INSERT INTO purchase (${queryColumns}) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?);`, queryValues, function (error, results, fields) {
    if (error) throw error;
    console.log('Upload results:', results);
    res.send({data: results});
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
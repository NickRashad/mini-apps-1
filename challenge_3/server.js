const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db/db.js');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// app.get('/'), ()

app.post('/', (req, res) => {
  console.log(req.body, Object.keys(req));
  db.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
    res.send({data: results[0].solution});
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
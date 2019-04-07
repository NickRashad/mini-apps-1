const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const multer = require('multer');
const upload = multer();

app.use(express.static(path.join(__dirname, 'client')));

app.get('/', (req, res) => {

  res.status(200);
  res.send('Test!')
  res.redirect('/');
})

app.post('/', upload.none(), (req, res, next) => {
  console.log(req.body.JSONmsg);
  res.status(200);
  res.send('Success!')
  next();
});
app.listen(port, () => console.log(`Server is up and running on port: ${port}`));
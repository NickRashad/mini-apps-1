const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'client')));

app.get('/', (req, res) =>{
  // res.send('Up and Running');
  // res.redirect
})


app.listen(port, () => console.log(`Server is up and running on port: ${port}`));
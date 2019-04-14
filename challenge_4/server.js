const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const path = require('path');
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client/dist'))

app.listen(port, () => console.log(`Server is running on port ${port}`));

const express = require('express');
const app = express();
const port = 3000;
const path = require('path');


app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.post('/', (req, res) => {

});

app.listen(port, () => console.log(`Listening on port ${port}`));
const mysql = require('mysql');

 const db = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: '',
 });

 db.connect((err) => {
  if (err) {
    console.log('Error connecting to Db\n');
    throw err;
  }
  console.log('Connection established');
 });

 module.exports = db;
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const multer = require('multer');
const upload = multer();
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const ejs = require('ejs');

app.use(express.static(path.join(__dirname, 'client')));
app.use(express.urlencoded({extended: false}))
app.set('views', path.join(__dirname, 'client/views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {

  res.status(200);
  // res.send('Test!')
  res.render('/index');
})

app.post('/', upload.none(), (req, res, next) => {
  // res.status(200);
  // csvConverterAsync(req.body.JSONmsg)
  //   .then((csvString) => {
  //     fs.writeFile('csvfile.csv', csvFile);
  //     res.render('csvComplete',{
  //       columnHeaders: ['one', 'two', 'three'],
  //       rowData: [['blah', 'blah', 'blahh'], ['genus','species','loci']],
  //     });
  //     next();
  //   });
    csvConvertAsync(req.body.JSONmsg)
      .then((csv) => {
        fs.writeFile('csvfile.csv', csv.string, (err) =>{
          if(err) throw err;
          console.log('Success!');
      })
      .then(() => {
        res.render('csvComplete',{
          columnHeaders: csv.headers,
          rowData: csv.rows,
        });
      });
    })


  // res.render('csvComplete',{
  //    columnHeaders: ['one', 'two', 'three'],
  //   rowData: [['blah', 'blah', 'blahh'], ['genus','species','loci']],
  // });
  next();
});
app.listen(port, () => console.log(`Server is up and running on port: ${port}`));




const csvConvert = (initialData) => {
  let paragraph = '';
  let getHeaders = true;
  let recurse = (data) => {
    let row = '';
    let headers = '';
    for (let header in data) {
      if (header !== 'children' ) {
        if (row.length === 0) {
          headers += getHeaders ? header : '';
          row += data[header];
        } else {
          headers += getHeaders ? `,${header}` : '';
          row += `,${data[header]}`;
        }
      } else {
        paragraph += getHeaders ? headers : '' ;
        getHeaders = false;
        paragraph += `\n${row}`;
        if (data[header].length > 0) {
          for(let child of data[header]) {
            recurse(child);
          }
        }
      }
    }
  };
  recurse(initialData);
  let lines = paragraph.split('\n');
  let header = lines[0].split(',');
  let rows = lines.slice(1).map(row => row.split(','));
  return {
    string: paragraph,
    header: header,
    rows: rows,
  };
};
var csvConvertAsync = Promise.promisify(csvConvert);
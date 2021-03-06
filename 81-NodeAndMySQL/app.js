var express = require('express');
var app = express();
var mysql = require('mysql');

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function(req, res, next) {
  console.log('Request Url: ' + req.url);

  var con = mysql.createConnection({ 
    host: '172.17.0.2',
    user: 'root',
    password: 'root',
    database: 'addressbook'
  });
  console.log(con);

  con.query('SELECT people.ID, Firstname, Lastname, Address FROM people INNER JOIN personaddresses ON people.ID = personaddresses.PersonID INNER JOIN addresses ON personaddresses.AddressID = addresses.ID',
    function(err, rows) {
      if(err) throw err;
      console.log(rows[0].Firstname);
    }
  )

  next();
})

apiController(app);
htmlController(app);

app.listen(port);
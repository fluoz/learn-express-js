var mysql = require('mysql');

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'api_pusher'
});

db.connect(function(err){
  if(err) throw err;
});

module.exports = db;
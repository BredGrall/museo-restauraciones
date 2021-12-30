var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'sql3.freemysqlhosting.net',
  port: 3306,
  user: 'sql3461624',
  password: 'aT4F2teyrf',
  database: 'sql3461624'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con
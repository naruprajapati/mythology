const express = require('express');
const mysql = require('mysql2');
const app = express();
const db = mysql.createConnection({
  host: 'database-1.cujuq0cmkdr1.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'Naru10012001',
  database: 'appdb'
});
db.connect(err => {
  if (err) console.error('DB connection failed:', err);
  else console.log('Connected to RDS!');
});
app.get('/', (req, res) => res.send('App is running and DB connected'));
app.listen(3000, () => console.log('App listening on port 3000'));

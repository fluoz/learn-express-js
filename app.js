const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;
var db = require('./config/db');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/trans', (req , res) => {
  db.query('SELECT * FROM transaction', function (error, rows, fields){
    if(error){
        console.log(error)
    } else{
        res.json(
          {
            "status": 200,
            "data": rows,
          }
         
        )
    }
  });
});

app.post('/trans', (req, res) => {
   let sql = 'INSERT INTO transaction(fromUser, toUser ,amount, price) VALUES (?)';
   let values = [
     req.body.fromUser,
     req.body.toUser,
     req.body.amount,
     req.body.price,
   ];

   db.query(sql,[values],function (error){
     if(error){
       console.log(error)
     }
     else {
       res.json({
         "status": 201,
         "data": req.body
       })
     }
   });

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
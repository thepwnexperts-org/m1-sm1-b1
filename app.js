const express = require('express');
var compression = require('compression');
const app = express();
const db = require('mongoose');
const dotenv=require('dotenv');
//dotenv.config();
dotenv.config({ path: './.env' })
const cors=require('cors');

//mid 
app.use(express.json());
app.use(cors());
app.use(compression());


const cal =require('./routes/calculate');



//path
app.use("/",cal);



//db

db.connect(process.env.dburi)
  .then(() => console.log('DB Connection Successful'))
  .catch(err => console.log(`DB Connection Error: ${err.message}`));


//live

app.get('/live',(req,res)=>{
    console.log
    res.send('we are on /live');
});

    


//server 
app.listen(3000);

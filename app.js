const express = require('express');
var compression = require('compression');
const app = express();
const mongoose = require('mongoose');
const dotenv=require('dotenv');
//dotenv.config();
dotenv.config({ path: './.env' })
const cors=require('cors');

//use
app.use(express.json());
app.use(cors());
app.use(compression());

//names
//routes

//auth

const cal =require('./routes/calculate');

//routes 
//remote address
//app.use("/api/users",userRoter);
//app.use("/user",authRoute);
app.use("/",cal);



//test

try{
    let db_str=process.env.DB_CONNECTION_LOCAL;
    mongoose.connect("mongodb+srv://test:test@test.e3l1a.mongodb.net/tpe?retryWrites=true&w=majority")
  .then(() => console.log('DB Connection Successful'));
    //mongoose.connect (db_str, {useNewUrlParser: true});
    //mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.1');
    
}
catch(e)
{
    console.log(e)
}




//local

app.get('/',(req,res)=>{
    console.log
    res.send('we are on /');
});

    


//server 
app.listen(3001);

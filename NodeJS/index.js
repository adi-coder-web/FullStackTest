const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors');
const {mongoose} =require('./db')

var employeeController=require('./controllers/employeeController');

const app=express()
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   // res.header("Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS");
   
    next();
  });

//app.use(cors({origin:"http://localhost:4200/"}));

app.listen(3000,(req,res)=>{
    console.log("SErver is running on 3000")
})

app.use('/employees',employeeController);
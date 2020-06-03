const express=require('express')
const router=express.Router();
const ObjectId=require('mongoose').Types.ObjectId;

var {Employee} =require('../models/employee');


router.get('/',(req,res)=>{
    Employee.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{
                console.log('Error in retrieving employee data')
        }
    })
})

router.get('/:id',(req,res)=>{
   
    Employee.findById(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{
            console.log('Error in retrieving employee')
        }
    })
})

router.post('/',(req,res)=>{
    var emp=new Employee({
        name:req.body.name,
        position:req.body.position,
        office:req.body.office,
        salary:req.body.salary
    });
    emp.save((err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log("Error in saving data")
        }
    })
})

router.put('/:id',(req,res)=>{
       
        var emp={
            name:req.body.name,
            position:req.body.position,
            office:req.body.office,
            salary:req.body.salary,
        };

        Employee.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,doc)=>{
            if(!err){res.send(doc);}
            else{console.log('Error in employee update ')}
        })
})

router.delete('/:id',(req,res)=>{

    Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{
            console.log('Error in deleting employee')
        }
    })
})
module.exports=router;
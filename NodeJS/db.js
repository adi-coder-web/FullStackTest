const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/Crud',(err)=>{
     
    if(!err){
        console.log("MongoDB connection success  yessss")
    }
    else{
        console.log("Error in DB connections")
    }
})

module.exports=mongoose;
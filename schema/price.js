const mongoose=require('mongoose');


const pro =new mongoose.Schema({
    
    id:{
        type:String,
        required:true,
        min:10,
        max:10,
        unique: true
    },
    name:{
        type:String,
        required:true,
        min:5,
        max:50
    },
    image:{
        type:String,
        required:true,
        min:10,
        max:300
    },
    des:{
        type:String,
        min:5,
        max:50
    },
    price:{
        type:Number,
        required:true,
    }

});


module.exports=mongoose.model("item",pro);
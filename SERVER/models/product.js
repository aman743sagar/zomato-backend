let mongoose= require('mongoose')
let ProductSchema=mongoose.Schema({
    name:{
        type:String
    },
    descriptions:{
        type:String
    },
    price:{
        type:Number
    },
    image:{
        type:String
    },
    restaurant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Restaurant"
    }
    
})
let Product=mongoose.model('Product',ProductSchema)
module.exports=Product
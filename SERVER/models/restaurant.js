let mongoose= require('mongoose')
let restroSchema=mongoose.Schema({
    name:{
        type:String
    },
    address:{
        type:String
    },
    descriptions:{
        type:String
    },
    ContactNo:{
        type:Number
    },
    image:{
        type:String
    }
})
let Restaurant=mongoose.model('Restaurant',restroSchema)
module.exports=Restaurant
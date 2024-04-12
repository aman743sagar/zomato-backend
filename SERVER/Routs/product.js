let express=   require('express')
let router =  express.Router()
let Product= require('../models/product')
let Restaurant=require('../models/restaurant')
///// to fill data in the database
router.post('/proud',  async(req,res)=>{
   try{
       const {name,descriptions,price,image,restroId}=req.body;
       const restaurant=await Restaurant.findById(restroId);
       console.log(restaurant,'rrrrrr')
       if(!restaurant){
        return res.status(404).json({message:'Restaurant not found'})
       }
       const product=new Product({
        name,
        descriptions,
        price,
        image,
        restaurant:restroId
       })
       await product.save();

       return res.status(201).json(product)
   }
   catch{
       console.log(err)
       return res.status(500).json({message:"server errrror"})
   }
})
//  all restaurant find
// router.get('/proud', async(req ,res)=>{
//    try{
//        let product=    await Product.find()
//        console.log(product,"rrrrrrrrrrrrrrrrrrrrrrrrr");
//        if(product){
//             return res.send(Product)
//        }
//        else{
//           return  res.send('prod not found')
//        }
//    }
//    catch{
//          res.send('errr')
//    }
// })


router.get('/proud',async(req,res)=>{
   let p=    await  Product.find()
   if(!p){
    return res.send('product not fount')
   }
   return res.send(p)
//    res.send(p)

})





//////resturant find by using id
router.get('/proud/:id',async(req,res)=>{
    try{
        let product=await Product.findById(req.params.id)
        if(!restaurant){
            return res.send("product not found")
        }else{
            return res.send(product)

        }
    }catch{
          res.send('err')
    }
})

router.patch('/proud/:id', async(req,res)=>{
    try{
       let product=    await  Product.findByIdAndUpdate(req.params.id, req.body, {new:true})
       if(!product){
        return res.send('not found')
       }
       else{
        return res.send(product)
       }

    }
    catch{
        res.send('errr')
    }
})
router.delete('/restro/:id', async(req,res)=>{
    try{
       let product=    await  Product.findByIdAndDelete(req.params.id)
       if(!product){
        return res.send('not found')
       }
       else{
        return res.send('deletedddd')
       }

    }
    catch{
        res.send('errr')
    }
      

})
module.exports=router
let express=require('express')
let mongoose=require('mongoose')
let restroRouter=require('./SERVER/Routs/restaurant')
let productRouter=require('./SERVER/Routs/product')
let loginRouter=require('./SERVER/Routs/login')
let authRouter= require('./SERVER/Routs/auth')
let cors= require('cors')
mongoose.connect('mongodb://127.0.0.1:27017/zomato')

.then(()=>{
    console.log('db')
})
.catch((err)=>{
    console.log(err)
})
let app=express()
app.use(cors())
app.use(express.json())
app.use('/api',restroRouter)
app.use('/api',productRouter)
app.use('/api',authRouter)
app.use('/api',loginRouter)

let port=7000

app.listen(port,()=>{
    console.log(`server running on ${port}`)
})
const mongoose=require('mongoose')

const connectDB=()=>{
    mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost:27017/contact-manager', //step 2
    { useNewUrlParser: true, useUnifiedTopology: true ,useCreateIndex:true})
    .then(()=>{
        console.log('connect to DB')
    })
    .catch((err)=>{
        console.log(err)
    }) 
}
module.exports=connectDB

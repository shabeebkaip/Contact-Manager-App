const express       = require('express')
const cors          =require('cors')
const connectDB     = require('./config/database')
const router        = require('./config/routes')
const app           = express()
const port          = process.env.PORT ||  3020  //step 1 
const path          = require('path')
// connect to mongo database
connectDB() 
//connect localhosts
app.use(cors())
// express to parse json
app.use(express.json())
app.use('/', router)

//step 3
app.use(express.static(path.join(__dirname,"client/build"))) 
app.get("*",(req,res) => { 
    res.sendFile(path.join(__dirname + "/client/build/index.html")) 
})

app.listen(port, () => {
    console.log('listening on port', port)
})
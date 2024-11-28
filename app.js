const express = require ('express')
const { default: mongoose } = require('mongoose')


const app = express()
app.use(express.json())

const connectDb=async()=>{
    try{
 await mongoose.connect("mongodb://localhost:27017/user")
console.log("Database is connected")
    } catch (err){
        console.log("error while connecting database ",err)
    }
}
connectDb()

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.post('/product', (req, res) => {
    console.log(req.body  )
    res.send("Post")
})

app.listen(5000, () => {
    console.log("app is running at port number 5000")
})


const express = require('express')
const connectdb = require('./config/connectDB')
require('dotenv').config()
//console.log()
const app = express()
app.use(express.json())
connectdb()


app.use("/users", require("./Routes/userRoute"))


const port = 5000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
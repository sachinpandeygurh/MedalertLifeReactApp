const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
require('./db/config')
const Users = require('./db/users')
const Owner = require('./db/login')
const app = express()

app.use(express.json())
app.use(cors())

//view BookingData
app.get('/BookingData', async(req, resp)=>{
    const user = await Users.find({})
    // console.log("data", data)
    resp.send(user)
    
})

app.post('/BookingData', async(req, resp)=>{
    const user = new Users(req.body);
    let result = await user.save()
    // console.log("data", data)
    resp.send(result)
    
})
// app.post('/owner', async(req, resp)=>{
//     const user = new Owner(req.body);
//     let result = await user.save()
//     // console.log("data", data)
//     resp.send(result)
    
// })

app.get('/owner', async(req, resp)=>{
    const user = await Owner.find({})
    resp.send(user)
    
})


app.listen(5000)
const dotenv = require("dotenv");

const express = require("express");
const cors = require("cors");
const Query = require("./db/model/Contact");
const ConnectDb = require("./db/config");
const Orders = require("./db/model/users");

dotenv.config();

const PORT=process.env.PORT;
const Owner = require("./db/model/login");
const app = express()
ConnectDb();
app.use(express.json());
app.use(cors());

// app.use(Router,'/api/auth')
// app.use(Router,'/api/contact')
// app.use(Router,'/api/booking')

app.use('/api/auth',require('./routes/auth'));
app.use('/api/booking',require('./routes/booking'));
app.use('/api/contact',require('./routes/contact'));

app.listen(PORT,()=>{
  console.log('app is listening to port',PORT)
})

const dotenv = require("dotenv");

const express = require("express");
var bodyParser = require('body-parser')
const cors = require("cors");
const Query = require("./db/model/Contact");
const ConnectDb = require("./db/config");
const Orders = require("./db/model/users");

dotenv.config();

var urlencodedParser = bodyParser.urlencoded({ extended: false })
const PORT=process.env.PORT;
const Owner = require("./db/model/login");
const app = express()
ConnectDb();
app.use(express.json());
app.use(cors());

app.use('/api/auth', urlencodedParser ,require('./routes/auth'));
app.use('/api/booking',urlencodedParser , require('./routes/booking'));
app.use('/api/contact',urlencodedParser , require('./routes/contact'));

app.listen(PORT,()=>{
  console.log('app is listening to port',PORT)
})

const express = require("express");
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql')

const app = express();



app.use(express.json())
app.use(cors());
app.use(bodyparser.json());

const customerRouter = require('./router/customerRouter')
const adminRouter = require('./router/adminRouter')
// const orderRoute = require('./router/orderRouter')
// const orderitemRoute = require('./router/orderitemRouter')
app.use('/api/user', customerRouter)
app.use('/api/admin', adminRouter)
// app.use('/api/admin',orderRoute)
// app.use('/api/admin',orderitemRoute)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Node server started by using nodemon"))
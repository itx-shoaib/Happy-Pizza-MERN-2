const express = require("express");
const router = express.Router();
const dbconfig = require('../db');

// Router 1: http://localhost:5000/api/superadmin/getliveresturants
// Status:
router.get('/getliveresturants',(req,res)=>{
    let qr = `Select * from resturant where status = "true"`
    dbconfig.query(qr,(err,result)=>{
        if (!err) {
            res.json({
                data:result
            })
        } else {
            res.status(404).json({
                error:err
            })
        }
    })
})

// Router 2 : http://localhost:5000/api/superadmin/getallorders
// Status: working
router.get('/getallorders',(req,res)=>{
    let qr = `Select * from cart INNER JOIN resturant on cart.resturant_ID = resturant.ID`
    dbconfig.query(qr,(err,result)=>{
        if (!err) {
            res.json({
                data:result
            })
        } else {
            res.status(404).json({
                error:err
            })
        }
    })
})

module.exports = router
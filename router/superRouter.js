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

// Router 3: http://localhost:5000/api/superadmin/addpage
// Status: working
router.post('/addpage',(req,res)=>{
    let title = req.body.title;
    let description = req.body.description;
    let status = req.body.status;

    let qr = `Insert into pages (title,description,status)
    values ('${title}','${description}','${status}')`
    dbconfig.query(qr,(err,result)=>{
        if (!err) {
            res.status(200).json({
                message:"data has been inserted"
            })
        } else {
            res.status(404).json({
                error:err
            })
        }
    })
})

// router 4: http://localhost:5000/api/superadmin/getallpages
// status: working
router.get('/getallpages',(req,res)=>{
    let qr =  `Select * from pages`
    dbconfig.query(qr,(err,result)=>{
        if (!err) {
            if (result.length > 0) {
                res.status(200).json({
                    data:result
                })
            } else {
                res.status(404).json({
                    error:err
                })
            }
        } else {
            res.status(404).json({
                error:err
            })
        }
    })
})

// Router 5: http://localhost:5000/api/superadmin/deletepage
// status: working
router.post("/deletepage",(req,res)=>{
    let ID = req.body.ID

    let qr = `delete from pages 
    where ID = '${ID}'`
    dbconfig.query(qr,(err,result)=>{
        if (!err) {
            res.status(200).json({
                message:"Page has been deleted"
            })
        } else {
            res.status(404).json({
                error:err
            })
        }
    })
})

module.exports = router
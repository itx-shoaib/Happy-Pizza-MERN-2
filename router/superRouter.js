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

// Router 6: http://localhost:5000/api/superadmin/editpage
// Status: working
router.post("/editpage",(req,res)=>{
    let ID = req.body.ID;
    let title = req.body.title;
    let description = req.body.description;

    let qr = `update pages
    set title = '${title}', description ='${description}'
    where ID = ${ID}`
    dbconfig.query(qr,(err,result)=>{
        if (!err) {
            res.status(200).json({
                message:"Page has been upadated"
            })
        } else {
            res.status(404).json({
                error:err
            })
        }
    })
})

// router 7: http://localhost:5000/api/superadmin/updatepagestatus
// Status: working
router.post('/updatepagestatus',(req,res)=>{
    let ID = req.body.ID;
    let status = req.body.status;

    let qr = `Update pages 
    set status = '${status}'
    where ID = ${ID}`
    dbconfig.query(qr,(err,result)=>{
        if (!err) {
            res.status(200).json({
                message:"page status has been update"
            })
        } else {
            res.status(404).json({
                error:err
            })
        }
    })
})

// Router 8:  http://localhost:5000/api/superadmin/orderreport
// Status: working
router.get('/orderreport',(req,res)=>{
    let qr = `SELECT * FROM cart INNER join customer on cart.customer_Id = customer.customer_Id`;

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

// Router 9: http://localhost:5000/api/superadmin/getallresturants
// status : working
router.get('/getallresturants',(req,res)=>{
    let qr = `Select * from resturant`
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

// Router 9: http://localhost:5000/api/superadmin/deleteresturant
// Status: working
router.post('/deleteresturant',(req,res)=>{
    let ID = req.body.ID;

    let qr = `delete from resturant 
    where ID = ${ID} `
    dbconfig.query(qr,(err,result)=>{
        if (!err) {
            res.status(200).json({
                message:"Resturant has been deleted"
            })
        } else {
            res.status(404).json({
                error:err
            })
        }
    })
})

module.exports = router
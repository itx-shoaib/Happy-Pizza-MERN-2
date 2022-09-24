const express = require("express");
const { body } = require("express-validator");
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

// Router 10: http://localhost:5000/api/superadmin/deactivateresturant
// Status: working
router.post('/deactivateresturant',(req,res)=>{
    let ID = req.body.ID;

    let qr = `update resturant
    set status = 'false'
    where ID = ${ID}`

    dbconfig.query(qr,(err,result)=>{
        if (!err) {
            res.status(200).json({
                message:"Dectivated the resturant"
            })
        } else {
            res.status(404).json({
                error:err
            })
        }
    })
})

// router 11: http://localhost:5000/api/superadmin/activateresturant
// Status: working
router.post('/activateresturant',(req,res)=>{
    let ID = req.body.ID;

    let qr = `update resturant
    set status = 'true'
    where ID = ${ID}`

    dbconfig.query(qr,(err,result)=>{
        if (!err) {
            res.status(200).json({
                message:"Activated the resturant"
            })
        } else {
            res.status(404).json({
                error:err
            })
        }
    })
})

// Router 12: http://localhost:5000/api/superadmin/editresturant
// Status: 
router.post('/editresturant',(req,res)=>{
    let ID = req.body.ID;
    let name = req.body.name;
    let description = req.body.description;
    let address = req.body.address;
    let phone = req.body.phone;
    let charges = req.body.charges;
    let minimum_order = req.body.minimum_order;
    let average_order = req.body.average_order;
    let time = req.body.time;
    let owner_name = req.body.owner_name;
    let owner_email = req.body.owner_email;
    let owner_address = req.body.owner_address;
    let owner_phone = req.body.owner_phone;
    let domain = req.body.domain;
    let primary_color = req.body.primary_color;
    let secondary_color = req.body.secondary_color;
    let app_name = req.body.app_name;
    let delivery_min = req.body.delivery_min
    let location_search = req.body.location_search;
    let stripe_connect = req.body.stripe_connect
    let enable_stripe = req.body.enable_stripe;
    let stripe_key = req.body.stripe_key;
    let stripe_secret = req.body.stripe_secret;
    let map_api = req.body.map_api;
    let analytics = req.body.analytics;
    let client_id = req.body.client_id;
    let client_secret = req.body.client_secret;
    let redirect = req.body.redirect;
    let fclient_id = req.body.fclient_id;
    let fclient_secret = req.body.fclient_secret;
    let fclient_redirect = req.body.fclient_redirect;
    let app_id = req.body.app_id;
    let rapi_key = req.body.rapi_key;
    let sms = req.body.sms;
    let optomany_enabled = req.body.optomany_enabled;
    let oclient_id = req.body.oclient_id;
    let oclient_secret = req.body.oclient_secret;
    let oterminal_id = req.body.oterminal_id;
    let otest_mode = req.body.otest_mode;

    let qr = `update resturant
    set name = '${name}',
    description = '${description}'
    address = '${address}',
    phone = '${phone}',
    charges = '${charges}',
    minimum_order = ${minimum_order},
    average_order = ${average_order},
    time = ${time},
    owner_name = '${owner_name}',
    owner_email = '${owner_email}',
    owner_address = '${owner_address}',
    owner_phone = '${owner_phone}',
    domain = '${domain}',
    primary_color = '${primary_color}',
    secondary_color = '${secondary_color}',
    app_name = '${app_name}',
    delivery_min = '${delivery_min}',
    location_search = '${location_search}',
    stripe_connect = '${stripe_connect}',
    enable_stripe = '${enable_stripe}',
    stripe_key = '${stripe_key}',
    stripe_secret = '${stripe_secret}',
    map_api = '${map_api}',
    analytics = '${analytics}',
    client_id = '${client_id}',
    client_secret = '${client_secret}',
    redirect = '${redirect}',
    fclient_id = '${fclient_id}',
    fclient_secret = '${fclient_secret}',
    fclient_redirect = '${fclient_redirect}',
    app_id = '${app_id}',
    rapi_key = '${rapi_key}',
    sms = '${sms}',
    optomany_enabled = '${optomany_enabled}',
    oclient_id = '${oclient_id}',
    oclient_secret = '${oclient_secret}',
    oterminal_id = '${oterminal_id}',
    otest_mode = '${otest_mode}'
    where ID = ${ID}`

    dbconfig.query(qr,(err,result)=>{
        if (!err) {
            res.status(200).json({
                message:"resturant has been updated"
            })
        } else {
            res.status(404).json({
                error:err
            })
        }
    })
})

module.exports = router
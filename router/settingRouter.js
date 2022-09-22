const express = require("express");
const router = express.Router();
const dbconfig = require('../db');


// Router 1 : Registering the resturant information https://apinodejs.creativeparkingsolutions.com/api/setting/resturantmanagement
// Status
router.post('/resturantmanagement',(req,res)=>{
    let name = req.body.name;
    let description = req.body.description;
    let address = req.body.address;
    let phone = req.body.phone;
    let charges = req.body.charges;
    let minimum_order = req.body.minimum_order;
    let average_order = req.body.average_order;
    let time = req.body.time;
    let owner_name = req.body.owner_name;
    let email = req.body.email;
    let owner_phone = req.body.owner_phone;

    // Writing the first query for the already exist in db.
    let qr = `SELECT * FROM resturant WHERE name = ${name} and address = ${address};`
    dbconfig.query(qr,(err,result)=>{
        if (err) {
            // Writing second query for registering the resturant
            let qr = `insert into resturant(name,description,address,phone,charges,minimum_order,average_order,time,owner_name,email,owner_phone)
            values('${name}','${description}','${address}','${phone}','${charges}',${minimum_order},${average_order},${time},'${owner_name}','${email}','${owner_phone}')`
            dbconfig.query(qr,(err,result)=>{
                if(!err){
                    res.json({
                        message:"Data has been inserted"
                    })
                }
                else{
                    console.log(err,"err")
                }
            })
        } else {
            res.status(404).json({
                message:"Name or address already exist"
            
            })
        }
    })
})


// Router 2: https://apinodejs.creativeparkingsolutions.com/api/setting/loyality
// Status
router.post('/loyality',(req,res)=>{
    let status = req.body.status;
    let redeem = req.body.redeem;
    let points = req.body.points;
    let currency_points= req.body.currency_points;

    let qr = `insert into loyality(status,redeem,points,currency_points)
    values('${status}','${redeem}','${points}','${currency_points}')`
    dbconfig.query(qr,(err,result)=>{
        if(!err){
            res.json({
                message:"Data has been enter"
            })
        }
        else{
            console.log(err,"err")
        }
    })
})

// Router 3: https://apinodejs.creativeparkingsolutions.com/api/setting/referral
// Status:
router.post('/referral',(req,res)=>{
    let status = req.body.status;
    let new_customer = req.body.new_customer;
    let existing_customer = req.body.existing_customer;

    let qr = `Insert into referral(status,new_customer,existing_customer)
    values('${status}','${new_customer}','${existing_customer}')`
    dbconfig.query(qr,(err,result)=>{
        if (!err) {
            res.json({
                message:"data has been inserted"
            })
        } else {
            console.log(err,"err")
        }
    })
})

// Router 4: https://apinodejs.creativeparkingsolutions.com/api/setting/config
// Status:
router.post('/config',(req,res)=>{
    let order_time = req.body.order_time;
    let otp = req.body.otp;

    let qr = `Insert into config(order_time,otp)
    values('${order_time}','${otp}')`
    dbconfig.query(qr,(err,result)=>{
        if (!err) {
            res.json({
                message:"data has been inserted"
            })
        } else {
            console.log(err,"err")
        }
    })
})

// router 5: https://apinodejs.creativeparkingsolutions.com/api/setting/menutype
// status:
router.post('/menutype',(req,res)=>{
    let lowercase = req.body.lowercase;
    let uppercase  = req.body.uppercase;
    let capitalized = req.body.capitalized;

    let qr = `insert into menutype(lowercase,uppercase,capitalized)
    values('${lowercase}','${uppercase}','${capitalized}')`
    dbconfig.query(qr,(err,result)=>{
        if (!err) {
            res.json({
                message:"data has been inserted"
            })
        } else {
            console.log(err,"err")
        }
    })
})

// Router 6: https://apinodejs.creativeparkingsolutions.com/api/setting/apps
// Status:
router.post("/apps",(req,res)=>{
    let title = req.body.title;
    let description = req.body.description;
    let api_key = req.body.api_key;
    let main_printer = req.body.main_printer;
    let standard_printer = req.body.standard_printer;
    let kitchen_printer = req.body.kitchen_printer;
    let standard_print = req.body.standard_print;
    let main_print = req.body.main_print;
    let kitchen_print = req.body.kitchen_print;

    let qr = `Insert into app(title,description,api_key,main_printer,kitchen_printer,standard_printer,standard_print,main_print,kitchen_print)
    values('${title}','${description}','${api_key}','${main_printer}','${kitchen_printer}','${standard_printer}','${standard_print}','${main_print}','${kitchen_print}')`
    dbconfig.query(qr,(err,result)=>{
        if (!err) {
            res.json({
                message:"Data has been inserted"
            })
        } else {
            console.log(err,"err")
        }
    })
})

module.exports = router
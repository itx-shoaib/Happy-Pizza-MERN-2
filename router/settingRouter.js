const express = require("express");
const router = express.Router();
const dbconfig = require('../db');
const multer = require("multer")

// Image storage connfig
var imgconfig = multer.diskStorage({
    destination:function(req,file,callback){
        callback(null,'./uploads');
    },
    filename:function(req,file,callback){
        callback(null,`image-${Date.now()}.${file.originalname}`)
    }
});

// image filter
const isImage =(req,file,callback)=>{
    if (file.mimetype.startsWith("image")) {
        callback(null,true)
    } else {
        callback(null,Error("only image is allowed"))
    }
}

var upload = multer({
    storage:imgconfig,
    fileFilter:isImage
})

// Router 1 api is for super admin and admin for adding the resturnat.
// Router 1 : Registering the resturant information https://apinodejs.creativeparkingsolutions.com/api/setting/addresturantmanagement
// Status
router.post('/addresturant',(req,res)=>{
    let name = req.body.name;
    // let description = req.body.description;
    // let address = req.body.address;
    // let phone = req.body.phone;
    // let charges = req.body.charges;
    // let minimum_order = req.body.minimum_order;
    // let average_order = req.body.average_order;
    // let time = req.body.time;
    let owner_name = req.body.owner_name;
    let owner_email = req.body.owner_email;
    let owner_address = req.body.owner_address;
    let owner_phone = req.body.owner_phone;
    let domain = req.body.domain;
    let primary_color = req.body.primary_color;
    let secondary_color = req.body.secondary_color;
    let app_name = req.body.app_name;
    let delivery_min = req.body.delivery_min
    // let location_search = req.body.location_search;
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
    
    let qr = `Select * from resturant where owner_email = "${owner_email}" or name = "${name}"`
    dbconfig.query(qr,(err,result)=>{
        if (!err) {
            if (result.length ===0) {
                let qr = `INSERT INTO resturant(owner_name, owner_email,owner_address,owner_phone, domain,primary_color,secondary_color,app_name,delivery_min,location_search,stripe_connect, enable_stripe,stripe_key,stripe_secret,map_api,analytics,client_id,client_secret,redirect, fclient_id,fclient_secret,fclient_redirect,app_id,rapi_key,sms,optomany_enabled,oclient_id, oclient_secret,oterminal_id,otest_mode,name,description,address,phone,charges,minimum_order,average_order,time,status) VALUES ('${owner_name}', '${owner_email}', '${owner_address}', '${owner_phone}', '${domain}', '${primary_color}', '${secondary_color}', '${app_name}', '${delivery_min}', '', '${stripe_connect}', '${enable_stripe}', '${stripe_key}', '${stripe_secret}', '${map_api}', '${analytics}', '${client_id}', '${client_secret}', '${redirect}', '${fclient_id}', '${fclient_secret}', '${fclient_redirect}', '${app_id}', '${rapi_key}', '${sms}', '${optomany_enabled}', '${oclient_id}', '${oclient_secret}', '${oterminal_id}', '${otest_mode}','${name}','','','','','','','','true');`
                dbconfig.query(qr,(err,result1)=>{
                    if (result1.affectedRows > 0) {
                        // res.json({
                        //     message:"data has been inserted"
                        // })
                        let qr =  `SELECT * FROM customer
                    WHERE email = '${owner_email}'`
                    dbconfig.query(qr,(err,result)=>{
                        if (!err) {
                            if (result.length <=0) {
                                let qr = `insert into customer(name,email,number,password,role,resturant_ID)
                                        values('${owner_name}','${owner_email}','${owner_phone}','admin1234',1,${result1.insertId})`
                                dbconfig.query(qr,(err,result)=>{
                                        if (err) {
                                            console.log(err,'errs');
                                        }
                                        else {  
                                            res.send({
                                            data:result
                                            });
                                        }
                                    })
                }
                else {
                    return res.status(400).json({message:"Email already exist"})
                }
            }
            else {  
                console.log(err,'errs');
            }
        })
                    } else {
                        res.status(404).json({
                            "message":"in",
                            error:err

                        })
                    } 
                })
  
            } else {
                res.json({
                    message:"Email already existed"
                })
            }
        } else {
            res.json({
                "message":err,
                error:err
            })
        }
    })



})


// Router:
// Status:
router.post('/resturantmanagement',upload.fields([{name:"photo",maxCount:1},
{name:"cimage",maxCount:1},
{name:"rimage",maxCount:1}
]),(req,res)=>{
    let description  = req.body.description;
    let address = req.body.address;
    let phone = req.body.phone;
    let charges = req.body.charges;
    let minimum_order = req.body.minimum_order;
    let average_order = req.body.average_order;
    let time = req.body.time;
    let id = req.body.id;
    let photo = req.file.path;
    let cimage = req.cimage.path;
    let rimage = req.rimage.path;

    let qr = `update resturant
    set minimum_order = '${minimum_order}', description ='${description}',
    average_order = '${average_order}',
    time = '${time}',
    address = '${address}',
    phone = '${phone}',
    charges = '${charges}',
    image = '${photo}',
    cimage= '${cimage}',
    rimage = '${rimage}'
    where ID = ${id}`
    dbconfig.query(qr,(err,result)=>{
        if (!err) {
            res.status(200).json({
                message:"Data has been updated"
            })
        } else {
            res.status(404).json({
                error:err
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
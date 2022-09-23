const express = require("express");
const router = express.Router();
const dbconfig = require('../db');

// Router 1: http://localhost:5000/api/superadmin/addresturant
// Status:
router.post('/addresturant',(req,res)=>{
    let name = req.body.name;
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
    
    let qr = `Select * from superresturant where owner_email = "${owner_email}" or name = "${name}"`
    dbconfig.query(qr,(err,result)=>{
        if (!err) {
            if (result.length <=0) {
                let qr = `INSERT INTO superresturant(name, owner_name, owner_email,owner_address,owner_phone, domain,primary_color,secondary_color,app_name,delivery_min,location_search,stripe_connect, enable_stripe,stripe_key,stripe_secret,map_api,analytics,client_id,client_secret,redirect, fclient_id,fclient_secret,fclient_redirect,app_id,rapi_key,sms,optomany_enabled,oclient_id, oclient_secret,oterminal_id,otest_mode) VALUES ('${name}', '${owner_name}', '${owner_email}', '${owner_address}', '${owner_phone}', '${domain}', '${primary_color}', '${secondary_color}', '${app_name}', '${delivery_min}', '${location_search}', '${stripe_connect}', '${enable_stripe}', '${stripe_key}', '${stripe_secret}', '${map_api}', '${analytics}', '${client_id}', '${client_secret}', '${redirect}', '${fclient_id}', '${fclient_secret}', '${fclient_redirect}', '${app_id}', '${rapi_key}', '${sms}', '${optomany_enabled}', '${oclient_id}', '${oclient_secret}', '${oterminal_id}', '${otest_mode}');`
                if (!err) {
                    res.json({
                        message:"data has been inserted"
                    })
                } else {
                    res.status(404).json({
                        message:"somehting wrong"
                    })
                }   
            } else {
                res.json({
                    message:"Email already existed"
                })
            }
        } else {
            res.json({
                error:err
            })
        }
    })



})

module.exports = router
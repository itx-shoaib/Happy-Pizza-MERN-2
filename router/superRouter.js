const { response } = require("express");
const express = require("express");
const { body } = require("express-validator");
const { off } = require("../db");
const router = express.Router();
const dbconfig = require('../db');

// Router 1: https://apinodejs.creativeparkingsolutions.com/api/superadmin/getliveresturants
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

// Router 2 : https://apinodejs.creativeparkingsolutions.com/api/superadmin/getallorders
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

// Router 3: https://apinodejs.creativeparkingsolutions.com/api/superadmin/addpage
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

// router 4: https://apinodejs.creativeparkingsolutions.com/api/superadmin/getallpages
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

// Router 5: https://apinodejs.creativeparkingsolutions.com/api/superadmin/deletepage
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

// Router 6: https://apinodejs.creativeparkingsolutions.com/api/superadmin/editpage
// Status: working
router.post("/editpage",(req,res)=>{
    let ID = req.body.ID;
    let title = req.body.updatetitle;
    let description = req.body.updatedescription;

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

// Router 14: https://apinodejs.creativeparkingsolutions.com/api/superadmin/editpageitem/:ID
// Status:
router.get('/editpageitem/:ID',(req,res)=>{
    let ID = req.params.ID;

    let qr = `Select * from pages where ID = ${ID}`
    dbconfig.query(qr,(err,result)=>{
        if (!err) { 
            res.status(200).json({
                // ID:result[0]['ID'],
                // title:result[0]['title'],
                // description:result[0]['description']
                data:result[0]
            })
        } else {
            res.status(404).json({
                error:err
            })
        }
    })
}
)

// router 7: https://apinodejs.creativeparkingsolutions.com/api/superadmin/updatepagestatus
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

// Router 8:  https://apinodejs.creativeparkingsolutions.com/api/superadmin/orderreport
// Status: working
router.get('/orderreport',(req,res)=>{
    let qr = `SELECT *,customer.name as "cname",cart.DateTime as "datetime" FROM cart INNER join customer on cart.customer_Id = customer.customer_Id 
    INNER join resturant on cart.resturant_ID = resturant.ID`;

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

// Router 9: https://apinodejs.creativeparkingsolutions.com/api/superadmin/getallresturants
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

// Router 9: https://apinodejs.creativeparkingsolutions.com/api/superadmin/deleteresturant
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

// Router 10: https://apinodejs.creativeparkingsolutions.com/api/superadmin/deactivateresturant
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

// router 11: https://apinodejs.creativeparkingsolutions.com/api/superadmin/activateresturant
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

// Router 12: https://apinodejs.creativeparkingsolutions.com/api/superadmin/editresturant
// Status: 
router.post('/editresturant/:id',(req,res)=>{
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

// Router:
// Status:
router.get('/geteditresturant/:id',(req,res)=>{
    let id = req.params.id;

    let qr = `Select * from resturant where ID = ${id}`
    dbconfig.query(qr,(err,result)=>{
        if (!err) {
            res.status(200).json({
                data:result[0]
            })
        } else {
            res.status(404).json({
                error:err
            })
        }
    })
})

// router 13: https://apinodejs.creativeparkingsolutions.com/api/superadmin/resturantcount
// status: working
router.get('/resturantcount',(req,res)=>{
    let qr = `Select count(*) as 'total' from resturant`

    dbconfig.query(qr,(err,result)=>{
        if (!err) {
            res.status(200).json({
                data:result[0]['total']
            })
        } else {
            res.status(404).json({
                error:err
            })
        }
    })
})

// Router: https://apinodejs.creativeparkingsolutions.com/api/superadmin/openclose
// 
router.post('/openclose',(req,res)=>{
    let online = req.body.online;
    let offline = req.body.offline;
    let statement = req.body.statment;
    let to = req.body.to;
    let from = req.body.from;
    let id = req.body.id;

    let qr = `Select count(*) as 'total' from open 
    Where resturant_ID = ${id}`
    dbconfig.query(qr,(err,result1)=>{

        if (!err) {
            if (result1[0]['total']=== 0) {
                            let qr = `Insert into open(online,offline,statement,dateto,datefrom,resturant_ID)
            values('${online}','${offline}','${statement}','${to}','${from}',${id})`
            dbconfig.query(qr,(err,result)=>{
                if (!err) {
                    res.status(200).json({
                        data:result
                    })
                } else {
                    res.status(404).json({
                        error:err
                    })
                }
            })
            } else {
                            let qr = `Update open set online = '${online}',offline='${offline}',statement='${statement}',dateto='${to}',datefrom='${from}'
            where resturant_ID = ${id}`
            dbconfig.query(qr,(err,result)=>{
                if (!err) {
                    res.status(200).json({
                        data:result
                    })
                } else {
                    res.status(404).json({
                        error:err
                    }) 
                }
            })

        } 
    }
    else {
          res.status(404).json({
            error:err
          })  

        }
    })
})

// Router: https://apinodejs.creativeparkingsolutions.com/api/superadmin/getopenclose
// Status:
router.post('/getopenclose',(req,res)=>{
    let id = req.body.id;

    let qr = `Select * from open where resturant_ID = ${id}`
    dbconfig.query(qr,(err,result)=>{
        if (!err) {
            res.status(200).json({
                data:result
            })
        } else {
            res.status(404).json({
                error:err
            })
        }
    })
})


// Router: https://apinodejs.creativeparkingsolutions.com/api/superadmin/closeshift
// Status:
router.post('/closeshift',(req,res)=>{
    let status = "false";
    let id = req.body.id;

    let qr = `Select * from open 
    Where resturant_ID = ${id}`
    dbconfig.query(qr,(err,result1)=>{

        if (!err) {
            if (result1.lenght<=0) {
                            let qr = `Insert into open(online,offline,statement,dateto,datefrom,resturant_ID)
            values('false','${status}','Nil','Nil','Nil',${id})`
            dbconfig.query(qr,(err,result)=>{
                if (!err) {
                    res.status(200).json({
                        data:result
                    })
                } else {
                    res.status(404).json({
                        error:err
                    })
                }
            })
            } else {
                            let qr = `Update open set offline='${status}'
            where resturant_ID = ${id}`
            dbconfig.query(qr,(err,result)=>{
                if (!err) {
                    res.status(200).json({
                        data:result
                    })
                } else {
                    res.status(404).json({
                        error:err
                    }) 
                }
            })

        } 
    }
    else {
          res.status(404).json({
            error:err
          })  

        }
    })
})

// Login as route path: http://localhost:5000/api/superadmin/loginas
router.post("/loginas",(req,res)=>{
    let id = req.body.id;

    let qr = `Select count(*) as 'total' from customer where resturant_ID = ${id} `
    dbconfig.query(qr,(err,result)=>{
        if (!err) {
            // res.json({
            //     data:result[0]['total']
            // })
            if (result[0]['total'] > 0) {
                let qr = `Select * from customer where resturant_ID = ${id}`
    dbconfig.query(qr,(err,results)=>{
        if (!err) {
            if(results.lenght === 0){
                res.status(404).json({
                    message:"You are not allowed"
                })
            }
            else{
                let qr = `SELECT * FROM customer 
                where email = '${results[0]['email']}' and password = '${results[0]["password"]}'`
                dbconfig.query(qr,(err,result)=>{
                    if (!err) {
                        res.status(200).json({
                            loginas:"true",
                            data:result
                        })
                    } else {
                        res.status(404).json({
                            message:"Credentials are not correct"
                        })
                    }
                })
            }

        } else {
            res.status(404).json({
                message:"No data found"
            })
        }
    })
            } else {
                res.status(404).json({
                    loginas:"false",
                    message:"No data found"
                })
            }
        } else {
            res.status(404).json({
                message:"No data found"
            })
        }
    })

    
})

// Router for addrank / Path:
router.post("/addrank",(req,res)=>{
    let id = req.body.id;
    let name = req.body.name;
    let value = req.body.value;
    let status = req.body.status;

    let qr = `INSERT INTO rank(resturant_ID,name,value,status) 
    VALUES (${id},'${name}','${value}','${status}')`
    dbconfig.query(qr,(err,result)=>{
        if (!err) {
            res.status(200).json({
                message:"Data has been saved"
            })
            
        } else {
            res.status(500).json({
                message:"Something went wrong"
            })
        }
    })
})

// Router for getranks / path:
router.post("/getranks",(req,res)=>{
    let id = req.body.id;

    let qr = `Select * from rank where resturant_ID = ${id}`
    dbconfig.query(qr,(err,result)=>{
        if (!err) {
            res.status(200).json({
                data:result
            })
        } else {
            res.status(500).json({
                message:"Something went wrong"
            })
        }
    })
})

// Router for editrank / path:
router.post("/editrank",(req,res)=>{
    let id = req.body.id;
    let name = req.body.name;
    let value = req.body.value;
    let status = req.body.status;

    let qr = `UPDATE rank SET name='${name}',
    value='${value}',
    status='${status}'
    WHERE ID=${id}`
    dbconfig.query(qr,(err,result)=>{
        if (!err) {
            res.status(200).json({
                message:"Data has been updated"
            })
        } else {
            res.status(500).json({
                message:"Something went wrong"
            })
        }
    })
})

// Router for addtranslation
router.post("/addtranslation",(req,res)=>{
    let id = req.body.id;
    let groupvalidation = req.body.groupvalidation;
    let keyinvalid = req.body.keyinvalid;
    let value = req.body.value;
    let namespace = req.body.namespace;

    let qr = `INSERT INTO translation(resturant_ID, groupvalidation, keyinvalid, value, namespac) VALUES ('${id}','${groupvalidation}','${keyinvalid}','${value}','${namespace}')`
    dbconfig.query(qr,(err,result)=>{
        if (!err) {
            res.status(200).json({
                message:"Data has been inserted"
            })
        } else {
            res.status(500).json({
                message:"Something went wrong"
            })
        }
    })
})

// Router for edittranslation
router.post("/edittranslation",(req,res)=>{
    let id = req.body.id;
    let value = req.body.value;

    let qr = `UPDATE translation SET value='[value-5]' WHERE ID=${id}`
    dbconfig.query(qr,(err,result)=>{
        if (!err) {
            res.status(200).json({
                message:"Data has been updated"
            })
        } else {
            res.status(500).json({
                message:"Something went wrong"
            })
        }
    })
})

module.exports = router
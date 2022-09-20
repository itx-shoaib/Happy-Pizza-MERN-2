const express = require("express");
const router = express.Router();
const dbconfig = require('../db');


// Router 1 : Registering the resturant information http://localhost:5000/api/setting/resturantmanagement
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


module.exports = router
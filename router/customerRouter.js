const express = require("express");
const router = express.Router();
const { check, validationResult  } = require('express-validator');
const bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')
const dbconfig = require('../db');

// ROUTER 1: Register a customer by POST method PATH: http://localhost:5000/api/user/register
// STATUS: WORKING
router.post('/register',[
    check("email","Enter the valid email").isEmail(),
    check("password","Your password is less then 6 digits").isLength({
        min:6
    })
],async(req,res)=>{

    // const secPass = await bcrypt.hash(req.body.password,10);
    let name = req.body.name;
    let email = req.body.email;
    let number = req.body.number;
    let password = req.body.password;


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array()});
    }

    const token = JWT.sign({
        email
    }, "fn789disdhcsc87scsdcsdb4", {
        expiresIn: 3600000
    })


    let qr =  `SELECT * FROM customer
                    WHERE email = '${email}'`
    dbconfig.query(qr,(err,result)=>{
            if (!err) {
                if (result.length <=0) {
                      let qr = `insert into customer(name,email,number,password)
                                values('${name}','${email}','${number}','${password}')`
                            dbconfig.query(qr,(err,result)=>{
                                    if (err) {
                                        console.log(err,'errs');
                                    }
                                    else {  
                                        // res.json({
                                        //     token
                                        // });
                                        res.send({
                                            message : 'Registration successful',
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

    // if (!user) {
    //     return res.status(400).json({error:"Sorry a user with this email already exist"})
    // }
    
    // let qr = await `insert into customer(name,email,number,password)
    // values('${name}','${email}',${number},'${password}')`
    //     dbconfig.query(qr,(err,result)=>{
    //     if (err) {
    //         console.log(err,'errs');
    //     }
    //     else {  
            
    //         res.json({
    //             token
    //         });
    //     }
    // })
   
});


// ROUTER 2: Login a customer by GET method PATH: http://localhost:5000/api/user/login
// STATUS:
router.post('/login',(req,res)=>{

    let email = req.body.email;
    let password = req.body.password;

    // const passwordCompare = bcrypt.compare(password, result[0]['password'])
    // || result[0]['password'] != password
    
    let qr = `SELECT * FROM customer 
                     where email = '${email}'`
    
        dbconfig.query(qr,(err,result)=>{
        if (!err) { 
            if (result.length <=0 || result[0]['password'] != password ) {
                    return res.status(401).json({message:"Incorrect username or password"})
            }
            else if(result[0]['password'] === password) {
                const token = JWT.sign({
                    email
                }, "fn789disdhcsc87scsdcsdb4", {
                    expiresIn: 3600000
                })
                // res.json({
                //         token
                //     });
                res.json({
                    data:result
                })
            }
            else{
                return res.status(401).json({message:"Something went wrong,Please try again later."})
            }
        }
        else {  
            console.log(err,'errs');
        }
    })

    // let user = await `SELECT * FROM customer 
    // where email = '${email}'`
    // // let qr = `SELECT * FROM customer where email = '${email}' AND password= '${password}'`
    //  var users = dbconfig.query(user,(err,result)=>{
    //     if (err) {
    //         console.log(err,'errs');
    //     }
    //     else {
    //       test(`${email}`)
    //     }
    // })

   
});


// ROUTER 3: Making the Address by PUT method PATH: http://localhost:5000/api/user/addaddress
// STATUS: WORKING
router.post('/addaddress',(req,res)=>{
    let house = req.body.house;
    let postcode = req.body.postcode;
    let flat = req.body.flat;
    let street = req.body.street;
    let town = req.body.town;
    let customer_Id = req.body.customer_Id;


    let qr = `insert into address(house,flat,postcode,street,town,customer_Id,status)
    values('${house}','${flat}','${postcode}','${street}','${town}',${customer_Id},1)
            `
     dbconfig.query(qr,(err,result)=>{
        
        if (!err) {
            res.send({
                message : 'New address is added'
               
            });
        }
        else {
            console.log(err,'err')
        }
    })
});

// Router 4: http://localhost:5000/api/user/getaddress
// Status: Working
router.post('/getaddress',(req,res)=>{
    let customer_Id = req.body.customer_Id

    let qr = `SELECT * FROM address
    where customer_Id = ${customer_Id}`;
    dbconfig.query(qr,(err,result)=>{
        if(!err){
            res.json({
                data:result
            })
        }
        else{
            console.log(err,'err')
        }
    })
})

module.exports = router
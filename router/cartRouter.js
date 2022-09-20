const express = require("express");
const router = express.Router();
const { check, validationResult  } = require('express-validator');
const bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')
const dbconfig = require('../db');


// ROUTER 2: Creating orders by cart by POST method PATH: https://apinodejs.creativeparkingsolutions.com/api/admin/cart/:id
// STATUS: WORKING
router.post('/cart',(req,res)=>{
    console.log(req.body)
    let customer_id = req.body .userID;
    let status = 1;
    let product_id = req.body.ProductID;
    let quantity = req.body.quantity;
    let price = req.body.price
    // let insertId = req.body.rid


    // let qr = `
    // insert into cart(customer_Id,Status)
    // values('${customer_id}',${status})`

    let qr = `Select * from cart where customer_id = ${customer_id} and Status = 1`
     dbconfig.query(qr,(err,results)=>{
     
        if(!err){
            if(results.length<=0){
                // Creating the cart in db
                let qr = `insert into cart(customer_Id,Status,Orderstatus)
                        values(${customer_id},${status},1)`
                dbconfig.query(qr,(err,result)=>{
                    if(!err){
                        if(result.affectedRows === 1){
                            let qr = `insert into orderitem(ProductID,Quantity,Price,Order_ID)
                            values(${product_id},${quantity},${price *quantity},${result.insertId})`
                            dbconfig.query(qr,(err,result)=>{
                                if(!err){
                                    if(result.affectedRows === 1){
                                        res.json({
                                            message:"Orderitem has been created",
                                            data:result
                                        })
                                    }
                                    else{
                                        res.json({
                                            error:"Error in creating orderitem"
                                        })
                                    }
                                }else{
                                    res.status(401).json({
                                        message:"Something went wrong in order item"
                                    })
                                }
                            })
                            // res.json({
                            //     message:"Cart has been created",
                            //     data:result.insertId
                            // })
                        }
                        else{
                            res.status(401).json({
                                message:"SOmething wrong in creation of cart"
                            })
                        }
                    }
                    else{
                        console.log(err,'err')
                    }
                })

                // let qr = `Select * from orderitem where Order_ID = ${result[0]['cart_id']} and ProductID = ${product_id}`
                // Result data:9:
                // res.json({
                //     data:result[0]['cart_Id']
                // })
            }
            else{
                let qrordetitem = `Select * from orderitem where order_ID =${results[0]['cart_Id']} and ProductID = ${product_id} `;
                dbconfig.query(qrordetitem,(err,result)=>{
                   
                    if (!err) {
                        if (result.length==0) {
                            let qr = `insert into orderitem(ProductID,Quantity,Price,Order_ID)
                            values(${product_id},${quantity},${price *quantity},${results[0]['cart_Id']})`
                            dbconfig.query(qr,(err,result)=>{
                                if(!err){
                                    if(result.affectedRows === 1){
                                        res.json({
                                            message:"Orderitem has been created",
                                            data:result
                                        })
                                    }
                                    else{
                                        res.json({
                                            error:"Error in creating orderitem"
                                        })
                                    }
                                }
                                else{
                                    res.json({
                                        error:"Error"
                                    })
                                }
                            })
                        } else {
                            console.log('sssss' +results[0]['cart_Id'])
                        // Updating the cart quantity
                        let qr = `update orderitem 
                        set Quantity = ${quantity},
                        Price=${price * quantity}
                        where Order_ID = ${results[0]['cart_Id']}`
                        dbconfig.query(qr,(err,result)=>{
                            if(!err){
                                res.json({
                                    data:result
                                })
                            }else{
                                console.log(err,'err')
                            }
                        })
                        // res.json({
                        //     data:result
                        // })
                        }
                    
                    } else {
                        console.log(err,"err")
                    }
                })
 


               
            }
        }
        else{
            console.log(err,'errs');
        }
    })
});

// ROUTER 2: Showing orders in cart by GET method PATH: https://apinodejs.creativeparkingsolutions.com/api/admin/getcartitems
// STATUS: WORKING
router.post('/getcartitems',(req,res)=>{
    let customer_Id = req.body.customer_Id;

    let qr = `SELECT customer.customer_Id,item.*,orderitem.Price as "totalp",orderitem.Quantity ,orderitem.id as "orderitemid",customer.name,cart.Status,cart.DateTime,cart.cart_Id FROM orderitem 
    inner join cart on cart.cart_Id=orderitem.Order_ID 
    inner join customer on customer.customer_Id=cart.customer_Id 
    INNER join item on item.ID = orderitem.ProductID 
    WHERE cart.customer_Id=${customer_Id} and status=1;`
    dbconfig.query(qr,(err,result)=>{
        if(!err){
            res.json({
                data:result
            })
        }
        else{
            console.log(err,"err")
        }
    })
})

// ROUTER 3: Updating the quantity of cart item  by PUT method PATH: https://apinodejs.creativeparkingsolutions.com/api/admin/updatecart
// STATUS: WORKING
router.post('/updatecart',(req,res)=>{
    let customer_Id = req.body.customer_Id;
    let orderID = req.body.orderID;
    let quantity = req.body.quantitys
    let price = req.body.price


    // let mainqr = `SELECT customer.customer_Id,item.*,orderitem.Price,orderitem.Quantity ,orderitem.id as "orderitemid",customer.name,cart.Status,cart.DateTime,cart.cart_Id FROM orderitem 
    // inner join cart on cart.cart_Id=orderitem.Order_ID 
    // inner join customer on customer.customer_Id=cart.customer_Id 
    // INNER join item on item.ID = orderitem.ProductID 
    // WHERE cart.customer_Id=${customer_Id} and orderitem.ID = ${orderID}`
   
            if(orderID>0){

                if(quantity>0)
                {


                    let qr = `update orderitem 
                    set Quantity = ${quantity}
                    , Price = ${price* quantity}
                    where ID = ${orderID}`
                    dbconfig.query(qr,(err,result)=>{
                        if(!err){
                            res.json({
                                message:"Your item has been updated",
                                data:result
                            })
                        }
                        else{
                            res.json({
                                error:"Something went wrong in updation of cart quantity"
                            })
                        }
                    })
                }
                else{


                    let qr = `Delete From orderitem 
                    where ID = ${orderID}`
                    dbconfig.query(qr,(err,result)=>{
                        if(!err){
                            res.json({
                                message:"Your item has been Delete",
                                data:result
                            })
                        }
                        else{
                            res.json({
                                error:"Something went wrong in Delete"
                            })
                        }
                    })
                }

          
            }
        }
        
)


// Router 4 : https://apinodejs.creativeparkingsolutions.com/api/admin/cartcheckout
// Status:
router.post('/cartcheckout',(req,res)=>{
    let customer_Id = req.body.customer_Id
    let comment = req.body.comment
    let total = req.body.total

    let qr = `SELECT * FROM cart
                where customer_Id=${customer_Id}`
    dbconfig.query(qr,(err,result)=>{
        if(!err){
            if (result.length>0) {
                let qr = `SELECT * FROM address
            where customer_Id=${customer_Id} and address_status =1`
                        dbconfig.query(qr,(err,result)=>{
                if(!err){
                    // res.json({
                    //     data:result[0]['customer_Id']
                    // })
                                let qr = `update cart 
            set comment = '${comment}'
            , Status = 2
            , Orderstatus = 1
            , address_Id = ${result[0]['ID']}
            , total = "${total}"
            where customer_Id=${customer_Id}`
            dbconfig.query(qr,(err,result)=>{
                if(!err){
                    res.json({
                        message:"Your Cart has been checkout"
                    })
                }
                else{
                    console.log(err,"err")
                }
            })

                }
                else{
                    console.log(err,"err")
                }
            })
            } else {
                console.log(err,'err')
            }

            // let qr = `update cart 
            // set comment = '${comment}'
            // , Status = 2
            // , Orderstatus = 1
            // where customer_Id=${customer_Id}`
            // dbconfig.query(qr,(err,result)=>{
            //     if(!err){
            //         res.json({
            //             message:"Your Cart has been checkout"
            //         })
            //     }
            //     else{
            //         console.log(err,"err")
            //     }
            // })
        }
        else{
            console.log(err,"err")
        }
    })

})

// ROUTER 3: Updating the orders status by PUT method PATH: https://apinodejs.creativeparkingsolutions.com/api/admin/updatestatus/:id
// STATUS: WORKING
router.put('/updatestatus/:id',(req,res)=>{
    let id = req.params.id;
    let status = req.body.status;

    let qr = `
            update cart 
                    set Status = ${status}
                    where cart_Id = ${id}`
     dbconfig.query(qr,(err,result)=>{
        
        if (err) {
            console.log(err,'errs');
        }
        else {
            res.send({
                message : 'Order is Updated',
               
            });
        }
    })
});

// ROUTER 4: Getting the orders  by GET method PATH: https://apinodejs.creativeparkingsolutions.com/api/admin/getorders
// STATUS: WORKING
router.get('/getorders',(req,res)=>{
    let qr = `
    SELECT * FROM cart
            `
     dbconfig.query(qr,(err,result)=>{
        
        if (err) {
            console.log(err,'errs');
        }
        else {
            res.send({
                data : result
               
            });
        }
    })
});

// ROUTER 5: Deleting the order  by DELETE method PATH: https://apinodejs.creativeparkingsolutions.com/api/admin/deleteorder/:id
// STATUS: WORKING
router.get('/deleteorder/:id',(req,res)=>{
    let id = req.params.id
    let qr = `delete from cart 
    where cart_Id = ${id}`
     dbconfig.query(qr,(err,result)=>{
        
        if (err) {
            console.log(err,'errs');
        }
        else {
            res.send({
                message:"Orders has been deleted"
               
            });
        }
    })
});

// ROUTER : https://apinodejs.creativeparkingsolutions.com/api/admin/getcart
// STATUS:
router.post('/getcart',(req,res)=>{
    let customer_Id = req.body.customer_Id

    let qr = `SELECT * FROM cart
    inner join orderitem on cart.cart_Id=orderitem.Order_ID  
    WHERE cart.customer_Id= ${customer_Id}`
    dbconfig.query(qr,(err,result)=>{
        if (!err) {
            res.json({
                data:result
            })
        } else {
            console.log(err,'err')
        }
    })
})

// ROUTER : https://apinodejs.creativeparkingsolutions.com/api/admin/getitemmanagement/:itemid/:categoryid
// STATUS:
router.get('/getitemmanagement/:itemid/:categoryid',(req,res)=>{
    let categoryid = req.params.categoryid
    let itemid = req.params.itemid

    let qr = `SELECT * FROM item WHERE category_id = ${categoryid} and ID = ${itemid}`
    dbconfig.query(qr,(err,result)=>{
        if (!err) {
            res.json({
                data:result[0]
            })
        } else {
            console.log(err,'err')
        }
    })
})

// ROUTER : https://apinodejs.creativeparkingsolutions.com/api/admin/updateitemmanagement/:itemid/:categoryid
// STATUS:
router.post('/updateitemmanagement/:itemid/:categoryid',(req,res)=>{
    let categoryid = req.params.categoryid
    let itemid = req.params.itemid
    let title = req.body.title
    let Description = req.body.Description
    let Price = req.body.Price



    let qr = `update item 
    set Title = "${title}"
    , Description = "${Description}"
    , Price = "${Price}"
    WHERE category_id = ${categoryid} and ID = ${itemid}`
    dbconfig.query(qr,(err,result)=>{
        if (!err) {
            res.json({
                data:result[0]
            })
        } else {
            console.log(err,'err')
        }
    })
})

// ROUTER 2: Showing orders in cart by GET method PATH: https://apinodejs.creativeparkingsolutions.com/api/admin/getcartorderdetailitems
// STATUS: WORKING
router.post('/getcartorderdetailitems',(req,res)=>{
    let customer_Id = req.body.customer_Id;

    let qr = `SELECT customer.customer_Id,item.*,orderitem.Price as "totalp",orderitem.Quantity ,orderitem.id as "orderitemid",customer.name,cart.Status,cart.DateTime,cart.cart_Id FROM orderitem 
    inner join cart on cart.cart_Id=orderitem.Order_ID 
    inner join customer on customer.customer_Id=cart.customer_Id 
    INNER join item on item.ID = orderitem.ProductID 
    WHERE cart.customer_Id=${customer_Id}`
    dbconfig.query(qr,(err,result)=>{
        if(!err){
            res.json({
                data:result
            })
        }
        else{
            console.log(err,"err")
        }
    })
})

module.exports = router
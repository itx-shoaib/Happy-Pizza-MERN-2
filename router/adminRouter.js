const express = require("express");
const router = express.Router();
const dbconfig = require('../db')

// ROUTER 1: Getting all the menu by GET method PATH: http://localhost:5000/api/admin/getallmenu
// STATUS: WORKING
router.get('/getallmenu',(req,res)=>{
    let qr = 'SELECT * FROM category'
    dbconfig.query(qr,(err,result)=>{
        if (err) {
            console.log(err,'errs');
        }
        if (result.length>0) {
            res.send({
                message : 'all customer data',
                data:result
            });
        }
    })
})

// ROUTER 2: Creating the menu by POST method PATH: http://localhost:5000/api/admin/createmenu
// STATUS: WORKING
router.post('/createmenu',(req,res)=>{
    let name = req.body.name;
    let image = req.body.image;

    let qr = `insert into category(Name,Image)
                    values('${name}','${image}')`

    dbconfig.query(qr,(err,result)=>{
        if (err) {
            console.log(err)
        }
        res.send({
            message:'data inserted'
        })
})
});


// ROUTER 3: Updating the menu by PUT method PATH: http://localhost:5000/api/admin/updatemenu/:id
// STATUS: WORKING
router.put('/updatemenu/:id',(req,res)=>{
    let id = req.params.id;
    let name = req.body.name;
    let image = req.body.image;
    

    let qr = `update category 
                    set Name = '${name}',Image = '${image}'
                    where id = ${id}`;

    dbconfig.query(qr,(err,result)=>{
        if (err) {
            console.log(err)
        }
        res.send({
            data:result
        });

    });
})


// ROUTER 4: Deleting the menu by DELETE method PATH: http://localhost:5000/api/admin/deletemenu/:id
// STATUS: WORKING
router.delete('/deletemenu/:id',(req,res)=>{
    let id = req.params.id
    let qr = `delete from category 
                where id = '${id}'`;

        dbconfig.query(qr,(err,result)=>{
        if (err) {
        console.log(err)
        }
        res.send({
        message:'data deleted'
        });

});

})


// ROUTER 4: Creating the item of category by POST method PATH: http://localhost:5000/api/admin/createitem/:id
// STATUS: WORKING
router.post('/createitem/:id',(req,res)=>{
    let category_id = req.params.id
    let title = req.body.title;
    let image = req.body.image;
    let description = req.body.description;
    let price = req.body.price;
    let qr = `insert into item(category_id,Title,Description,Price,Image)
                   values('${category_id}','${title}','${description}','${price}','${image}')`;

        dbconfig.query(qr,(err,result)=>{
        if (err) {
        console.log(err)
        }
        res.send({
        message:'data inserted'
        });

});
})

// ROUTER 5: Get all the item of category by GET method PATH: http://localhost:5000/api/admin/getitem/:id
// STATUS: WORKING
router.get('/getitem/:id',(req,res)=>{
    let category_id = req.params.id
    let qr = `SELECT * FROM item
                where category_id = '${category_id}'`;

        dbconfig.query(qr,(err,result)=>{
        if (err) {
        console.log(err)
        }
        res.send({
            data:result
        });

});
})

// ROUTER 6: Get all the item by GET method PATH: http://localhost:5000/api/admin/getallitems
// STATUS: WORKING
router.get('/getallitems',(req,res)=>{
    let num = 3;
    let qr = `SELECT * from item`;

        dbconfig.query(qr,(err,result)=>{
        if (err) {
        console.log(err)
        }
        res.send({
            data:result
        });
        // console.log(result[0])
});
    // let qr = `Select * from item 
    //             `
    //     dbconfig.query(qr,(err,result)=>{
    //         if (!err) {
    //             if(result.length <=0){
    //                 let num = 2;
                    
    //                 for (var i = 0; i = result.length; i++) {
    //                     num = num + i;
    //                 }
    //                 let qr = `Select * from item 
    //             where category_id = ${num}`
    //                 dbconfig.query(qr,(err,result)=>{
    //                             if (err) {
    //                             console.log(err)
    //                             }
    //                             res.send({
    //                                 data:result
    //                             });
    //                 })
    //             }
    //         } else {
    //             return res.status(404).json({
    //                 error:"Something went wrong!"
    //             })
    //         }
    //     })
})

// ROUTER 7: Update the item of category by GET method PATH: http://localhost:5000/api/admin/updateitem/:id
// STATUS: WORKING
router.put('/updateitem/:id',(req,res)=>{
    let id = req.params.id;
    let title = req.body.title;
    let image = req.body.image;
    let description = req.body.description;
    let price = req.body.price;

    let qr = `update item 
                    set Title = '${title}',Image = '${image}', Description ='${description}',Price=${price}
                    where item_id = ${id}`;

    dbconfig.query(qr,(err,result)=>{
        if (err) {
            console.log(err)
        }
        res.send({
            data:result
        });

    });
})

// ROUTER 7: Delete the item of category by DELETE method PATH: http://localhost:5000/api/admin/deleteitem/:id
// STATUS: WORKING
router.delete('/deleteitem/:id',(req,res)=>{
    let id = req.params.id
    let qr = `delete from item 
                where item_id = ${id}`;

        dbconfig.query(qr,(err,result)=>{
        if (err) {
        console.log(err)
        }
        res.send({
        message:'data deleted'
        });

});

})

// Router: http://localhost:5000/api/admin/getliveorders
// Status: Working
router.get('/getliveorders',(req,res)=>{

    let customer_Id = req.body.customer_Id

    // Main query
    let qr  = `SELECT * FROM cart 
    INNER JOIN address on cart.customer_Id = address.customer_Id
    INNER JOIN customer on customer.customer_Id = address.customer_Id
   `;
    dbconfig.query(qr,(err,result)=>{
        if (!err) {
            if(result.length>0){
                res.json({  
                    data:result
                })
            }
            else{
                res.status(401).json({
                    error:"Data not found"
                })
            }
        } else {
            console.log(err,"err")
        }
    })

})

// Router 6: http://localhost:5000/api/admin/acceptorder
// Status:
router.post('/acceptorder',(req,res)=>{
    let cart_Id = req.body.cart_Id;
    let Orderstatus = parseInt(req.body.status) + 1

    let qr = `Update cart 
    set Orderstatus='${Orderstatus}'
    Where  cart_Id = ${cart_Id}`
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

// Router 7: http://localhost:5000/api/admin/rejectorder
// Status:
router.post('/rejectorder',(req,res)=>{
    let cart_Id = req.body.cart_Id;

    let qr = `Update cart 
    set Orderstatus='0'
    Where cart_Id = ${cart_Id}`
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

// Router 8 : Get all customers PATH: http://localhost:5000/api/admin/getcustomers
// STATUS:
router.get('/getcustomers',(req,res)=>{
    let qr = `SELECT * FROM customer`
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


// Router 9 : Get all customers PATH: http://localhost:5000/api/admin/getallorders
// STATUS:
router.get('/getallorders',(req,res)=>{
    let qr = `SELECT * FROM cart inner join orderitem on cart.cart_Id=orderitem.Order_ID INNER JOIN address on cart.customer_Id = address.customer_Id;`
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
module.exports = router
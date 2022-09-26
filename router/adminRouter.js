const express = require("express");
const router = express.Router();
const dbconfig = require('../db')
const multer = require("multer")

// Image storage connfig
var imgconfig = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"/uploads");
    },
    filename:(req,file,callback)=>{
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

// ROUTER 1: Getting all the menu by GET method PATH: https://apinodejs.creativeparkingsolutions.com/api/admin/getallmenu
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

// ROUTER 2: Creating the menu by POST method PATH: https://apinodejs.creativeparkingsolutions.com/api/admin/createmenu
// STATUS: WORKING
router.post('/createmenu',(req,res)=>{
    let name = req.body.name;

    let qr = `insert into category(Name)
                    values('${name}')`

    dbconfig.query(qr,(err,result)=>{
        if (err) {
            console.log(err)
        }
        res.send({
            message:'data inserted'
        })
})
});


// ROUTER 3: Updating the menu by PUT method PATH: https://apinodejs.creativeparkingsolutions.com/api/admin/updatemenu
// STATUS: WORKING
router.post('/updatemenu',(req,res)=>{
    let ID = req.body.ID;
    let title = req.body.title;
    

    let qr = `update category 
                    set Name = '${title}'
                    where id = ${ID}`;

    dbconfig.query(qr,(err,result)=>{
        if (err) {
            console.log(err)
        }
        res.send({
            data:result
        });

    });
})


// ROUTER 4: Deleting the menu by DELETE method PATH: https://apinodejs.creativeparkingsolutions.com/api/admin/deletemenu
// STATUS: WORKING
router.post('/deletemenu',(req,res)=>{
    let ID = req.body.ID
    let qr = `delete from category 
                where id = '${ID}'`;

        dbconfig.query(qr,(err,result)=>{
        if (err) {
        console.log(err)
        }
        res.send({
        message:'data deleted'
        });

});

})


// ROUTER 4: Creating the item of category by POST method PATH: https://apinodejs.creativeparkingsolutions.com/api/admin/createitem
// STATUS: WORKING
router.post('/createitem',upload.single("image"),(req,res)=>{
    let category_id = req.body.category_id
    let title = req.body.title;
    let {filename} = req.image;
    let description = req.body.description;
    console.log(req.file)
    let price = req.body.price;
    let qr = `insert into item(category_id,Title,Description,Price,Image)
                   values(${category_id},'${title}','${description}','${price}','${filename}')`;

        dbconfig.query(qr,(err,result)=>{
        if (err) {
        console.log(err)
        }
        res.send({
        message:'data inserted'
        });

});
})

// ROUTER 5: Get all the item of category by GET method PATH: https://apinodejs.creativeparkingsolutions.com/api/admin/getitem/:id
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

// ROUTER 6: Get all the item by GET method PATH: https://apinodejs.creativeparkingsolutions.com/api/admin/getallitems
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

// ROUTER 7: Update the item of category by GET method PATH: https://apinodejs.creativeparkingsolutions.com/api/admin/updateitem/:id
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

// ROUTER 7: Delete the item of category by DELETE method PATH: https://apinodejs.creativeparkingsolutions.com/api/admin/deleteitem/:id
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

// Router: https://apinodejs.creativeparkingsolutions.com/api/admin/getliveorders
// Status: Working
router.get('/getliveorders',(req,res)=>{

    let customer_Id = req.body.customer_Id

    // Main query
    let qr  = `SELECT * FROM cart INNER JOIN address on cart.customer_Id = address.customer_Id INNER JOIN customer on customer.customer_Id = address.customer_Id WHERE cart.address_Id = address.ID;
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

// Router: https://apinodejs.creativeparkingsolutions.com/api/admin/getliveorderscount
// Status: Working
router.get('/getliveorderscount',(req,res)=>{

    let customer_Id = req.body.customer_Id

    // Main query
    let qr  = `SELECT count(*) as 'total' FROM cart 
    Where 	Orderstatus='1'
   `;
    dbconfig.query(qr,(err,result)=>{
        if (!err) {
            if(result[0]['total']>0){
                res.json({  
                    data:'true',
                    message:result[0]['total']
                })
            }
            else{
                res.status(401).json({
                    data:'false',
                    message:result[0]['total']
                })
            }
        } else {
            console.log(err,"err")
        }
    })

})

// Router 6: https://apinodejs.creativeparkingsolutions.com/api/admin/acceptorder
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

// Router 7: https://apinodejs.creativeparkingsolutions.com/api/admin/rejectorder
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

// Router 8 : Get all customers PATH: https://apinodejs.creativeparkingsolutions.com/api/admin/getcustomers
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


// Router 9 : Get all customers PATH: https://apinodejs.creativeparkingsolutions.com/api/admin/getallorders
// STATUS:
router.get('/getallorders',(req,res)=>{
    let qr = `SELECT cart.*,address.*,customer.name FROM address 
    INNER JOIN cart on address.ID = cart.address_Id
    INNER join customer on customer.customer_Id = cart.customer_Id;`
    // WHERE address.address_status = 1
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



// ROUTER 11: Login a admin by GET method PATH: https://apinodejs.creativeparkingsolutions.com/api/admin/loginadmin
// STATUS:
router.post('/loginadmin',(req,res)=>{

    let email = req.body.email;
    let password = req.body.password;

    
    let qr = `SELECT * FROM customer 
                     where email = '${email}' and role = 1`
    
        dbconfig.query(qr,(err,result)=>{
        if (!err) { 
            if (result.length <=0 || result[0]['password'] != password ) {
                    return res.status(401).json({message:"Incorrect username or password"})
            }
            else if(result[0]['password'] === password) {
                // const token = JWT.sign({
                //     email
                // }, "fn789disdhcsc87scsdcsdb4", {
                //     expiresIn: 3600000
                // })
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

   
});

// ROUTER 10: Register a admin by POST method PATH: https://apinodejs.creativeparkingsolutions.com/api/admin/registeradmin
// STATUS: WORKING
router.post('/registeradmin',async(req,res)=>{

    // const secPass = await bcrypt.hash(req.body.password,10);
    let name = req.body.name;
    let email = req.body.email;
    let number = req.body.number;
    let password = req.body.password;


    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array()});
    // }

    // const token = JWT.sign({
    //     email
    // }, "fn789disdhcsc87scsdcsdb4", {
    //     expiresIn: 3600000
    // })


    let qr =  `SELECT * FROM customer
                    WHERE email = '${email}'`
    dbconfig.query(qr,(err,result)=>{
            if (!err) {
                if (result.length <=0) {
                      let qr = `insert into customer(name,email,number,password,role)
                                values('${name}','${email}','${number}','${password}',1)`
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

});

// Router 11 : Get all customers PATH: https://apinodejs.creativeparkingsolutions.com/api/admin/getorderdetails/:id/:cid
// STATUS:
router.get('/getorderdetails/:id/:cid',(req,res)=>{
    let id = req.params.id

    let qr = `SELECT * FROM address 
    INNER JOIN cart on cart.address_Id = address.ID
    INNER JOIN customer on customer.customer_Id = cart.customer_Id
    WHERE cart.cart_Id = ${id};`
    // WHERE address.address_status = 1
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

// Router 11 : Get all customers PATH: https://apinodejs.creativeparkingsolutions.com/api/admin/getorderlength
// STATUS:
router.get('/getorderlength',(req,res)=>{

    let qr = `SELECT count(*) as 'total' FROM orderitem;`
    // WHERE address.address_status = 1
    dbconfig.query(qr,(err,result)=>{
        if (!err) {
            res.json({
                data:result[0]['total']
                       })
        } else {
            console.log(err,'err')
        }
    })

})

// Router 11 : Get all customers PATH: https://apinodejs.creativeparkingsolutions.com/api/admin/getcustomerlength
// STATUS:
router.get('/getcustomerlength',(req,res)=>{

    let qr = `SELECT count(*) as 'total' FROM customer;`
    // WHERE address.address_status = 1
    dbconfig.query(qr,(err,result)=>{
        if (!err) {
            res.json({
                data:result[0]['total']
                       })
        } else {
            console.log(err,'err')
        }
    })

})

// Router 11 : Get all customers PATH: https://apinodejs.creativeparkingsolutions.com/api/admin/getitemslength
// STATUS:
router.get("/getitemslength",(req,res)=>{
    let qr = `Select count(*) as 'total' from item`
    dbconfig.query(qr,(err,result)=>{
        if (!err) {
            res.json({
                data:result[0]['total']
            })
        } else {
            console.log(err,'err')
        }
    })
})

// Router : Change password
// Status:
router.post("/changepassword",(req,res)=>{
    let email = req.body.email;
    let customer_Id = req.body.customer_Id;
    let password = req.body.password;
    let new_password = req.body.new_password;

    let qr = `SELECT * FROM customer where email = '${email}' and password = '${password}'`
    dbconfig.query(qr,(err,result)=>{
        if (!err) {
            if (result.length > 0) {
                let qr = `update customer 
                set password = '${new_password}'
                where customer_Id = ${customer_Id}`;
                dbconfig.query(qr,(err,result)=>{
                    if (!err) {
                        res.json({
                            message:"Your password has been updated"
                        })
                    } else {
                        res.status(404).json({
                            error:err
                        })
                    }
                })
            } else {
                res.status(404).json({
                    error:err
                })
            }
        } else {
            console.log(err,"err")
        }
    })
})

// Router : My profile
// Status:
router.post('/myprofile',(req,res)=>{
    let customer_Id = req.body.customer_Id;
    let name = req.body.name;
    let email = req.body.email;
    let number = req.body.number;

    let qr = `Update customer 
    set name = '${name}',
    email = '${email}',
    number = '${number}'
    Where customer_Id = ${customer_Id}`

    dbconfig.query(qr,(err,result)=>{
        if (!err) {
            res.status(200).json({
                message:"Profile has been updated"
            })
        } else {
            res.status(404).json({
                error:err
            })
        }
    })
})

module.exports = router
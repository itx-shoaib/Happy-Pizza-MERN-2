const express = require("express");
const router = express.Router();
const dbconfig = require('../db')
const multer = require("multer")

// Image storage connfig
var imgconfig = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload');
    },
    filename: function (req, file, callback) {
        callback(null, `image-${Date.now()}.${file.originalname}`)
    }
});

// image filter
const isImage = (req, file, callback) => {
    if (file.mimetype.startsWith("image")) {
        callback(null, true)
    } else {
        callback(null, Error("only image is allowed"))
    }
}

var upload = multer({
    storage: imgconfig,
    fileFilter: isImage
})

// Image check api test
router.post('/imageuploadcheck', upload.single("photo"), (req, res) => {
    const { filename } = req.body ? req.body : req.file;
    if (filename) {
        try {
            res.status(200).json({
                data: filename
            })
        } catch (error) {
            res.status(404).json({
                error: err
            })
        }
    } else {
        res.status(404).json({
            message: "in the else",
            error: err
        })
    }
    console.log(req.file)

})

// ROUTER 1: Getting all the menu by GET method PATH: http://localhost:5000/api/admin/getallmenu
// STATUS: WORKING
router.get('/getallmenu', (req, res) => {
    let qr = 'SELECT * FROM category '
    dbconfig.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'errs');
        }
        if (result.length > 0) {
            res.send({
                message: 'all customer data',
                data: result
            });
        }
    })
})

// ROUTER 2: Creating the menu by POST method PATH: http://localhost:5000/api/admin/createmenu
// STATUS: WORKING
router.post('/createmenu', (req, res) => {
    let name = req.body.name;
    let discountable = req.body.discountable

    let qr = `insert into category(Name,discountable)
                    values('${name}','${discountable}')`

    dbconfig.query(qr, (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send({
            message: 'data inserted'
        })
    })
});


// ROUTER 3: Updating the menu by PUT method PATH: http://localhost:5000/api/admin/updatemenu
// STATUS: WORKING
router.post('/updatemenu', (req, res) => {
    let ID = req.body.ID;
    let title = req.body.title;
    let editdiscountable = req.body.editdiscountable;
    let sunday = req.body.sunday
    let monday = req.body.monday;
    let tuesday = req.body.tuesday;
    let wednesday = req.body.wednesday;
    let thursday = req.body.thursday;
    let friday = req.body.friday;
    let saturday = req.body.saturday;




    let qr = `update category 
                    set Name = '${title}',
                    set discountable = '${editdiscountable}',
                    set Sunday = '${sunday}',
                    set Monday = '${monday}',
                    set Tuesday = '${tuesday}',
                    set Wednesday = '${wednesday}',
                    set Thursday = '${thursday}',
                    set Friday = '${friday}',
                    set Saturday = '${saturday}'
                    where id = ${ID}`;

    dbconfig.query(qr, (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send({
            data: result
        });

    });
})


// ROUTER 4: Deleting the menu by DELETE method PATH: http://localhost:5000/api/admin/deletemenu
// STATUS: WORKING
router.post('/deletemenu', (req, res) => {
    let ID = req.body.ID
    let qr = `delete from category 
                where id = '${ID}'`;

    dbconfig.query(qr, (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send({
            message: 'data deleted'
        });

    });

})


// ROUTER 4: Creating the item of category by POST method PATH: http://localhost:5000/api/admin/createitem
// STATUS: WORKING,
router.post('/createitem', upload.single("photo"), (req, res) => {


    let category_id = req.body.categoryID;
    let title = req.body.title;
    let discountableitem = req.body.discountableitem;
    const filename = req.body.photo ? req.body.photo : `/upload/${req.file.path.replace("upload", "")}`;
    let description = req.body.description;
    let price = req.body.price;


    let qr = `insert into item(category_id,Title,Description,Price,Image,discountableitem)
                   values(${category_id},'${title}','${description}','${price}','${filename}','${discountableitem}')`;

    dbconfig.query(qr, (err, result) => {
        if (err) {
            console.log(err)
        }
        return res.send({
            message: 'data inserted'
        });

    });
})

// ROUTER 5: Get all the item of category by GET method PATH: http://localhost:5000/api/admin/getitem/:id
// STATUS: WORKING
router.get('/getitem/:id', (req, res) => {
    let category_id = req.params.id
    let qr = `SELECT * FROM item
                where category_id = '${category_id}'`;

    dbconfig.query(qr, (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send({
            data: result
        });

    });
})

// ROUTER 6: Get all the item by GET method PATH: http://localhost:5000/api/admin/getallitems
// STATUS: WORKING
router.get('/getallitems', (req, res) => {
    let num = 3;
    // For getting day
    const d = new Date();
    // let d2 = d.getDay();
    const options = { weekday: "long" };
    let day = new Intl.DateTimeFormat("en-US", options).format(d)
    // console.log(day)

    let qr = `SELECT * from item where available = "true" AND ${day} = "true"`;

    dbconfig.query(qr, (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send({
            data: result
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
router.put('/updateitem/:id', (req, res) => {
    let id = req.params.id;
    let title = req.body.title;
    let image = req.body.image;
    let description = req.body.description;
    let price = req.body.price;

    let qr = `update item 
                    set Title = '${title}',Image = '${image}', Description ='${description}',Price=${price}
                    where item_id = ${id}`;

    dbconfig.query(qr, (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send({
            data: result
        });

    });
})

// ROUTER 7: Delete the item of category by DELETE method PATH: http://localhost:5000/api/admin/deleteitem/:id
// STATUS: WORKING
router.delete('/deleteitem/:id', (req, res) => {
    let id = req.params.id
    let qr = `delete from item 
                where item_id = ${id}`;

    dbconfig.query(qr, (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send({
            message: 'data deleted'
        });

    });

})

// Router: http://localhost:5000/api/admin/getliveorders
// Status: Working
router.post('/getliveorders', (req, res) => {

    let id = req.body.id

    // Main query
    let qr = `SELECT * FROM cart 
    INNER JOIN address on cart.address_Id = address.ID 
    INNER JOIN customer on customer.customer_Id = cart.customer_Id 
    WHERE cart.address_Id = address.ID and cart.resturant_ID = ${id}`;
    dbconfig.query(qr, (err, result) => {
        if (!err) {
            if (result.length > 0) {
                res.json({
                    data: result
                })
            }
            else {
                res.status(401).json({
                    error: "Data not found"
                })
            }
        } else {
            console.log(err, "err")
        }
    })

})

// Router: http://localhost:5000/api/admin/getliveorderscount
// Status: Working
router.post('/getliveorderscount', (req, res) => {

    let id = req.body.id

    // Main query
    let qr = `SELECT count(*) as 'total' FROM cart 
    Where 	Orderstatus='1' and resturant_ID = ${id}
   `;
    dbconfig.query(qr, (err, result) => {
        if (!err) {
            if (result[0]['total'] > 0) {
                res.json({
                    data: 'true',
                    message: result[0]['total']
                })
            }
            else {
                res.status(401).json({
                    data: 'false',
                    message: result[0]['total']
                })
            }
        } else {
            console.log(err, "err")
        }
    })

})

// Router 6: http://localhost:5000/api/admin/acceptorder
// Status:
router.post('/acceptorder', (req, res) => {
    let cart_Id = req.body.cart_Id;
    let Orderstatus = parseInt(req.body.status) + 1

    let qr = `Update cart 
    set Orderstatus='${Orderstatus}'
    Where  cart_Id = ${cart_Id}`
    dbconfig.query(qr, (err, result) => {
        if (!err) {
            res.json({
                data: result
            })
        } else {
            console.log(err, 'err')
        }
    })
})

// Router 7: http://localhost:5000/api/admin/rejectorder
// Status:
router.post('/rejectorder', (req, res) => {
    let cart_Id = req.body.cart_Id;

    let qr = `Update cart 
    set Orderstatus='0'
    Where cart_Id = ${cart_Id}`
    dbconfig.query(qr, (err, result) => {
        if (!err) {
            res.json({
                data: result
            })
        } else {
            console.log(err, 'err')
        }
    })
})

// Router 8 : Get all customers PATH: http://localhost:5000/api/admin/getcustomers
// STATUS:
router.get('/getcustomers', (req, res) => {
    let qr = `SELECT * FROM customer where role = 0`
    dbconfig.query(qr, (err, result) => {
        if (!err) {
            res.json({
                data: result
            })
        } else {
            console.log(err, 'err')
        }
    })
})


// Router 9 : Get all customers PATH: http://localhost:5000/api/admin/getallorders
// STATUS:
router.post('/getallorders', (req, res) => {
    let id = req.body.id;
    let qr = `SELECT cart.*,address.customer_Id as "ci" ,address.ID,address.house,address.flat,address.postcode,address.street,address.town,address.status,address.address_status,address.resturant_ID,customer.name FROM address 
    INNER JOIN cart on address.ID = cart.address_Id
    INNER join customer on customer.customer_Id = cart.customer_Id
    where cart.resturant_ID = ${id}`
    // WHERE address.address_status = 1
    dbconfig.query(qr, (err, result) => {
        if (!err) {
            res.json({
                data: result
            })
        } else {
            console.log(err, 'err')
        }
    })

})



// ROUTER 11: Login a admin by GET method PATH: http://localhost:5000/api/admin/loginadmin
// STATUS:
router.post('/loginadmin', (req, res) => {

    let email = req.body.email;
    let password = req.body.password;


    let qr = `SELECT * FROM customer 
                     where email = '${email}' and role !=0`

    dbconfig.query(qr, (err, result) => {
        if (!err) {
            if (result.length <= 0 || result[0]['password'] != password) {
                return res.status(401).json({ message: "Incorrect username or password" })
            }
            else if (result[0]['password'] === password) {
                // const token = JWT.sign({
                //     email
                // }, "fn789disdhcsc87scsdcsdb4", {
                //     expiresIn: 3600000
                // })
                // res.json({
                //         token
                //     });
                res.json({
                    data: result
                })
            }
            else {
                return res.status(401).json({ message: "Something went wrong,Please try again later." })
            }
        }
        else {
            console.log(err, 'errs');
        }
    })


});

// ROUTER 10: Register a admin by POST method PATH: http://localhost:5000/api/admin/registeradmin
// STATUS: WORKING
router.post('/registeradmin', async (req, res) => {

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


    let qr = `SELECT * FROM customer
                    WHERE email = '${email}'`
    dbconfig.query(qr, (err, result) => {
        if (!err) {
            if (result.length <= 0) {
                let qr = `insert into customer(name,email,number,password,role)
                                values('${name}','${email}','${number}','${password}',1)`
                dbconfig.query(qr, (err, result) => {
                    if (err) {
                        console.log(err, 'errs');
                    }
                    else {
                        // res.json({
                        //     token
                        // });
                        res.send({
                            message: 'Registration successful',
                            data: result
                        });
                    }
                })
            }
            else {
                return res.status(400).json({ message: "Email already exist" })
            }
        }
        else {
            console.log(err, 'errs');
        }
    })

});

// Router 11 : Get all customers PATH: http://localhost:5000/api/admin/getorderdetails/:id/:cid
// STATUS:
router.get('/getorderdetails/:id/:cid', (req, res) => {
    let id = req.params.id

    let qr = `SELECT *,customer.name as "cname" FROM address INNER JOIN cart on cart.address_Id = address.ID INNER JOIN customer on customer.customer_Id = cart.customer_Id INNER JOIN resturant on resturant.ID = address.resturant_ID INNER JOIN orderitem on orderitem.Order_ID = cart.cart_Id WHERE cart.cart_Id = ${id};`
    // WHERE address.address_status = 1
    dbconfig.query(qr, (err, result) => {
        if (!err) {
            res.json({
                data: result[0]
            })
        } else {
            console.log(err, 'err')
        }
    })

})

// Router 11 : Get all customers PATH: http://localhost:5000/api/admin/getorderlength
// STATUS:
router.get('/getorderlength', (req, res) => {

    let qr = `SELECT count(*) as 'total' FROM orderitem;`
    // WHERE address.address_status = 1
    dbconfig.query(qr, (err, result) => {
        if (!err) {
            res.json({
                data: result[0]['total']
            })
        } else {
            console.log(err, 'err')
        }
    })

})

// Router 11 : Get all customers PATH: http://localhost:5000/api/admin/getcustomerlength
// STATUS:
router.get('/getcustomerlength', (req, res) => {

    let qr = `SELECT count(*) as 'total' FROM customer;`
    // WHERE address.address_status = 1
    dbconfig.query(qr, (err, result) => {
        if (!err) {
            res.json({
                data: result[0]['total']
            })
        } else {
            console.log(err, 'err')
        }
    })

})

// Router 11 : Get all customers PATH: http://localhost:5000/api/admin/getitemslength
// STATUS:
router.get("/getitemslength", (req, res) => {
    let qr = `Select count(*) as 'total' from item`
    dbconfig.query(qr, (err, result) => {
        if (!err) {
            res.json({
                data: result[0]['total']
            })
        } else {
            console.log(err, 'err')
        }
    })
})

// Router : Change password
// Status:
router.post("/changepassword", (req, res) => {
    let email = req.body.email;
    let customer_Id = req.body.customer_Id;
    let password = req.body.password;
    let new_password = req.body.new_password;

    let qr = `SELECT * FROM customer where email = '${email}' and password = '${password}'`
    dbconfig.query(qr, (err, result) => {
        if (!err) {
            if (result.length > 0) {
                let qr = `update customer 
                set password = '${new_password}'
                where customer_Id = ${customer_Id}`;
                dbconfig.query(qr, (err, result) => {
                    if (!err) {
                        res.json({
                            message: "Your password has been updated"
                        })
                    } else {
                        res.status(404).json({
                            error: err
                        })
                    }
                })
            } else {
                res.status(404).json({
                    error: err
                })
            }
        } else {
            console.log(err, "err")
        }
    })
})

// Router : My profile
// Status:
router.post('/myprofile', (req, res) => {
    let customer_Id = req.body.customer_Id;
    let name = req.body.name;
    let email = req.body.email;
    let number = req.body.number;

    let qr = `Update customer 
    set name = '${name}',
    email = '${email}',
    number = '${number}'
    Where customer_Id = ${customer_Id}`

    dbconfig.query(qr, (err, result) => {
        if (!err) {
            res.status(200).json({
                message: "Profile has been updated"
            })
        } else {
            res.status(404).json({
                error: err
            })
        }
    })
})

// Router: http://localhost:5000/api/admin/salesvloume
// Status:
router.post("/getprofile", (req, res) => {
    let ID = req.body.ID

    let qr = `Select * from customer where customer_Id = ${ID}`
    dbconfig.query(qr, (err, result) => {
        if (!err) {
            res.status(200).json({
                data: result
            })
        } else {
            res.status(404).json({
                message: "Data not found",
                error: err
            })
        }
    })
})

// Router : http://localhost:5000/api/admin/salesvloume
// status:
router.get('/salesvloume', (req, res) => {
    let qr = `Select total from cart`

    dbconfig.query(qr, (err, result) => {
        if (!err) {
            res.status(200).json({
                data: result
            })
        } else {
            res.status(404).json({
                error: err
            })
        }
    })
})

// Router : http://localhost:5000/api/admin/salesvloume
// status:
router.post('/salesvloumeresturant', (req, res) => {
    let id = req.body.id
    let qr = `Select total from cart where resturant_ID = ${id}`

    dbconfig.query(qr, (err, result) => {
        if (!err) {
            res.status(200).json({
                data: result
            })
        } else {
            res.status(404).json({
                error: err
            })
        }
    })
})

// Router: http://localhost:5000/api/admin/getordercount
// Status: Working
router.post('/getordercount', (req, res) => {

    let id = req.body.customer_Id

    // Main query
    let qr = `SELECT count(*) as 'total' FROM cart 
    Where 	customer_Id = ${id}
   `;
    dbconfig.query(qr, (err, result) => {
        if (!err) {
            res.status(200).json({
                data: result[0]
            })
        } else {
            res.status(404).json({
                err: err
            })
        }
    })

})

// Router for getting phone and address from backend 
// Path: http://localhost:5000/api/admin/phoneandaddress
// Method:POST
router.post("/phoneandaddress", (req, res) => {
    let ID = req.body.ID

    let qr = `Select * from resturant where ID = ${ID}`
    dbconfig.query(qr, (err, result) => {
        if (!err) {
            res.status(200).json({
                data: result
            })
        } else {
            res.status(500).json({
                message: "Something went wrong",
                error: err
            })
        }
    })
})

// Router for getting resturant information
// Path: http://localhost:5000/api/admin/getresturantinfo
// Method : POST
router.post("/getresturantinfo", (req, res) => {
    let ID = req.body.ID

    let qr = `Select * from resturant where ID = ${ID}`
    dbconfig.query(qr, (err, result) => {
        if (!err) {
            res.status(200).json({
                data: result
            })
        } else {
            res.status(500).json({
                message: "something went wrong",
                error: err
            })

        }
    })
})

// Router for getting all pages of corresponding resturant by resturant ID
// Path: http://localhost:5000/api/admin/getallpages
// METHOD:POST
router.post("/getallpages", (req, res) => {
    let ID = req.body.ID;

    let qr = `Select * from pages where resturant_ID = ${ID} and status = "true"`
    dbconfig.query(qr, (err, result) => {
        if (!err) {
            res.status(200).json({
                data: result
            })
        } else {
            res.status(500).json({
                message: "Something went wrong",
                error: err
            })
        }
    })
})

// Router for getting pages decxription
// PATH: http://localhost:5000/api/admin/getpagedesc
// METHOD: POST
router.post("/getpagedesc", (req, res) => {
    let ID = req.body.ID;

    let qr = `Select * from pages where ID = ${ID}`
    dbconfig.query(qr, (err, result) => {
        if (!err) {
            res.status(200).json({
                data: result
            })
        } else {
            res.status(500).json({
                message: "Something went wrong",
                error: err
            })
        }
    })
})


// ROUTER : Updating the image  of item by POST method PATH: http://localhost:5000/api/admin/updateitemimage
// STATUS: WORKING,
router.post('/updateitemimage', upload.single("photo2"), (req, res) => {
    let ID = req.body.itemID;
    const filename = req.body.photo2 ? req.body.photo2 : `/upload/${req.file.path.replace("upload", "")}`;

    let qr = `UPDATE item SET Image='${filename}' Where ID = ${ID}`;

    dbconfig.query(qr, (err, result) => {
        if (err) {
            console.log(err)
        }
        return res.send({
            message: 'data inserted'
        });

    });
})

module.exports = router
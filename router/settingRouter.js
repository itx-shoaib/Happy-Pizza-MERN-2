const express = require("express");
const router = express.Router();
const dbconfig = require('../db');
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

// Router 1 api is for super admin and admin for adding the resturnat.
// Router 1 : Registering the resturant information https://apinodejs.creativeparkingsolutions.com/api/setting/addresturantmanagement
// Status
router.post('/addresturant', (req, res) => {
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
    dbconfig.query(qr, (err, result) => {
        if (!err) {
            if (result.length === 0) {
                let qr = `INSERT INTO resturant(owner_name, owner_email,owner_address,owner_phone, domain,primary_color,secondary_color,app_name,delivery_min,location_search,stripe_connect, enable_stripe,stripe_key,stripe_secret,map_api,analytics,client_id,client_secret,redirect, fclient_id,fclient_secret,fclient_redirect,app_id,rapi_key,sms,optomany_enabled,oclient_id, oclient_secret,oterminal_id,otest_mode,name,description,address,phone,charges,minimum_order,average_order,time,status) VALUES ('${owner_name}', '${owner_email}', '${owner_address}', '${owner_phone}', '${domain}', '${primary_color}', '${secondary_color}', '${app_name}', '${delivery_min}', '', '${stripe_connect}', '${enable_stripe}', '${stripe_key}', '${stripe_secret}', '${map_api}', '${analytics}', '${client_id}', '${client_secret}', '${redirect}', '${fclient_id}', '${fclient_secret}', '${fclient_redirect}', '${app_id}', '${rapi_key}', '${sms}', '${optomany_enabled}', '${oclient_id}', '${oclient_secret}', '${oterminal_id}', '${otest_mode}','${name}','','','','','','','','true');`
                dbconfig.query(qr, (err, result1) => {
                    if (result1.affectedRows > 0) {
                        // res.json({
                        //     message:"data has been inserted"
                        // })
                        let qr = `SELECT * FROM customer
                    WHERE email = '${owner_email}'`
                        dbconfig.query(qr, (err, result) => {
                            if (!err) {
                                if (result.length <= 0) {
                                    let qr = `insert into customer(name,email,number,password,role,resturant_ID)
                                        values('${owner_name}','${owner_email}','${owner_phone}','admin1234',1,${result1.insertId})`
                                    dbconfig.query(qr, (err, result) => {
                                        if (err) {
                                            console.log(err, 'errs');
                                        }
                                        else {
                                            res.send({
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
                    } else {
                        res.status(404).json({
                            "message": "in",
                            error: err

                        })
                    }
                })

            } else {
                res.json({
                    message: "Email already existed"
                })
            }
        } else {
            res.json({
                "message": err,
                error: err
            })
        }
    })



})


// Router:
// Status:
router.post('/resturantmanagement', upload.fields([{ name: "photo", maxCount: 1 },
{ name: "cimage", maxCount: 1 },
{ name: "rimage", maxCount: 1 }
]), (req, res) => {
    let description = req.body.description;
    let address = req.body.address;
    let phone = req.body.phone;
    let charges = req.body.charges;
    let minimum_order = req.body.minimum_order;
    let average_order = req.body.average_order;
    let time = req.body.time;
    let id = req.body.id;
    let photo = req.files.photo[0].path;
    let cimage = req.files.cimage[0].path;
    let rimage = req.files.rimage[0].path;
    let cash = req.body.cash;
    let pickup = req.body.pickup;
    let delivery = req.body.delivery;

    let qr = `update resturant
    set minimum_order = '${minimum_order}', description ='${description}',
    average_order = '${average_order}',
    time = '${time}',
    address = '${address}',
    phone = '${phone}',
    charges = '${charges}',
    image = '${photo}',
    cimage= '${cimage}',
    rimage = '${rimage}',
    cash = '${cash}',
    pickup = '${pickup}',
    delivery = '${delivery}'
    where ID = ${id}`
    dbconfig.query(qr, (err, result) => {
        if (!err) {
            res.status(200).json({
                message: "Data has been updated"
            })
        } else {
            res.status(404).json({
                error: err
            })
        }
    })
})

// Router 2: https://apinodejs.creativeparkingsolutions.com/api/setting/loyality
// Status
router.post('/loyality', (req, res) => {
    let status = req.body.status;
    let redeem = req.body.redeem;
    let points = req.body.points;
    let currency_points = req.body.currency_points;
    let id = req.body.id;

    // let qr = `insert into loyality(status,redeem,points,currency_points)
    // values('${status}','${redeem}','${points}','${currency_points}')`
    let qr = `Select * from loyality where resturant_ID = ${id}`
    dbconfig.query(qr, (err, result) => {
        if (!err) {
            if (result.length <= 0) {
                let qr = `insert into loyality(status,redeem,points,currency_points,resturant_ID)
                values('${status}','${redeem}','${points}','${currency_points}',${id})`
                dbconfig.query(qr, (err, result) => {
                    if (!err) {
                        res.status(200).json({
                            message: "Data has been inserted"
                        })
                    } else {
                        res.status(404).json({
                            error: err
                        })
                    }
                })
            } else {
                let qr = `update loyality set status = '${status}',
                redeem = '${redeem}',
                points = '${points}',
                currency_points = '${currency_points}'
                where resturant_ID = ${id}`
                dbconfig.query(qr, (err, result) => {
                    if (!err) {
                        res.status(200).json({
                            message: "data has been updated"
                        })
                    } else {
                        res.status(404).json({
                            error: err
                        })
                    }
                })
            }
        }
        else {
            console.log(err, "err")
        }
    })
})

// Router 3: https://apinodejs.creativeparkingsolutions.com/api/setting/referral
// Status:
router.post('/referral', (req, res) => {
    let status = req.body.status;
    let new_customer = req.body.new_customer;
    let existing_customer = req.body.existing_customer;
    let id = req.body.id;

    let qr = `Select * from referral where resturant_ID = ${id}`
    // let qr = `Insert into referral(status,new_customer,existing_customer)
    // values('${status}','${new_customer}','${existing_customer}')`
    dbconfig.query(qr, (err, result) => {
        if (!err) {
            if (result.length <= 0) {
                let qr = `Insert into referral(status,new_customer,existing_customer,resturant_ID)
                values('${status}','${new_customer}','${existing_customer}',${id})`
                dbconfig.query(qr, (err, result) => {
                    if (!err) {
                        res.status(200).json({
                            message: "data has been inserted"
                        })
                    } else {
                        res.status(404).json({
                            error: err
                        })
                    }
                })
            } else {
                let qr = `update referral set status= '${status}',
                new_customer = '${new_customer}',
                existing_customer = '${existing_customer}'
                where resturant_ID = ${id}
                `
                dbconfig.query(qr, (err, result) => {
                    if (!err) {
                        res.status(200).json({
                            message: "data has been updated"
                        })
                    } else {
                        res.status(404).json({
                            error: err
                        })
                    }
                })
            }
        } else {
            console.log(err, "err")
        }
    })
})

// Router 4: https://apinodejs.creativeparkingsolutions.com/api/setting/config
// Status:
router.post('/config', (req, res) => {
    let order_time = req.body.order_time;
    let otp = req.body.otp;
    let id = req.body.id

    // let qr = `Insert into config(order_time,otp)
    // values('${order_time}','${otp}')`
    let qr = `Select * from config where resturant_ID = ${id}`
    dbconfig.query(qr, (err, result) => {
        if (!err) {
            if (result.length <= 0) {
                let qr = `Insert into config(order_time,otp,resturant_ID)
                values('${order_time}','${otp}',${id})`
                dbconfig.query(qr, (err, result) => {
                    if (!err) {
                        res.status(200).json({
                            messgae: "data has been inserted"
                        })
                    } else {
                        res.status(404).json({
                            error: err
                        })
                    }
                })
            } else {
                let qr = `update config set order_time= '${order_time}',
                otp = '${otp}'
                where resturant_ID = ${id}
                `
                dbconfig.query(qr, (err, result) => {
                    if (!err) {
                        res.status(200).json({
                            message: "Data has been updeted"
                        })
                    } else {
                        res.status(404).json({
                            error: err
                        })
                    }
                })
            }
        } else {
            console.log(err, "err")
        }
    })
})

// router 5: https://apinodejs.creativeparkingsolutions.com/api/setting/menutype
// status:
router.post('/menutype', (req, res) => {
    let lowercase = req.body.lowercase;
    let uppercase = req.body.uppercase;
    let capitalized = req.body.capitalized;
    let id = req.body.id

    // let qr = `insert into menutype(lowercase,uppercase,capitalized)
    // values('${lowercase}','${uppercase}','${capitalized}')`
    let qr = `Select * from menutype where resturant_ID = ${id}`
    dbconfig.query(qr, (err, result) => {
        if (!err) {
            if (result.length <= 0) {
                let qr = `insert into menutype(lowercase,uppercase,capitalized,resturant_ID)
                values('${lowercase}','${uppercase}','${capitalized}',${id})`
                dbconfig.query(qr, (err, result) => {
                    if (!err) {
                        res.status(200).json({
                            message: "Data has been inserted"
                        })
                    } else {
                        res.status(404).json({
                            error: err
                        })
                    }
                })
            } else {
                let qr = `update menutype set lowercase = '${lowercase}',
                uppercase = '${uppercase}',
                capitalized = '${capitalized}'
                where resturant_ID = ${id}
                `
                dbconfig.query(qr, (err, result) => {
                    if (!err) {
                        res.status(200).json({
                            message: "data has been updated"
                        })
                    } else {
                        res.status(404).json({
                            error: err
                        })
                    }
                })
            }
        } else {
            console.log(err, "err")
        }
    })
})

// Router 6: https://apinodejs.creativeparkingsolutions.com/api/setting/apps
// Status:
router.post("/apps", (req, res) => {
    let title = req.body.title;
    let description = req.body.description;
    let api_key = req.body.api_key;
    let main_printer = req.body.main_printer;
    let standard_printer = req.body.standard_printer;
    let kitchen_printer = req.body.kitchen_printer;
    let standard_print = req.body.standard_print;
    let main_print = req.body.main_print;
    let kitchen_print = req.body.kitchen_print;
    let id = req.body.id

    // let qr = `Insert into app(title,description,api_key,main_printer,kitchen_printer,standard_printer,standard_print,main_print,kitchen_print)
    // values('${title}','${description}','${api_key}','${main_printer}','${kitchen_printer}','${standard_printer}','${standard_print}','${main_print}','${kitchen_print}')`
    let qr = `Select * from app where resturant_ID = ${id}`
    dbconfig.query(qr, (err, result) => {
        if (!err) {
            if (result.length <= 0) {
                let qr = `Insert into app(title,description,api_key,main_printer,kitchen_printer,standard_printer,standard_print,main_print,kitchen_print,resturant_ID)
                    values('${title}','${description}','${api_key}','${main_printer}','${kitchen_printer}','${standard_printer}','${standard_print}','${main_print}','${kitchen_print}',${id})`
                dbconfig.query(qr, (err, result) => {
                    if (!err) {
                        res.status(200).json({
                            message: "Data has been insterted"
                        })
                    } else {
                        res.status(404).json({
                            error: err
                        })
                    }
                })
            }
            else {
                let qr = `update app set  title='${title}',
                description = '${description}',
                api_key='${api_key}',
                main_printer='${main_printer}',
                kitchen_printer='${kitchen_printer}',
                standard_printer = '${standard_printer}',
                standard_print = '${standard_print}',
                main_print = '${main_print}',
                kitchen_print = '${kitchen_print}'
                where resturant_ID = ${id}
                `
                dbconfig.query(qr, (err, result) => {
                    if (!err) {
                        res.status(200).json({
                            message: "Data has been updated"
                        })
                    } else {
                        res.status(404).json({
                            error: err
                        })
                    }
                })
            }
        } else {
            console.log(err, "err")
        }
    })
})

// Router for add timings / Path: http://localhost:5000/api/setting/addtimings
router.post("/addtimings", (req, res) => {
    let id = req.body.id;
    let description = req.body.description;

    let qr = `Select count(*) as 'total' from timing where resturant_ID = ${id}`
    dbconfig.query(qr, (err, result) => {
        if (!err) {
            if (result[0]['total'] === 0) {
                let qr = `Insert into timing (resturant_ID,description)
                values (${id},'${description}') `
                dbconfig.query(qr, (err, result) => {
                    if (!err) {
                        res.status(200).json({
                            message: "Data has been inserted"
                        })
                    } else {
                        res.status(404).json({
                            message: "Something went wrong"
                        })
                    }
                })
            }
            else {
                let qr = `Update timing 
                set description = '${description}'
                where resturant_ID = ${id}`
                dbconfig.query(qr, (err, result) => {
                    if (!err) {
                        res.status(200).json({
                            message: "Data has been updated"
                        })
                    } else {
                        res.status(500).json({
                            message: "Something went wrong"
                        })
                    }
                })
            }
        } else {
            res.status(500).json({
                message: "Something went wrong"
            })
        }
    })
})

// Router for Gallery / Path: http://localhost:5000/api/setting/addgallery
router.post("/addgallery", upload.single("image"), (req, res) => {
    let id = req.body.id;
    let link = req.body.link;
    const filename = req.file.path;

    let qr = `Select count(*) as 'total' from gallery where resturant_ID = ${id} `
    dbconfig.query(qr, (err, result) => {
        if (!err) {
            if (result[0]['total'] === 0) {
                let qr = `Insert into gallery (resturant_ID,link,image)
                values (${id},'${link}','${filename}') `
                dbconfig.query(qr, (err, result) => {
                    if (!err) {
                        res.status(200).json({
                            message: "Data has been inserted"
                        })
                    } else {
                        res.status(404).json({
                            message: "Incomplete requirements"
                        })
                    }
                })
            } else {
                let qr = `Update timing 
                set link = '${link}',
                image ='${filename}'
                where resturant_ID = ${id} `
                dbconfig.query(qr, (err, result) => {
                    if (!err) {
                        res.status(200).json({
                            message: "Data has been updated"
                        })
                    } else {
                        res.status(404).json({
                            message: "Invalid requirements"
                        })
                    }
                })
            }
        } else {
            res.status(500).json({
                message: "Something went wrong with this link"
            })
        }
    })
})

// Router for addcontent / Path: http://localhost:5000/api/setting/addcontent
router.post("/addcontent", upload.fields([{ name: "menu", maxCount: 1 },
{ name: "banner1", maxCount: 1 },
{ name: "banner2", maxCount: 1 },
{ name: "banner3", maxCount: 1 },
{ name: "banner4", maxCount: 1 },
{ name: "banner5", maxCount: 1 },
{ name: "box1icon", maxCount: 1 },
{ name: "box2icon", maxCount: 1 },
{ name: "box3icon", maxCount: 1 }
]), (req, res) => {
    let id = req.body.id;
    let frontendtemplate = req.body.frontendtemplate;
    let fadmintemplate = req.body.fadmintemplate;
    let pcolor = req.body.pcolor;
    let scolor = req.body.scolor;
    let title1 = req.body.title1;
    let title2 = req.body.title2;
    let description1 = req.body.description1;
    let bannertext1 = req.body.bannertext1;
    let box1title = req.body.box1title;
    let box1link = req.body.box1link;
    let box2description = req.body.box2description;
    let box3title = req.body.box3title;
    let box3link = req.body.box3link;
    let box3link2 = req.body.box3link2;
    let description2 = req.body.description2
    let bannertext2 = req.body.bannertext2
    let box1description = req.body.box1description;
    let box2title = req.body.box2title;
    let box2link = req.body.box2link;
    let box3description = req.body.box3description;


    // images
    let menu = req.files.menu[0].path;
    let banner1 = req.files.banner1[0].path;
    let banner2 = req.files.banner2[0].path;
    let banner3 = req.files.banner3[0].path;
    let banner4 = req.files.banner4[0].path;
    let banner5 = req.files.banner5[0].path;
    let box1icon = req.files.box1icon[0].path;
    let box2icon = req.files.box2icon[0].path;
    let box3icon = req.files.box3icon[0].path;

    let qr = `Select count(*) as 'total' from content where resturant_ID = ${id}`
    dbconfig.query(qr, (err, result) => {
        if (!err) {
            if (result[0]['total'] === 0) {
                let qr = `INSERT INTO content(resturant_ID,frontendtemplate,fadmintemplate,pcolor,scolor, title1,title2,description1,bannertext1,box1title,box1link,box2description,box3title, box3link, box3link2,menu,banner1,banner2,banner3,banner4,banner5,box1icon,box2icon,box3icon, description2,bannertext2,box1description,box2title,box2link,box3description) VALUES ('${id}','${frontendtemplate}','${fadmintemplate}','${pcolor}','${scolor}','${title1}','${title2}','${description1}','${bannertext1}','${box1title}','${box1link}','${box2description}','${box3title}','${box3link}','${box3link2}','${menu}','${banner1}','${banner2}','${banner3}','${banner4}','${banner5}','${box1icon}','${box2icon}','${box3icon}','${description2}','${bannertext2}','${box1description}','${box2title}','${box2link}','${box3description}')`
                dbconfig.query(qr, (err, result) => {
                    if (!err) {
                        res.status(200).json({
                            message: "Data has been added"
                        })
                    } else {
                        res.status(404).json({
                            message: "Invalid requirements"
                        })
                    }
                })
            } else {
                let qr = `UPDATE content SET frontendtemplate='[value-3]',
                fadmintemplate='${fadmintemplate}',
                pcolor='${pcolor}',
                scolor='${scolor}',
                title1='${title1}',
                title2='${title2}',
                description1='${description1}',
                bannertext1='${bannertext1}',
                box1title='${box1title}',
                box1link='${box1link}',
                box2description='${box2description}',
                box3title='${box3title}',
                box3link='${box3link}',
                box3link2='${box3link2}',
                menu='${menu}',
                banner1='${banner1}',
                banner2='${banner2}',
                banner3='${banner3}',
                banner4='${banner4}',
                banner5='${banner5}',
                box1icon='${box1icon}',
                box2icon='${box2icon}',
                box3icon='${box3icon}',
                description2='${description2}',
                bannertext2='${bannertext2}',
                box1description='${box1description}',
                box2title='${box2title}',
                box2link='${box2link}',
                box3description='${box3description}' 
                WHERE resturant_ID=${id}`
                dbconfig.query(qr, (err, result) => {
                    if (!err) {
                        res.status(200).json({
                            message: "data has been updated successfully"
                        })
                    } else {
                        res.status(404).json({
                            message: "Failed! try again"
                        })
                    }
                })
            }
        } else {
            res.status(500).json({
                message: "Something went wrong"
            })
        }
    })
})

// Router for Delivery area zone form 
router.post("/addzone", (req, res) => {
    let name = req.body.name;
    let discount = req.body.discount;
    let delivery = req.body.delivery;
    let delay = req.body.delay;
    let radius = req.body.radius;
    let active = req.body.active;
    let resturant_ID = req.body.resturant_ID;

    let qr = `INSERT INTO zone(name, discount, delivery, delay, radius, active, resturant_ID) VALUES ('${name}' ,'${discount}','${delivery}','${delay}','${radius}','${active}','${resturant_ID}')`
    dbconfig.query(qr, (err, result) => {
        if (!err) {
            res.status(200).json({
                message: "Data has been inserted"
            })
        } else {
            res.status(500).json({
                message: "Something went wrong",
                error: err
            })
        }
    })
})

module.exports = router
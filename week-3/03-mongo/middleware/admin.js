const { Admin } = require("../db");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    Admin.find({
        username,
        password    
    }).then((value)=>{
        if(value.length !== 0){
            next();
        }else{
            res.status(400).json({
                message:"user is not a admin",
                check:value
            })
        }
    }).catch((error)=>{
        res.status(500).json({
            message:"Some Error",
            check: error
        })
    })
}

module.exports = adminMiddleware;
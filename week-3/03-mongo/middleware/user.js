const { User } = require("../db");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    User.find({
        username : req.headers.username,
        password : req.headers.password
    }).then((value)=>{
        if(value.length !== 0){
            next();
        }else{
            res.status(400).json({
                message:"User does not exist",
                check: value
            })
        }
    })
}

module.exports = userMiddleware;
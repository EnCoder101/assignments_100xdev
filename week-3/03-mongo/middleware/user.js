const { User } = require("../db");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    User.find({
        username : req.body.username,
        password : req.body.password
    }).then((value)=>{
        if(value){
            next();
        }else{
            res.status(400).json({
                message:"User doesnt exist"
            })
        }
    })
}

module.exports = userMiddleware;
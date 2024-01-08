const jwt = require('jsonwebtoken');

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const bearerToken = req.headers.authorization;
    const token = bearerToken.split(" ")[1];
    try{
        const decoded = jwt.verify(token,"1");
        req.username = decoded.username;
        req.password = decoded.password;
        next();;
    } catch(err){
        console.log(err);
        res.status(400).json({
            message:"invalid credentials",
            check: err
        })
    } 
}

module.exports = userMiddleware;
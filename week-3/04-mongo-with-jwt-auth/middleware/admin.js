const jwt = require('jsonwebtoken');
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const bearerToken = req.headers.authorization;
    const token = bearerToken.split(" ")[1];
    try{
        const decoded = jwt.verify(token,"1");
        next();
    }catch(err){
        console.log(err);
        res.status(400).json({
            message: "invalid credentials"
        })
    }
}

module.exports = adminMiddleware;
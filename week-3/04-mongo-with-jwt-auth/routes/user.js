const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require('jsonwebtoken')

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    const userExist = await User.find({
        username,password
    })
    try{
        if(userExist.length == 0){
            const newUser = await User.create({
                username,password
            })
            res.status(200).json({
                message: "user created",
                check : newUser
            })
        }else{
            res.status(400).json({
                message: "user alrady exist",
                check : userExist
            })
        }
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "internal server error",
            check : err
        })
    }
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    try{
        const token = jwt.sign({username,password},"1");
        res.status(200).json({
            token
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "internal server error",
            check: err
        })
    }
    
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    try{
        const courses = await Course.find({});
        res.status(200).json({
            courses
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "internal server error",
            check: err
        })
    }
});

router.post('/courses/:courseId',userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    // const userData = jwt.decode(req.headers.authorization.split(" ")[1]);
    const userData = {
        username: req.username,
        password: req.password
    }
    try{
        const courseAdded = await User.updateOne({
            username : userData.username,
            password : userData.password
        },{
            "$push":{
                purchasedCourses : courseId
            }
        })
        res.status(200).json({
            message:"Course purchased successfully",
            check: courseAdded
        })
        }
    catch(err){
        console.log(err);
        res.status(500).json({
            message: "internal server error",
            check: err
        })
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    // const decodedData = jwt.decode(req.headers.authorization.split(" ")[1]);
    const decodedData = {
        username: req.username
    }
    const userData = await User.findOne({
        username : decodedData.username
    })

    const purchasedCourses = await Course.find({
        _id : userData.purchasedCourses
    })
    try{
        if(purchasedCourses){
            res.status(200).json({
                message: "course purchased",
                check: purchasedCourses
            })
        }else{
            res.status(400).json({
                message: "No purchased course found",
                check: purchasedCourses
            })
        }
    }catch(err){
        res.status(500).json({
            message: "some error",
            check: err
        })
    }
});

module.exports = router
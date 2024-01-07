const { Router, response } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    User.find({
        username        
    }).then((value)=>{
        if(value.length == 0){
            User.create({
                username,
                password
            }).then(
                res.status(200).json({
                    message : "User Created",
                    check : value
                })
                )
            }else{
            res.status(400).json({
                message : "User Alreay Exist",
                check : value
            })
        }
    }).catch((err)=>{
        res.status(500).json({
            message : "Some Error",
            check : err
        });
    })
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find({}).then((courses)=>{
        res.status(200).json({
            courses
        })
    }).catch((err)=>{
        res.status(500).json({
            check : err
        })
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username; 
    const password = req.headers.password; 

    User.updateOne({
        username,
        password
    },{
        "$push" :{
            purchasedCourses : courseId
        }
    }).then((value)=>{
        res.status(200).json({
            message: 'Course purchased successfully',
            check:value
        })
    }
    ).catch((err)=>{
        res.status(400).json({
            message: "some error",
            check: err
        })
    })
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username; 
    User.findOne({
        username
    }).then((value)=>{
        return Course.find({
            _id:{
                "$in": value.purchasedCourses
            }
        })
    }).then((courses)=>{
        res.status(200).json({
            message: 'Course purchased list',
            courses : courses
        })
    })
});

module.exports = router
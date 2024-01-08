const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const jwt = require('jsonwebtoken');

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    try{
        const userExist = await Admin.findOne({username})
        if(!userExist){
            const adminUser =  await Admin.create({
                username,
                password
            })
            res.status(200).json({
                message:"admin user created",
                user: adminUser
            })
        }else{
            res.status(400).json({
                message:"user already exist",
                user:userExist
            })
        }
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const token = jwt.sign({username,password},"1");
    res.status(200).json({
        token
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;
    const courseExist = await Course.find({
        title,
        description,
        price,
        imageLink
    })
    try{
        if(courseExist.length == 0){
            const course = await Course.create({
                title,
                description,
                price,
                imageLink
            })
            res.status(200).json({
                message: "Course created successfully",
                courseId: course._id
            })
        }else{
            res.status(400).json({
                message: "Course already exist"
            })
        }    
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allCourse = await Course.find({})
    res.status(200).json({
        allCourse
    })
});

module.exports = router;
const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    Admin.find({
        username,password
    }).then((value)=>{
        if(value.length == 0){
            Admin.create({
                username,
                password
            }).then(            
                res.json({
                message: "user is created.",
                check: value
            }));
        }
        else{
            res.status(400).json({
                message: "user Already Exist",
                check: value
            })
        }
    }).catch((error)=>{
        res.status(400).json({
            message: "some Error",
            check: error
        })
    })
    
});
router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;
    Course.find({
        title,
        description,
        price,
        imageLink
    }).then((value)=>{
        if(value.length == 0){
            Course.create({
                title,
                description,
                price,
                imageLink
            }).then((value)=>{
                res.json({
                    message: "Course is created.",
                    courseId: value._id
                })
            });
        }
        else{
            res.status(400).json({
                message: "Course Already Exist",
                check: value
            })
        }
    }).catch((error)=>{
        res.status(400).json({
            message: "some Error",
            check: error
        })
    })
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
        Course.find({}).then((courses)=>{
            res.status(200).json({
                courses
            })
        }).catch((err)=>{
            res.status(400).json({
                message: err
            })
        })

});

module.exports = router;
const express =  require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors())

// body ={
//     title :String,
//     description :String
// }

app.post('/createTodo', async (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(400).json({ 
            msg: "wrong Inputs",
            check: parsedPayload
        })
    }else{
        const newtodo = await todo.create({
            title: createPayload.title,
            description: createPayload.description,
            completed: false
        })
        res.status(200).json({
            msg: "new todo is creates",
            check: newtodo
        })
    }
})

app.get('/todos',(req,res)=>{
    todo.find({}).then((value)=>{
        res.status(200).json({
            value
        })
    }).catch((err)=>{
        res.status(500).json({
            msg: err
        })
    })  
})
     
app.put('/updateTodo', async (req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(400).json({
            msg : "wrong Inputs"
        })
    }else{
        await todo.updateOne({
            _id: updatePayload.id
        }, {
          completed: true  
        })
    
        res.json({
            msg: "Todo marked as completed"
        })
    }
})

app.listen(3000,()=>{
    console.log("app is running on Port No 3000")
});
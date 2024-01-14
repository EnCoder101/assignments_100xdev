const mongoose = require('mongoose');

// todo = {
//     type:String,
//     description:String,
//     completed: Boolean
// }
mongoose.connect('mongodb+srv://adamyabansal:oD6zWZpv1spTSIDD@cluster0.bt5f0jp.mongodb.net/todoApp')

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}
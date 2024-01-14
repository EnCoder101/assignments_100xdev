const zod = require('zod')

// body = {
//     title : string,
//     description : string
// }


const createTodo = zod.object({
        title : zod.string().min(1),
        description : zod.string().min(1)
})

const updateTodo = zod.object({
    id: zod.string(),
})

module.exports = {
    createTodo:createTodo,
    updateTodo:updateTodo
}
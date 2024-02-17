import { client } from "../index";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    try{
        const insertQuery = `
        INSERT INTO todos (
            user_id,
            title,
            description
            ) VALUES ($1,$2,$3)
            RETURNING *
        `
        const values = [userId,title,description]
        const createNewTodo  = await client.query(insertQuery,values);
        return createNewTodo.rows[0];
    }catch(err){
        console.log("Some Error")
        return err;
    }
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    try{
        const updateQuery = `
            UPDATE todos 
            SET done = true
            WHERE id = $1
            RETURNING * ;
        `
        const value = [todoId];
        const updateThatTodo = await client.query(updateQuery,value);
        return updateThatTodo.rows[0];
    }catch(err){
        console.log("Some Error")
        return err;
    }
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    try{
        const getTodoQuery = `
            SELECT * FROM todos
            WHERE user_id = $1; 
        `
        const value = [userId];
        const getUserTodo = await client.query(getTodoQuery,value);
        return Array.isArray(getUserTodo.rows) ? getUserTodo.rows : []; 
    }catch(err){
        console.log("Some Error",err)
        return [];
    }
}
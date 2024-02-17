import { client } from "../index";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    try{
        const createUserQuery = `
            INSERT INTO users (
                username,
                password,
                name
            ) VALUES ($1,$2,$3) 
        `;
        const value = [username,password,name];
        const createNewUser = await client.query(createUserQuery,value);
        return createNewUser.rows[0]
    }
    catch(err){
        console.log("Some Error")
        return err
    }
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    try{
        const getUserQuery = `
            Select * from users 
            where id = $1
        `
        const userID = [userId];
        const getThatUser = await client.query(getUserQuery,userID)
        return getThatUser.rows[0];
    }catch(err){
        console.log("Some Error")
        return err
    }
}

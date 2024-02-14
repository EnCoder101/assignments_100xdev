import { Client } from "pg"

// write a function to create the users table in your db

const client = new Client({
    // host:'',
    // port: 5334,
    // database: '',
    // user: '',
    // password: ""
    connectionString: "postgresql://mrmobuu:qFd6EyYrx0sI@ep-orange-band-a1y0mryu.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
})

// client.connect()


async function createUsersTable(){
    await client.connect()
    const result = await client.query(`
        CREATE TABLE users2 (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result)
}

async function putDataInTable(){
    try{
        await client.connect();
        // without SQL INJECTION .... insecure way
        // const res = await client.query(`
        // INSERT INTO users2 (
        //     username,
        //     email,
        //     password)
        // VALUES ('username_here', 'username@example.com','username_password')
        // `);
        const insertQuery = `        
        INSERT INTO users2 (
            username,
            email,
            password)
        VALUES ($1, $2,$3)
        `;
        const values = ["username","email","password"];
        const res = await client.query(insertQuery,values);
        console.log("data is Inserted : " ,res)
    }
    catch(err){
        console.log("Some Error during Insertion: " , err);
    }finally{
        await client.end()
    }
}

async function getUser(email:string){
    try{
        await client.connect();
        const searchQuery = `
            select * from users2
            where "email" = $1
        `
        // const searchInputValue = [email]; // entering values
        const res = await client.query(searchQuery,
            [email] //searchInputValue
            );


        if(res.rows.length > 0){
            console.log("Search value : " , res);
        }else{
            console.log("No User Found for given email")
        }
    }catch(err){
        console.log("Some Error in fetching Data" , err);
    }finally{
        await client.end()
    }
}
// createUsersTable();
// putDataInTable();
getUser("email")
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// write a function to create the users table in your db
const client = new pg_1.Client({
    // host:'',
    // port: 5334,
    // database: '',
    // user: '',
    // password: ""
    connectionString: "postgresql://mrmobuu:qFd6EyYrx0sI@ep-orange-band-a1y0mryu.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
});
// client.connect()
function createUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
        CREATE TABLE users2 (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
        console.log(result);
    });
}
function putDataInTable() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
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
            const values = ["username", "email", "password"];
            const res = yield client.query(insertQuery, values);
            console.log("data is Inserted : ", res);
        }
        catch (err) {
            console.log("Some Error during Insertion: ", err);
        }
        finally {
            yield client.end();
        }
    });
}
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const searchQuery = `
            select * from users2
            where "email" = $1
        `;
            const searchInputValue = [email]; // entering values
            const res = yield client.query(searchQuery, searchInputValue);
            if (res.rows.length > 0) {
                console.log("Search value : ", res);
            }
            else {
                console.log("No User Found for given email");
            }
        }
        catch (err) {
            console.log("Some Error in fetching Data", err);
        }
        finally {
            yield client.end();
        }
    });
}
// createUsersTable();
// putDataInTable();
getUser("email");

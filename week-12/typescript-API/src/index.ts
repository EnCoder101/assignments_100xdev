// interface User {
//     name: string
//     email: string
//     age: number
// }

// type updatedProps = Pick<User , 'name' | 'age'>

// type updatedPropsOptional = Partial<updatedProps>

// function sumOfAge(user1: updatedPropsOptional, user2: User) {
//     return (user1.age ?? 0) + user2.age
// }

// const age = sumOfAge({
//     age : 22
// }, {
//     name: "john doe",
//     email: "john doe",
//     age : 33    
// })
// console.log(age);



// // readonly
// type User = {
//     readonly name : string
//     readonly age : number
// }
// type User1 = {
//     name : string
//     age : number
// }

// //AM
// const obj2 : Readonly<User1> ={ // when we want the object to be the ready only value
//     name : "Adamya",
//     age : 20
// } 

// const obj : User = {
//     name : "adamya",
//     age : 22
// }

// does not allow when type has ready only value 
// obj.age = 23 
// obj2.age = 22


//records

// type Users = {
//     [key : string] : User
// }

// type User = {
//     id : string;
//     username : string;
// }

// type Users = {
//     [key : string] : {
//         id: string
//         username : string
//     }
// }

//ugly ways to write a syntax |^|

// type Users = Record<string , { id: string , username : string}> // cleaner ways to write a syntax in ts , its a typescript specific thing 

// const users: Users = {
//     "idno1":{
//         id : "idno1",
//         username : "name"
//     },
//     "idno2":{
//         id : "idno2",
//         username : "name"
//     }
// }

//maps // its a javascript concepts 
// const users = new Map()
// const users = new Map<string,number>() // key need to be a string and value need to be a number
// users.set("adamya",22)
// users.set("mobu",20)

// console.log(users.get("mobu"))


// exclude
// type EventType = 'click' | 'scroll' | 'mousemove';
// type ExcludeEvent = Exclude<EventType, 'scroll'>; // 'click' | 'mousemove'

// const handleEvent = (event: ExcludeEvent) => {
//   console.log(`Handling event: ${event}`);
// };

// handleEvent('click'); // OK
// handleEvent('scroll'); // NOT OK


// zod inference schema 
import z from 'zod';
const stringZodSchema = z.number();
type stringZodType = z.infer<typeof stringZodSchema>;


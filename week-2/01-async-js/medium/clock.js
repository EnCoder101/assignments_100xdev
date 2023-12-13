// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)



// setInterval(()=>{
//     const date = new Date();
//     console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
// },1000);


// setInterval(()=>{
//     const date = new Date();
//     console.log(date.toLocaleTimeString().toLocaleUpperCase());
// },1000);


// for(let i = 0;i<1000000;i++){
//     setTimeout(() => {
//         const date = new Date();
//         console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
//     }, 1000 * i);
// }


// for(let i = 0;i<1000000;i++){
//     setTimeout(() => {
//         const date = new Date();
//         console.log(date.toLocaleTimeString().toLocaleUpperCase());
//     }, 1000 * i);
// }

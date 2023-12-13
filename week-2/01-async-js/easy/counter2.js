// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
for(let i = 0 ; i < 1000; i++){
    setTimeout(()=>{
        console.log(i+1)
    },1000*i)
}
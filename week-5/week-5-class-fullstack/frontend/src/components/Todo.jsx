

// todo = [
//     {
//         title: "title",
//         description : "description"
//     },
//     {
//         title: "title",
//         description : "description"
//     },
// ]


export function Todo({todos}){

    return  <div>
                {todos.map((todo)=>{
                    return <div>
                                <h1>{todo.title} </h1>
                                <h2>{todo.description}</h2>
                                <button onClick={()=>{
                                    fetch("http://localhost:3000/updateTodo",{
                                        method: "PUT",
                                        body:JSON.stringify({
                                            id: todo._id
                                        }),
                                        headers :{
                                            "Content-Type" : "application/json"
                                        }
                                    }).then(async (res)=>{
                                        const json = await res.json();
                                        alert("Todo Updated")
                                    })
                                }}>{todo.completed == true ? "Completed" : "Mark As Complete"} </button>
                            </div>
                })}
            </div>
}

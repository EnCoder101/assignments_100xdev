import { useState } from 'react';
import './App.css'



function App() {
  let [title , setTitle] = useState("")
  let [description , setdescription] = useState("")
  let [todos,setTodos] = useState([])

  function addTodo(){
    setTodos([...todos,{
      title,
      description
    }])
  }

  return (
    <div>
      <div>
        title:
        <br />
        <input type="text" id="title" value={title} onChange={(e)=> setTitle(e.target.value)} />
        <br />
        description:
        <br />
        <input type="text" id="description" value={description} onChange={(e)=> setdescription(e.target.value)} />
      </div>
      <button onClick={addTodo}>add Todo</button>
      {todos.map(function(todo){
       return <Todo title={todo.title} description={todo.description}  />
      })}
    </div>
  )
}

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h3>{props.description}</h3>
  </div>
}


export default App

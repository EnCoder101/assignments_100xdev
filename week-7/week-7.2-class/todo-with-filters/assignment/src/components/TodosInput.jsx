import { useRecoilState, } from "recoil"
import { TodoAtom } from "../atoms/todoAtom"
import { useState } from "react";

export function TodosInput(){
    const [todo,setTodo]= useRecoilState(TodoAtom);
    const [title,setTitle]= useState();
    const [description,setDescription]= useState();
    function addTodo(){
        setTodo([...todo,{
            title: title,
            description: description
        }])
    }

    return (
        <div>
            <input type="text" placeholder="Enter Title" value = {title} onChange={e => setTitle(e.target.value)} />
            <br /><br />
            <input type="text" placeholder="Enter Description" value = {description} onChange={e => setDescription(e.target.value)} />
            <br /><br />
            <button onClick={addTodo}>Add Todo</button>
        </div>
    )
}


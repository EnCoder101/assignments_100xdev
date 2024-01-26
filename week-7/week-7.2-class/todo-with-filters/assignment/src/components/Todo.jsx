import { useRecoilValue } from "recoil"
import { TodoAtom } from "../atoms/todoAtom"

export function Todos(){
    const todos = useRecoilValue(TodoAtom)
    let id = 1
    return  (
        <div>
            <h1>Todos list</h1>
            {todos.map((todo) => {
                return(<div style={{paddingLeft: 20 }}>
                        
                        <h2><span>{id++}.</span> {todo.title} </h2>
                        <h4>{todo.description} </h4>
                        <br />
                    </div>)
            })}
        </div>
    )
}
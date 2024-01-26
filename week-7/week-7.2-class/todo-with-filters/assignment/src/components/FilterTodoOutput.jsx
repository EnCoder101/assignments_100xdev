import { useRecoilState, useRecoilValue } from "recoil";
import { FilterTodoAtom, TodoAtom, showFilterSelector } from "../atoms/todoAtom";

export function FilterTodoOutput(){
    const [filterTodos,setFilterTodo] =useRecoilState(FilterTodoAtom);
    const todos = useRecoilValue(TodoAtom);
    // const showFilter = useRecoilValue(showFilterSelector) // not working ??

    let i = 1;
    function findTodo(){
        const filtered = todos.filter((todo)=> todo.title.includes(filterTodos.title))
        console.log(filtered)
        setFilterTodo(filtered)
    }
    return (
        <div>
            <button onClick={findTodo}>Find</button>
            {/* {showFilter} */}
            <br /><br />
            {filterTodos[0] !== undefined && filterTodos.map((filterTodo)=>{
                return(
                    <div>
                        <h4>Filtered Value</h4>
                        <h5><span>{i++}.</span> {filterTodo?.title} </h5>
                        <h5>{filterTodo?.description} </h5>
                    </div>
                )
            })}
        </div>
    )
}
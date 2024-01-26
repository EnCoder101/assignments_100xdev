import { useRecoilState } from "recoil";
import { FilterTodoOutput } from "./FilterTodoOutput";
import { FilterTodoAtom } from "../atoms/todoAtom";

export function FIlterTodoInput() {
    const [filterTodo,setFilterTodo]= useRecoilState(FilterTodoAtom)

    return (
        <div>
            <h4>Filter</h4>
            <input type="text" placeholder="Enter the Title" value={filterTodo.title} onChange={e => setFilterTodo({title: (e.target.value)})}/>
            <br /><br />
            <FilterTodoOutput />
        </div>
    )
}
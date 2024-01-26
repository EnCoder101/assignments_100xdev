import { atom } from "recoil"

export const TodoAtom = atom({
    key: "TodoAtom",
    default : [
        {
        title : "Do something1",
        description: "Do something2"
    },
        {
        title : "Do3",
        description: "Do4"
    },
]
})


export const FilterTodoAtom = atom({
    key: "FilterTodo",
    default: {
        title:"",
        description:""
    }
})

export const showFilterSelector = atom({
    key: "showFilterSelector",
    get : ({get})=>{
        const filtertodo = get(FilterTodoAtom)
        return(
            <div>
                heyy
            </div>
        )
    }
})
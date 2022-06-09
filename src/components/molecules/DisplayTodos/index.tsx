import React from "react";
import { TodoStoreImpl } from "../../../store";
import {Todoitem} from "../../atoms/TodoItem/index";
import {observer} from "mobx-react";

interface TodoListProps{
    todoStore:TodoStoreImpl;
}

export const DisplayTodos:React.FC<TodoListProps> =  observer(({todoStore})=>{

    return(
        <>
        {todoStore.todos.map((item,index)=>{
            return (<Todoitem content={item.title} val={item.completed}  onClick={()=>{todoStore.toggleTodo(index)}}/>)
        })}
        
        </>
        
    );

}
)
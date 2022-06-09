import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import { TextFileds } from "../../atoms/TextField";
import { Buttons } from "../../atoms/Button";
import { TodoStoreImpl } from "../../../store";
import { TodoStore } from "../../../store";
import {observer} from "mobx-react";

interface TodoListProps{
    todoStore:TodoStoreImpl;
}

export const Todo:React.FC<TodoListProps> = observer(({todoStore})=>{
    //const [value,setValue] = useState("");

    return(
        <Grid container>
            <Grid item xs={7} sx={{marginRight:"20px"}} ><TextFileds  label={"todo item"} onChange={(event) => { return todoStore.setValue(event.target.value); } } todoStore={TodoStore}/></Grid>            
            <Grid item xs={3}> <Buttons text={"Add Todo"} onClick={()=>{

                if(todoStore.value!=""){
                    todoStore.addTodo(todoStore.value);
                    todoStore.setValue("");
                }
                
                
                }}/></Grid>
        </Grid>
        
    )
});
import React from "react";
import { DisplayTodos } from "../components/molecules/DisplayTodos";
import { Todo } from "../components/organisms/Todo";
import { TodoStore } from "../store";
import Grid from '@mui/material/Grid';
import {observer} from "mobx-react";
import { TodoStoreImpl } from "../store";

interface TodoStore{
    todostore:TodoStoreImpl;
}

export const  HomePage:React.FC<TodoStore> = observer(({todostore})=>{

    const status = todostore.status;
    return(
     <Grid  container sx={{marginTop:"70px",marginLeft:"50px"}}>
         <Grid item xs={12}><Todo todoStore={TodoStore}/> </Grid>
         <Grid item xs={12}><DisplayTodos todoStore={TodoStore} /></Grid>
         <Grid item xs={6}> <h4>Completed: {status.completed}</h4></Grid>
         <Grid item xs={6}><h4>Remaining : {status.remaining}</h4></Grid>

         

     </Grid>
      
           
        
        

        
    )

})
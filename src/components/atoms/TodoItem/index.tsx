import React from 'react';
import Alert from '@mui/material/Alert';

interface TodoitemProps{
    content:string;
    onClick?:()=>void;
    val?:boolean
}

export const Todoitem : React.FC<TodoitemProps>=(props)=>{
    return(
        <Alert severity={props.val?"success":"info"} onClick={props.onClick} sx={{width:"50%"}}>{props.content}</Alert>
    );
}

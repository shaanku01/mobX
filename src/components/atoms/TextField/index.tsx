import React from "react";
import TextField from '@mui/material/TextField';
import { TodoStoreImpl } from "../../../store";
import {observer} from "mobx-react";

interface TextFieldProps{
    label?: String;
    onChange?:(event:any)=>void;
    value?:string;
    todoStore:TodoStoreImpl;

}

export const TextFileds:React.FC<TextFieldProps> = observer((props)=>{
    return(
        <TextField value={props.todoStore.value} id="outlined-basic" label={props.label} variant="outlined" onChange={props.onChange} sx={{width:"100%"}}/>
    )

})
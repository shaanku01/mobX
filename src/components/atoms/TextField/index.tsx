import React from "react";
import TextField from '@mui/material/TextField';

interface TextFieldProps{
    label?: String;
    onChange?:(event:any)=>void;
    value?:string

}

export const TextFileds:React.FC<TextFieldProps> = (props)=>{
    return(
        <TextField value={props.value} id="outlined-basic" label={props.label} variant="outlined" onChange={props.onChange} sx={{width:"100%"}}/>
    )

}
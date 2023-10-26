import { Addtodo } from "./Addtodo/Addtodo"
import { Showtodo } from "./Showtodo/Showtodo"
import { useState } from "react"

export const AppTodo=()=>{
    let [Input,setInput]=useState("")
    function Handle(newInput){
        return(setInput(newInput))
    }
    return(
        <div>
            <Addtodo Handle={Handle}/>
            <Showtodo data={Input}/>
        </div>
    )
}
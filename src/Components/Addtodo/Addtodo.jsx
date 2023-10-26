import { useState } from 'react';
import './Addtodo.css';

export function Addtodo({Handle}){
    let [newInput,setnewInput]=useState("")
    function HandleInput(){
        
            if (newInput.trim()!==""){
                Handle(newInput)
            }else{
                alert("Enter Task Correctly")
            }
        setnewInput("")
    }
    return(
        <div className='FormContainer'>
                <input 
                className='Input' 
                placeholder='Enter your task' 
                value={newInput}
                onChange={(e)=>{setnewInput(e.target.value)}}
                />
                <button className='Button' onClick={HandleInput}>
                    AddTask
                </button>
            
        </div>
    )
}
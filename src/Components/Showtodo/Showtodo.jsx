import React, { useState } from 'react';
import './Showtodo.css';

export function Showtodo({ data }) {

    const [tasks, setTasks] = useState([]); 
    React.useEffect(() => {
        if (data) {
            setTasks((prevTasks) => [...prevTasks, {id:Date.now(),Text:data}]);
        }
    }, [data]);
    const Completed=(taskId)=>{
        const updatedtasks=tasks.filter((task)=> task.id!==taskId);
        setTasks(updatedtasks)
    }
    return (
        <div className='Tasks'>
            <h3>Tasks Go Here</h3>
            <div className='ListContainer'>
                <ul className='List'>
                    {tasks.map((task, index) => (
                        <li key={task.id} className='Taskitems'>{task.Text}
                        <button onClick={()=>Completed(task.id)} style={{marginLeft:'5%', border:'none',background:'green'}}>Completed</button></li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

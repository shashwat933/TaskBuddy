import React, { useState } from 'react'

const AddTask = (props) => {
    const [task, setTask] = useState('')
    const [error, setError] = useState(false);
    const addTaskHandler = () => {
        if (task.trim() === '') {
            setError(true);
            return;
        }

        props.onAdd({ todo: task, id: Math.random() });
        setTask('');
    }
    const cancelHandler = () => {
        setTask('');
    }
    const inputHandler = (event) => {
        setTask(event.target.value);
        if (task.trim() !== '') {
            setError(false);

        }
    }
    const classes = `w-full h-12 outline-none  placeholder:italic placeholder:text-slate-400 placeholder:text-lg block bg-white border  rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none   lg:text-lg ${error && 'border-red-500'}`
    return (
        <div className='md2:w-128 bg-black my-16 md2:my-8 mx-auto  '>
            <div className="task py-4 px-8 sm2:py-8 sm2:h-44 h-56 sm2:px-16 flex flex-col justify-around sm2:justify-between">
                <div>
                    <input onChange={inputHandler} type="text" className={classes} value={task} placeholder="Add a task" name="search" />
                   
                    {error && <p className='text-white text-right'>Enter a valid task</p>}
                </div>
                <div className='flex flex-col sm2:flex-row' >
                    <button className='bg-mine sm2:mb-0 mb-2 sm2:px-4 sm2:py-2 px-2 py-1 font-bold rounded-lg text-sm ' onClick={addTaskHandler}>Add Task</button>
                    <button className='bg-white sm2:mt-0 mt-2 sm2:px-4 sm2:py-2 px-2 py-1 font-bold sm2:ml-6 rounded-lg text-sm' onClick={cancelHandler}>Cancel</button>
                </div>
                
            </div>
        </div>
    )
}

export default AddTask
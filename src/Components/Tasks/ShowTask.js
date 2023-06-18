import React from 'react'
import ShowTasks from './ShowTasks'

const ShowTask = (props) => {
    const Tasks = props.tasks.filter((task) => task.todo.includes(props.searchedValue))
    if (Tasks.length === 0) {
        return <div className='md2:w-128   py-4 bg-black my-4 mx-auto '>
            <p className='text-black font-bold text-2xl sm2:w-96  w-3/4 text-center p-2  mx-auto bg-mine rounded-3xl '>TODOS</p>
            <div className='bg-white mx-16 py-2 rounded-2xl px-4 font-bold text-center mt-6 text-lg '>No task present.</div></div>
    }
    const deleteTask = (id) => {

        props.onDLT(id);
    }
    return (
        <div className='md2:w-128   pt-8 bg-black my-4 mx-auto '>

            <p className='text-black font-bold text-xl w-3/4 sm2:text-2xl  sm2:w-96  text-center p-1 sm2:p-2  mx-auto bg-mine rounded-3xl '>TODOS</p>
            <ul className='mt-6 pb-4'>
                {Tasks.map((task, id) => <ShowTasks searchedValue={props.searchedValue} key={id} dlt={deleteTask} id={task.id} item={task.todo} />)}
            </ul>
        </div>
    )
}

export default ShowTask
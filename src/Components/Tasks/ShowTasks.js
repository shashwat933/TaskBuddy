import React from 'react'

const ShowTasks = (props) => {
    const deleteTask = (event) => {
        props.dlt(event.target.id);
    }
   
    return (
        <>
            {props.item.includes(props.searchedValue) && <li className='relative bg-white mx-16 py-2 rounded-2xl pl-4 font-bold text-lg pr-8 mb-8' style={{ wordWrap: 'break-word' }}>{props.item}<span><i id={props.id} className="absolute  right-4 top-3 cursor-pointer fa-solid fa-trash" onClick={deleteTask} style={{ color: "#000000" }}></i></span></li> }
        </>
    )
}

export default ShowTasks
import React, { useState } from 'react'

import todoImage from '../../Assets/to-do-list.png'
const NavigationPC = (props) => {
    const [findValue, setFindValue] = useState("");
    const findValueHandler=(event)=>{
            setFindValue(event.target.value);
        props.onFind(event.target.value);
    }
    return (
        <div className='hidden sm:block'>
            <nav className='flex bg-black h-16  items-center justify-between  xl:px-80  md:px-44 ' >
                <ul className='flex justify-between items-center lg:w-64 w-44  text-white'>
                    <li><img className='h-12' src={todoImage} alt="" /></li>
                    <li><a href="#">TaskBuddy</a> </li>
                    <li><a href="https://www.linkedin.com/in/shashwat-gupta-899558231/" target="_blank">About</a></li>
                </ul>
                <div className='relative'>
                    <span className='absolute p-2'><i className="fa-solid fa-magnifying-glass" style={{ color: "#000000" }}></i></span>
                    <input type="search" value={findValue}  onChange={findValueHandler} className='outline-none py-2 pl-8 bg-mine2 text-black placeholder:text-black ' placeholder={`Search the notes`} />

                </div>
            </nav>
        </div>
    )
}

export default NavigationPC
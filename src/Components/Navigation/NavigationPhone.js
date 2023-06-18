import React, { useState } from 'react'
import todoImage from '../../Assets/to-do-list.png'
const NavigationPhone = (props) => {
    const [isClicked, setIsClicked] = useState(false)
    const buttonHandelr = () => {
        return setIsClicked(!isClicked)
    }
    const[findValue,setFindValue]=useState('');
    const findValueHandler = (event) => {
        setFindValue(event.target.value);
        props.onFind(event.target.value);
    }
    const classes = `flex transition-translate-y duration-1000 transition-duration-1000 flex-col bg-black py-4 text-white fixed top-0 w-full items-center ${!isClicked && '-translate-x-full'}`
    return (

        <div className='block sm:hidden relative '>
        <nav className=' transition duration-1000 ease-in-out flex bg-black h-16 justify-center items-center' >
                <ul className='flex items-center  justify-between w-full text-white p-8'>
                    <li onClick={buttonHandelr}><img className='h-12 cursor-pointer' src={todoImage} alt="" /></li>
                    <li className='grow text-center text-2xl'>TODO</li>
                </ul>
            </nav>
            
            <nav className={classes} >
                <span onClick={buttonHandelr}><i className="cursor-pointer absolute top-4 right-3 fa-sharp fa-xl fa-solid fa-xmark" style={{ color: '#adff45' }}></i></span>
                <div className='pb-4'>About</div>
                <div className='relative'>  <span className='absolute top-1 left-1'><i className="fa-solid fa-magnifying-glass" style={{ color: "#000000" }}></i></span>
                    <input type="search" value={findValue} onChange={findValueHandler} className='w-40 outline-none py-1 pl-7 bg-mine2 text-black placeholder:text-black ' placeholder={`Search the notes`} /></div>
            </nav>





        </div>
    )
}

export default NavigationPhone
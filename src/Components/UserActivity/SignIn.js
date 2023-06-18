import React, { useState } from 'react'

const SignIn = () => {
    const formSubmitHandler = (event) => {
        event.preventDefault();
    }
    const [error, setError] = useState(false);
    const classes = `w-full my-3  h-12 outline-none   placeholder:text-formPlaceholder placeholder:text-lg block bg-black border-2 border-formPlaceholder   rounded-sm py-6 pl-4 pr-3 shadow-sm focus:outline-none   lg:text-lg ${error && 'border-red-500'}`
    return (
        <div className='h-full w-1/5 mx-auto  '>
            <div className=" py-2  mt-28 px-6 flex flex-col  rounded-lg container bg-black text-white mx-auto">
                <div className='text-center w-full'><p className='mt-2 font-bold text-2xl mb-4'>Log in </p> <hr /></div>
                <div className='mt-3'>
                    <form onSubmit={formSubmitHandler}>
                        <label className='font-bold text-2xl ' htmlFor="email">Email</label>
                        <input type="email" className={classes} placeholder="Enter your email address" />
                        <label className='font-bold text-2xl ' htmlFor="email">Password</label>
                        <input type="password" className={classes} placeholder="Enter your password" />
                    </form>
                    <button className='bg-mine w-full sm2:mb-6 mt-2 mb-4 sm2:px-4 sm2:py-3 px-2 py-1 font-bold text-black rounded-sm text-2xl '>Log in</button>
                    <hr />
                </div>
                <div className='text-center my-4'>
                    <p className='text-xl'>Don’t have an account?</p>
                    <p className='text-mine cursor-pointer mt-2 text-xl font-bold'>Sign up</p>
                </div>
            </div>
        </div>
    )
}

export default SignIn
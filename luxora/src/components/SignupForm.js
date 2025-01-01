import React from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const SignupForm = () => {
    const [formData,setFormData]=useState({email:"" , password:"" , confirmpassword:""})
    const Navigate= useNavigate();
    function changeHandler(event){
       
        setFormData((prev)=>({...prev, [event.target.name]:event.target.value}))
    }
    
    
    function submitHandler(event){
        event.preventDefault();
        if(formData.password!=formData.confirmpassword){

            toast.error("Passwords doesn't match")
           
        }
        else{
            toast.success("Signed up")
            Navigate("/")
        }
        console.log(formData);
    }
  return (
    <div className='flex flex-col items-center m-20' >
        <div className='flex flex-col items-center justify-between bg-white w-1/3 h-auto mt-5 rounded-xl shadow-lg'>
        <form onSubmit={submitHandler} className='w-3/4 py-20 flex flex-col'>

            <label>
                <p className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 py-2">Email Address</p>
                <input
                   required
                   type='email'
                   name='email'
                   value={formData.email}
                   onChange={changeHandler}
                   placeholder='Enter your Email Address'
                   className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                >
                </input>
            </label>

            <label>
                <p className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 py-2">Password</p>
                <input
                   required
                   type='text'
                   name='password'
                   value={formData.password}
                   onChange={changeHandler}
                   placeholder='Enter Password'
                   className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                >
                </input>
            </label>

            
            <label>
                <p className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 py-2">Confirm Password</p>
                <input
                   required
                   type='text'
                   name='confirmpassword'
                   value={formData.confirmpassword}
                   onChange={changeHandler}
                   placeholder='Confirm Password'
                   className="mt-1 mb-8 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                >
                </input>
            </label>
    
            <button className=" bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">Sign Up</button>

        </form>
        </div>
    </div>
  )

}

export default SignupForm;
import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
const LoginForm = ({isLoggedin, setLogin}) => {
    const [formData,setFormData]=useState({email:"" , password:""})
    const Navigate= useNavigate();
    function changeHandler(event){
       
        setFormData((prev)=>({...prev, [event.target.name]:event.target.value}))
    }
    

    function submitHandler(event){
        event.preventDefault();
        fetch('/Login',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json', // Set the correct header
            },
            body : JSON.stringify({
                email:formData.email,
                password:formData.password,
            }),
        }).then((response) => response.json())
        .then((data) =>{
            if(data.message){
                setLogin(true);
                toast.success(data.message)
                Navigate('/Home')
                console.log(formData);
            }
            else{
                toast.error("Log in failed")
            }

        })
    }
  return (
    <div className='flex flex-col items-center min-h-screen p-6' >
        <div className='flex flex-col items-center bg-white w-full sm:w-3/4 md:w-1/2 lg:w-1/3 max-w-lg mt-10 rounded-xl shadow-lg p-8'>
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={submitHandler} className='w-full flex flex-col'>

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
                   className="mt-1 mb-8 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                >
                </input>
            </label>
    
            <button className=" bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">Login</button>

        </form>
        </div>
    </div>
  )
}

export default LoginForm;

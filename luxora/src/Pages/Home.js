import React from 'react'
import { useState } from 'react';
export default function Home() {
  const [inputContainer, setinput]= useState({input:""});
  function changeHandler(event){
     event.preventDefault();
    setinput((prev)=>({...prev ,[event.target.name]:event.target.value}))
  }
  return (
    <div className='h-3/4 '>
      <form className='w-full'>
         <label>
          <input
             type='text'
             name='input'
             value={inputContainer.input}
             onChange={changeHandler}             
             placeholder='Search for anything....'
             className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
          >
          </input>
         </label>
      </form>
    </div>
  )
}

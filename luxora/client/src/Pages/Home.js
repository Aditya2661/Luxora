import React from 'react'
import toast from 'react-hot-toast';
import { useState } from 'react';
export default function Home() {
  const [inputContainer, setinput] = useState({ input: "" });
  function changeHandler(event) {
    event.preventDefault();
    setinput((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  async function submitHandler(event) {
 

    try {
      const response = await fetch('/Home', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ searchedItem: inputContainer.input }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }

      const data = await response.json(); // Assuming the server returns JSON
      toast.success('Data submitted successfully!');
      console.log(data); // Handle the response data
    } catch (error) {
      toast.error(`Submission failed: ${error.message}`);
      console.error(error);
    }
  }

  return (
    <div className='h-3/4 '>
      <form className='w-full' onSubmit={submitHandler}>
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
        <button className='bg-white border border-slate-300 rounded-md m-3' >Search</button>
      </form>
    </div>
  )
}

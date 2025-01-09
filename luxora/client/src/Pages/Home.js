import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { FaMagnifyingGlass } from "react-icons/fa6";
import giphy from '../images/giphy.webp';
export default function Home() {
  const [inputContainer, setInput] = useState({ input: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Correct capitalization

  function changeHandler(event) {
    event.preventDefault();
    setInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }

  async function submitHandler(event) {
    event.preventDefault();
    toast.success('Searching Your Product');
    setLoading(true);

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



      // Navigate to Display page with products as state
      navigate('/Display', { state: { products: data.products } });
    } catch (error) {
      toast.error(`Submission failed: ${error.message}`);
      console.error(error);
    }
  }

  return (
    <div className="h-3/4">
      <form className="w-full" onSubmit={submitHandler}>
        <label>
          <input
            type="text"
            name="input"
            value={inputContainer.input}
            onChange={changeHandler}
            placeholder="Search for anything..."
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          />
        </label>
        <button
          type="submit"
          className="bg-white border border-slate-300 rounded-lg m-3  h-10"
          disabled={loading} // Disable the button while loading
        >
          {loading ? ("Searching...") : (
            <span className='flex justify-center gap-2 p-2'>
              <FaMagnifyingGlass className="mt-1"/>
              Search
            </span>
          )}
        </button>
      </form>

      {/* Loading Spinner */}
      {loading && (
        <div className="flex justify-center mt-4  ">
          <img src={giphy} alt="Loading..." className="h-1/5 w-1/4" />
        </div>
      )}
    </div>
  );
}
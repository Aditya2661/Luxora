import React from 'react'
import Logo from "../images/Logo.png"
import { Link } from 'react-router-dom'
import user from '../images/user.png'
import cartimg from "../images/shopping-cart.png"
import Goback from "../images/go-back.png"
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const NavBar = ({isLoggedin , setLogin }) => {
    const navigate=useNavigate();
    
    return (
        <div className='flex flex-row px-10 justify-between'>
            <Link to="/"><img src={Logo} width={180} ></img></Link>


            <div className='flex flex-row gap-5'>

                {   !isLoggedin &&
                    <Link to="/Login">
                        <button className='font-bold text-xl px-4 py-2'>Login</button>
                    </Link>
                }
                  {
                    !isLoggedin &&
                    <Link to="/Signup" >
                        <button className='bg-black font-bold rounded-full text-white text-xl px-4 py-2 border-rounded'>Sign up</button>
                    </Link>
                }

                {
                    isLoggedin &&
                   
                    <button  
                    onClick={()=>{
                        setLogin(false);
                        navigate('/');
                       
                        toast.success("Logged Out");
                     }
                    }
                     className='bg-black font-bold rounded-full text-white text-l px-4 mb-5 py-1 border-rounded'>Logout</button>
                 
                }
                {
                    isLoggedin &&
                    <Link to="/Dashboard" >
                    <button><img src={user} className='w-8'></img></button>
                    
                    </Link>
                }
                {
                    isLoggedin &&
                    <Link to="/Cart">
                    <button>
                        <img src={cartimg} className='w-8'></img>
                    </button>
                    </Link>
                }
                {   
                    isLoggedin && 
                    <Link onClick={
                        ()=>{
                            navigate(-1);
                        }
                    }>
                    <button >
                        <img alt="Go back" src={Goback} className='w-8'></img>
                    </button>
                    </Link>
                }
                
            </div>
        </div>
    )
}

export default NavBar;

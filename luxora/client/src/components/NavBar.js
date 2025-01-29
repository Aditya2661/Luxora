import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Logo from "../images/Logo.png";
import user from '../images/user.png';
import cartimg from "../images/shopping-cart.png";
import Goback from "../images/go-back.png";
import { Menu, X } from 'lucide-react'; // Using Lucide Icons for responsive menu

const NavBar = ({ isLoggedin, setLogin }) => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full px-6 md:px-10 py-4 flex items-center justify-between">
            {/* Left Side: Logo */}
            <Link to="/">
                <img src={Logo} alt="Logo" className="w-36 sm:w-44" />
            </Link>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Right Side: Navigation Links */}
            <div className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex md:items-center md:gap-6 transition-all duration-300 
            ${menuOpen ? "flex flex-col items-center gap-4 py-4 shadow-lg md:shadow-none" : "hidden md:flex"}`}>

                {!isLoggedin && (
                    <>
                        <Link to="/Login">
                            <button className="font-semibold text-lg px-4 py-2 hover:text-gray-700 transition">Login</button>
                        </Link>
                        <Link to="/Signup">
                            <button className="bg-black text-white font-semibold rounded-full text-lg px-5 py-2 hover:bg-gray-900 transition">Sign Up</button>
                        </Link>
                    </>
                )}

                {isLoggedin && (
                    <>
                        <button 
                            onClick={() => {
                                setLogin(false);
                                navigate('/');
                                toast.success("Logged Out");
                            }}
                            className="bg-black text-white font-semibold rounded-full text-lg px-4 py-2 hover:bg-gray-900 transition"
                        >
                            Logout
                        </button>

                        <Link to="/Dashboard">
                            <button>
                                <img src={user} className="w-7" alt="User" />
                            </button>
                        </Link>

                        <Link to="/Cart">
                            <button>
                                <img src={cartimg} className="w-7" alt="Cart" />
                            </button>
                        </Link>

                        <button onClick={() => navigate(-1)}>
                            <img src={Goback} className="w-7" alt="Go Back" />
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
};

export default NavBar;

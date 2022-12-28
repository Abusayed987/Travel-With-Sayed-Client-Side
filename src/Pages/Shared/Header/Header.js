import React from 'react';
import { FaCaretRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-zinc-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link>Services</Link></li>
                            <li><Link>About</Link></li>
                            <li><Link>Contact</Link></li>
                        </ul>
                    </div>
                    <a href='/' className='flex items-center'>
                        <img
                            className='w-20 mx-2'
                            src="https://media.tenor.com/n5i48L0PiyAAAAAi/airlines-travel.gif" alt=""
                        />
                        <span
                            className="normal-case text-2xl text-cyan-800">
                            <b className='text-3xl'>T</b>ravel With <b className='text-3xl'>S</b>ayed
                        </span>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg ">
                        <li><Link to='/'
                            className='hover:bg-cyan-700 hover:text-white hover:drop-shadow-2xl'
                        >Home</Link></li>
                        <li><Link to='/services'
                            className='hover:bg-cyan-700 hover:text-white hover:drop-shadow-2xl'
                        >Services</Link></li>
                        <li><Link to='/'
                            className='hover:bg-cyan-700 hover:text-white hover:drop-shadow-2xl'
                        >About</Link></li>
                        <li><Link
                            className='hover:bg-cyan-700 hover:text-white hover:drop-shadow-2xl'
                        >Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn btn-sm sm:btn-sm md:btn-md lg:btn-md  bg-cyan-800 text-white   hover:text-cyan-800 border-none hover:drop-shadow-2xl hover:bg-yellow-500 mr-3">Sign In <FaCaretRight></FaCaretRight></Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
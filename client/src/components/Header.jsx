import React from 'react'
import {FaSearch} from 'react-icons/fa'; //to add icons
import { Link } from 'react-router-dom'; //to link items to different pages

export default function Header() {
  return (
    <header className='bg-purple-100 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
      
      {/* icon */}
      <Link to="/">
      <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
          <span className='text-purple-600'>RENT</span>
          <span className='text-purple-900'>easy</span>
      </h1>
      </Link>

      {/* search bar */}
      <form className='bg-purple-50 p-3 rounded-lg flex items-center'>
        <input type="text" placeholder='Search' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
        <FaSearch className='text-purple-600'/>
      </form>

      {/* menu */}
      <ul className='flex gap-4 '>
        <Link to="/">
        <li className='hidden sm:inline text-purple-700 hover:underline'>
          Home
        </li>
        </Link>
        <Link to="/about">
        <li className='hidden sm:inline text-purple-700 hover:underline'>
        About
        </li>
        </Link>
        <Link to="/sign-in">
        <li className='text-purple-700 hover:underline'>Sign in</li>
        </Link>
      </ul>
      </div>
    </header>
  )
}

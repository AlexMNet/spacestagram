import React, { useState } from 'react';
import { IoRocketSharp } from 'react-icons/io5';
import { FaSpaceShuttle } from 'react-icons/fa';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className='flex items-center justify-between flex-wrap bg-sky-500 p-6 '>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <FaSpaceShuttle className='mr-3 text-2xl' />

        <span className='font-semibold text-xl tracking-tight'>Space</span>
        <span>stagram</span>
      </div>
      <div className='block lg:hidden'>
        <button
          className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <svg
            className='fill-current h-3 w-3'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
      </div>
      <div
        className={`w-full ${
          dropdownOpen ? 'block' : 'hidden'
        } flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className='text-sm lg:flex-grow  bg-sky-500'>
          <a
            href='#responsive-header'
            className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
          >
            Liked
          </a>
        </div>
      </div>
    </nav>
  );
}

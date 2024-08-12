import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar w-full border-b-2 border-gray-800 px-5 sm:px-12 py-4 text-lg flex justify-between items-center ' >
        <p>Admin Panel</p>
        <a href="https://spotify-clone-ruddy-rho.vercel.app/">
        <button className='cursor-pointer bg-[#003a10] text-white rounded-lg p-2 hover:bg-white hover:text-black hover:border-2 hover:border-[#003a10] '>Play Songs</button>
        </a>
    </div>
  )
}

export default Navbar

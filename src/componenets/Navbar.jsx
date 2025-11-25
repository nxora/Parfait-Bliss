import React, { useState } from 'react'
import Logo from './../assets/Logo.png'
import cart from './../assets/mdi_cart-outline.png'
import search from './../assets/mingcute_search-line.png'

function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className='flex justify-evenly relative z-10 h-20 items-center font-semibold'>
        
        {/* Logo */}
        <div>
          <img src={Logo} alt="" />
        </div>

        {/* Desktop Links */}
        <div className='hidden lg:flex gap-8'>
          <a href="#">Menu</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </div>

        {/* Desktop Icons */}
        <div className='md:flex gap-8 items-center hidden'>
          <a href=""><img src={cart} className='w-6' alt="" /></a>
          <a href=""><img src={search} className='w-6' alt="" /></a>
          <button type="button" className='bg-white px-6 py-2 rounded-lg'>Log In</button>
          <button type="button" className='bg-[#FF6B6B] px-6 py-2 rounded-lg'>Sign In</button>
        </div>

        {/* Hamburger Icon (Mobile Only) */}
        <div 
          className="md:hidden flex flex-col gap-1 cursor-pointer ml-[130px]"
          onClick={() => setOpen(!open)}
        >
          <div className={`w-6 h-1 bg-black transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-1 bg-black transition-all duration-300 ${open ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-1 bg-black transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </div>

      </nav>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6  shadow-md font-semibold fixed z-20 w-full rounded-md bg-[#E9BEB4]">
          
          <a href="#">Menu</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>

          <div className="flex flex-col gap-4 items-center">
            <button type="button" className='bg-white px-6 py-2 rounded-lg border'>Log In</button>
            <button type="button" className='bg-[#FF6B6B] px-6 py-2 rounded-lg'>Sign In</button>
          </div>

        </div>
      )}
    </div>
  )
}

export default Navbar

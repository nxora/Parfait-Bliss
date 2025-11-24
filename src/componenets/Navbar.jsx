import React from 'react'
import Logo from './../assets/Logo.png'
import cart from './../assets/mdi_cart-outline.png'
import search from './../assets/mingcute_search-line.png'

function Navbar() {
  return (
    <div>
         <nav className='flex justify-evenly relative z-10 h-20 items-center font-semibold'>
            <div><img src={Logo} alt=""  /></div>
            <div className='flex gap-8'>
              <a href="#">Menu</a>
              <a href="#">About Us</a>
              <a href="#">Contact</a>
            </div>
            <div className='flex gap-8 items-center'>
              <a href=""><img src={cart} className='w-6' alt="" /></a>
              <a href=""><img src={search} className='w-6' alt="" /></a>      
              <button type="button" className='bg-white px-6 py-2 rounded-lg' >Log In</button>
              <button type="button" className='bg-[#FF6B6B] px-6 py-2 rounded-lg'>Sign In</button>
            </div>
            </nav>
      
    </div>
  )
}

export default Navbar

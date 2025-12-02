import React, { useEffect, useState } from 'react'
import Logo from './../assets/Logo.png'
import cart from './../assets/mdi_cart-outline.png'
import search from './../assets/mingcute_search-line.png'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

function Navbar() {

  const [open, setOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0)
  const navigate = useNavigate()
  const {loggedIn, logout} = useAuth()

  // useEffect(() => {
  //   const token = localStorage.getItem("token")
  //   setLoggedIn(!!token)
  // }, [])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || []
    setCartCount(saved.reduce((sum, item) => sum + item.quantity, 0))
  }, [])

  return (
    <div>
      <nav className=' flex justify-evenly relative z-10 h-20 items-center font-semibold m-auto'>
        <div><img src={Logo} alt="" /></div>
        <div className='hidden lg:flex gap-8  '>
          <a href="#menu" className=' relative inline-block after:content-[" "] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition after:duration-300 hover:after:scale-x-100'>Menu</a>
          <a href="#about" className='relative inline-block after:content-[" "] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition after:duration-300 hover:after:scale-x-100'>About Us</a>
          <a href="#" className='relative inline-block after:content-[" "] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition after:duration-300 hover:after:scale-x-100'  onClick={() => alert("Our number is +234 *** *** whatsap only")}>Contact</a>
        </div>
        <div className='md:flex gap-8 items-center hidden'>
          <div className="relative"><a href="#" onClick={(e) => { e.preventDefault();  {navigate("/cart")}  }} className="block"><img src={cart} className='w-6' alt="Cart" /> 
            {cartCount > 0 && (<span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{cartCount}</span>)}
          </a>
          </div>

          <a href=""><img src={search} className='w-6' alt="" /></a>
          {!loggedIn && (
            <>
              <button type="button" className='bg-white px-6 py-2 rounded-lg transform transition-transform duration-300 hover:scale-105' onClick={() => navigate("/login")}>Log In</button>
              <button type="button" className='bg-[#FF6B6B] px-6 py-2 rounded-lg transform transition-transform duration-300 hover:scale-105' onClick={() => { navigate("/register") }}>Sign In</button>
            </>
          )}
        
        </div>
        <div
          className="md:hidden  flex flex-col gap-1 cursor-pointer -mr-52 "
          onClick={() => setOpen(!open)}
        >
          <div className={`w-6 h-1 bg-black transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-1 bg-black transition-all duration-300 ${open ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-1 bg-black transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </div>
      </nav>
      {open && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6  shadow-md font-semibold fixed z-20 w-full rounded-md bg-[#E9BEB4]">

          <a href="#menu">Menu</a>
          <a href="#about">About Us</a>
          <a href="#" onClick={() => alert("Our number is +234 *** *** whatsap only")}>Contact</a>

          {!loggedIn && (
            <div className="flex flex-col gap-4 items-center">
              <button type="button" className='bg-white px-6 py-2 rounded-lg border' onClick={() => navigate("/login")}>Log In</button>
              <button type="button" className='bg-[#FF6B6B] px-6 py-2 rounded-lg' onClick={() => { navigate("/register"); setOpen(false); }}> Sign In</button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Navbar

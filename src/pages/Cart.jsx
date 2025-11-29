import React, { useEffect, useState } from 'react'
import Footer from '../componenets/Footer'
import Navbar from '../componenets/Navbar'

function Cart() {
    const [cart, setCart] = useState([])
    const [direction, setDirection] = useState(null)

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("cart")) || []
        setCart(saved)
    })

    const updateQuantity = (id, delta) => {
        setCart(prev => prev.map(item => item._id === id ? {...item, quantity:Math.max(1, item.quantity + delta)} : item))
        setDirection(delta > 0 ? "up" :"down")
        setTimeout(() => setDirection(null), 200)
    }

    const removeItem = (id) => {
        const updated = cart.filter(item => item._id !== id)
        setCart(updated)
        localStorage.setItem("cart", JSON.stringify(updated))
    };
    
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

    if(cart.length === 0 ){
         return (
              <div className="bg-[#FBCEC3] h-screen flex flex-col items-center justify-center">
                <Navbar />
                <h2 className="text-3xl font-semibold text-[#A6374B] mb-4">Your Cart is Empty</h2>
                <p className="text-gray-700 mb-6">Looks like you haven't added anything yet.</p>
                <a
                  href="/"
                  className="px-6 py-3 bg-[#FF6B6B] text-white rounded-lg hover:bg-[#e55a5a] transition"
                >
                  Continue Shopping
                </a>
                <Footer />
              </div>
            );
    }
  return (
    <div className="bg-[#FBCEC3] h-full">
      <Navbar />
      
      <div className="max-w-5xl mx-auto px-4 pt-10 pb-20 flex flex-col lg:flex-row gap-10">

        <div className="flex-1 space-y-6">
          {cart.map(item => (
            <div
              key={item._id}
              className="bg-white flex flex-col sm:flex-row items-center rounded-2xl p-5 shadow-lg shadow-[#A6374B]/10"
            >
              <img
                src={`/assets/${item.image_url}`}
                className="w-32 h-32 rounded-xl object-cover"
              />

              <div className="sm:ml-6 flex flex-col flex-1">
                <h2 className="text-xl font-semibold text-[#A6374B]">{item.name}</h2>
                <p className="text-gray-600 w-64">{item.description.slice(0, 60)}...</p>

                <div className="flex items-center gap-3 mt-4">
                  <button
                    className="w-8 h-8 border border-[#A6374B] text-[#A6374B] rounded-full font-bold flex items-center justify-center hover:bg-[#A6374B] hover:text-white transition"
                    onClick={() => updateQuantity(item._id, -1)}
                  >
                    −
                  </button>

                  <span
                    className={`text-lg font-semibold w-6 text-center transition-transform duration-200 ${
                      direction === "up"
                        ? "-translate-y-2"
                        : direction === "down"
                        ? "translate-y-2"
                        : "translate-y-0"
                    }`}
                  >
                    {item.quantity}
                  </span>

                  <button
                    className="w-8 h-8 bg-[#A6374B] text-white rounded-full font-bold flex items-center justify-center hover:bg-[#8f2f3f] transition"
                    onClick={() => updateQuantity(item._id, 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-end mt-4 sm:mt-0">
                <p className="text-lg font-bold text-[#A6374B]">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => removeItem(item._id)}
                  className="text-sm text-[#ce576c] mt-2 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-96 bg-white rounded-2xl p-6 shadow-xl shadow-[#A6374B]/10 h-fit sticky top-20">
          <h3 className="text-2xl font-bold text-[#A6374B] mb-4">Order Summary</h3>

          <div className="flex justify-between text-lg mb-3">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-lg mb-6">
            <span>Delivery</span>
            <span className="text-gray-600">Calculated at checkout</span>
          </div>

          <hr className="border-[#E9BEB4] mb-6" />

          <button
            onClick={() => window.location.href = "/checkout"}
            className="w-full py-3 bg-[#FF6B6B] text-white rounded-lg text-lg font-semibold hover:bg-[#e55a5a] transition"
          >
            Proceed to Checkout
          </button>

          <a
            href="/"
            className="block mt-4 text-center text-[#A6374B] hover:underline"
          >
            Continue Shopping
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Cart

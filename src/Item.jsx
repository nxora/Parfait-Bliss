import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RelatedProduct from './componenets/RelatedProduct'
import Footer from './footer'
import Navbar from './componenets/Navbar'


function Item() {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const [quantity, setQuantity] = useState(0);
  const [direction, setDirection] = useState(null);


  useEffect(() => {
    axios.get(`http://localhost:5000/menu/${id}`)
      .then(res => setItem(res.data))
  }, [id])

  if (!item) return <div>Loading ....</div>
  return (
    <div className='bg-[#FBCEC3] w-[31.9em] sm:w-full'>
      <Navbar/>

    <div className=" text-center sm:text-left p-10 justify-center mx-auto flex flex-col sm:flex-row md:gap-24    ">
      <div>
        <img src={`/assets/${item.image_url}`} className="w-full h-full lg:w-[30em] lg:h-[40em] rounded-2xl object-cover" />
      </div>
      <div>
        <h1 className="text-3xl font-bold mt-6 ">{item.name}</h1>
        <p className="text-gray-600 mt-2 w-96  ">{item.description}</p>
        <p className="text-2xl mt-4 font-semibold">${item.price}</p>
        <div className="flex items-center gap-2 mx-[85px] my-[30px] sm:m-auto">
          <button className="w-8 h-8 bg-[#FFFFFF00] border border-black rounded-full flex items-center justify-center text-lg font-bold hover:scale-110 transition" onClick={() => {
            setQuantity(prev => Math.max(0, prev - 1)); setDirection('down'); etTimeout(() => setDirection(null), 200);
          }}> −</button>
          <span className={`text-lg font-semibold w-6 text-center transition-transform duration-200 ${direction === 'up' ? '-translate-y-2' : direction === 'down' ? 'translate-y-2' : 'translate-y-0'}`}>
            {quantity}
          </span>
          <button className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-lg font-bold hover:bg-gray-800 hover:scale-110 transition" onClick={() => {
            setQuantity(prev => prev + 1); setDirection('up'); setTimeout(() => setDirection(null), 200);
          }}> +</button>
          <button className="ml-4 px-10 py-2 bg-[#FF6B6B] text-white font-semibold rounded-lg hover:bg-[#e55a5a] transition">Cart</button>
        </div>
        <button className="mt-6 px-10 py-3 bg-[#FAD9D1] text-[#A6374B] rounded-lg border-[1px] border-[#E9BEB4]">Continue Shopping</button>
      </div>
    </div>
      <RelatedProduct/>
      <Footer />
    </div>
  )
}

export default Item 

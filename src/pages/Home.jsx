// Home.jsx
import React from 'react';
import back from './../assets/image 1.png';
import Navbar from '../components/Navbar';
import image from './../assets/Rectangle 1.png';
import grid1 from './../assets/Rectangle 2.png';
import grid2 from './../assets/Rectangle 3.png';
import grid3 from './../assets/Rectangle 4.png';
import grid4 from './../assets/Rectangle 5.png';
import MenuItems from '../components/MenuItems';
import comma from './../assets/“.png';
import pic from './../assets/Ellipse 1 (2).png';
import pic1 from './../assets/Ellipse 1 (1).png';
import pic2 from './../assets/Ellipse 1.png';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative">
      {/* Hero Section — full screen with bg image */}
      <div
        className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${back})` }}
      >
        {/* Navbar sits ON TOP of hero */}
        <Navbar />

        {/* Hero content — left-aligned, positioned with padding/top */}
        <div className="absolute left-0 top-0 h-full w-full flex items-center">
          <div className="ml-6 sm:ml-14 max-w-2xl">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#A6374B]">
              Cool. <span className="text-[#ce576c]">Creamy.<br /></span>
              <span className="text-[#F13C2D]">Craveable.</span>
            </h2>
            <p className="font-medium text-[18px] mt-4 text-white/90">
              Fresh Layers, fruity flavors, unforgettable taste
            </p>
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white font-semibold text-sm bg-[#FF6B6B] rounded-md px-4 py-2 border-[1px] relative transition-all duration-300 after:content-[''] after:absolute after:inset-0 after:border after:border-[#FFF8E7]/50 after:rounded-md after:scale-0 after:transition-transform after:duration-300 hover:after:scale-100"
              >
                Order Now
              </button>
              <button
                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-[#A6374B] font-semibold text-sm bg-[#E9BEB4] rounded-md px-4 py-2 border-[1px] relative transition-all duration-300 after:content-[''] after:absolute after:inset-0 after:border after:border-[#FFF8E7]/50 after:rounded-md after:scale-0 after:transition-transform after:duration-300 hover:after:scale-100"
              >
                View Menu
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the page — starts BELOW hero */}
      <div className="z-10 relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={image}
                alt="Parfait Bliss"
                className="w-full max-w-md rounded-3xl object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left" id="about">
              <h1 className="text-4xl lg:text-5xl font-bold text-[#A6374B] mb-6">
                The Heart of Parfait
              </h1>
              <p className="text-gray-700 text-lg mb-8">
                At Parfait Bliss, we believe happiness comes in layers just like our parfaits. Our journey began with a simple passion: to create fresh, wholesome, and delicious treats that bring joy to every spoonful.
              </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 w-full max-w-2xl mx-auto lg:mx-0">
  <img src={grid1} alt="" className="w-full rounded-lg object-cover aspect-square" />
  <img src={grid2} alt="" className="w-full rounded-lg object-cover aspect-square" />
  <img src={grid3} alt="" className="w-full rounded-lg object-cover aspect-square" />
  <img src={grid4} alt="" className="w-full rounded-lg object-cover aspect-square" />
</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F2D5D1] text-center py-16 px-4" id="menu">
        <h1 className="text-5xl font-bold text-transparent opacity-0 h-0">Parfaits</h1>
        <p className="font-medium text-slate-600 max-w-2xl mx-auto mb-8">
          Explore our range of handcrafted parfaits designed to delight and surprise.
        </p>
        <MenuItems />
        <button className="text-[#A6374B] font-semibold text-sm bg-[#E9BEB4] rounded-md px-4 py-2 border-[1px] mt-8 relative transition-all duration-300 after:content-[''] after:absolute after:inset-0 after:border after:border-[#FFF8E7]/50 after:rounded-lg after:scale-0 after:transition-transform after:duration-300 hover:after:scale-100">
          View Menu
        </button>
      </div>

      <div className="text-center bg-[#FFF8E7] py-24 px-4">
        <h1 className="text-4xl font-bold mb-12">What people say</h1>
        <p className="max-w-2xl mx-auto mb-12">
          Real stories from people who have tasted our parfait and had a great experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          {[{ img: pic, name: "Amina K" }, { img: pic1, name: "Micheal T" }, { img: pic2, name: "Alex Smith" }].map((review, i) => (
            <div key={i} className="bg-white rounded-xl w-full max-w-xs p-8">
              <img src={comma} alt="" className="mb-6" />
              <p className="mb-6">
                This parfait was the best I’ve ever had! Fresh fruits, crunchy granola, and creamy yogurt—absolutely perfect. I’ll definitely order again!
              </p>
              <div className="flex items-center gap-3">
                <img src={review.img} alt="" className="w-10 h-10 rounded-full" />
                <span className="font-semibold">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
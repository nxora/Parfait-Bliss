import React, { useEffect, useState } from "react";
import axios from "axios";
  
function MenuItems() {
  const [items, setItems] = useState([]);
  const [visibleItems, setVisibleItems] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/menu")
      .then(response => {
        console.log(response.data); // logs your menu items
        setItems(response.data);    // save data to state
      })
      .catch(err => console.error("Error fetching menu:", err));
  }, []);

  useEffect(() => {
    const handleResize = () => {
        const width = window.innerWidth
        let limit = 10
        if(width < 640){
            limit = 4
        } else if (width < 1024) {
            limit = 6
        }
        setVisibleItems(items.slice(0, limit))
    }
    handleResize()
    window.addEventListener('resize', handleResize)
  }, [items])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-6 m-14 ">
      {visibleItems.map(item => (
        <div key={item._id} className="text-center overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-105">
          <img
            src={`./assets/${item.image_url}`} // use the correct field from DB
            alt={item.name}
            className="w-1/2 h-30em object-fill  m-auto hover:rounded-lg cursor-pointer tr"          
          />
          <div className="p-4">
            <h3 className="text-xl font-bold">{item.name}</h3>
            <p className="text-gray-600 mt-2 w-3/4 m-auto">{item.description}</p>
            <p className="mt-2 font-semibold">${item.price}</p>
            <p className={`mt-1 ${item.availability ? "text-green-600" : "text-red-600"}`}>
              {item.availability ? "Available" : "Out of stock"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MenuItems;

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/login?redirect=checkout", {replace: true});

    axios
      .get(`{import.meta.env.VITE_API_URL}/auth/api/me`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUser(res.data))
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/login?redirect=checkout");
      });
  }, []);

 
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleWhatsAppOrder = () => {
    const orderList = cart
      .map((item) => `${item.name} x${item.quantity} - $${item.price * item.quantity}`)
      .join("%0A");

    const message = `Hello, I want to place an order:%0A${orderList}%0ATotal: $${total.toFixed(
      2
    )}%0AName: ${user.name}%0AEmail: ${user.email}`;

    window.open(`https://wa.me/08036820314?text=${message}`, "_blank");
  };

  return (
    <div className="bg-[#FBCEC3] h-screen  w-[33em] sm:w-full ">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-[#A6374B] mb-10">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="bg-white p-6 rounded-2xl shadow-xl shadow-[#A6374B]/10">
            <h2 className="text-xl font-semibold text-[#A6374B] mb-4">Your Info</h2>

            {user && (
              <div className="space-y-4">
                <p className="text-gray-700"><strong>Name:</strong> {user.name}</p>
                <p className="text-gray-700"><strong>Email:</strong> {user.email}</p>
              </div>
            )}

            <button
              onClick={() => navigate("/profile")}
              className="mt-6 px-6 py-2 bg-[#E9BEB4] text-[#A6374B] rounded-lg hover:bg-[#d6a7a0] transition"
            >
              Edit Details
            </button>
          </div>

          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-xl shadow-[#A6374B]/10">
            <h2 className="text-xl font-bold text-[#A6374B] mb-4">Order Summary</h2>

            <div className="space-y-4 max-h-[300px] overflow-auto pr-2">
              {cart.map((item) => (
                <div
                  key={item._id}
                  className="flex justify-between items-center bg-[#FAD9D1] p-3 rounded-xl"
                >
                  <div>
                    <p className="font-semibold text-[#A6374B]">{item.name}</p>
                    <p className="text-sm text-gray-700">
                      {item.quantity} × ${item.price}
                    </p>
                  </div>
                  <p className="font-bold text-[#A6374B]">
                    ${(item.quantity * item.price).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <hr className="my-6 border-[#E9BEB4]" />

            <div className="flex justify-between text-lg font-semibold mb-4">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button
            disabled={cart.length === 0}
              onClick={handleWhatsAppOrder}
              className="w-full py-3 bg-[#FF6B6B] text-white rounded-lg text-lg font-semibold hover:bg-[#e55a5a] transition"
            >
              Place Order via WhatsApp
            </button>

            <p className="text-sm text-center text-gray-600 mt-2">
              *You will complete payment via WhatsApp chat.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Checkout;

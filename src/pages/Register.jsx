import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", form); 

      setMsg("✔ Account created! You can now log in.");
    } catch (err) {
      setMsg(
        err.response?.data?.message ||
        "Registration failed. Try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFECEC] px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-[#A6374B] mb-6">
          Create Your Account
        </h1>

        {msg && (
          <p className="text-center mb-3 font-semibold text-[#A6374B]">{msg}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            name="name"
            type="text"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-[#E9BEB4] focus:ring-2 focus:ring-[#FF6B6B]"
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-[#E9BEB4] focus:ring-2 focus:ring-[#FF6B6B]"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-[#E9BEB4] focus:ring-2 focus:ring-[#FF6B6B]"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#FF6B6B] text-white py-3 rounded-lg font-semibold text-lg hover:bg-[#CE576C] transition duration-300"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>

        <p className="text-center text-sm text-[#A6374B] mt-4">
          Already have an account?{" "}
          <a href="/login" className="font-semibold text-[#FF6B6B]">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}

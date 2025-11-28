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
      const res = await axios.post("http://localhost:5000/auth/api/register", form);
    //   localStorage.setItem("token", res.data.token)
      setMsg("✔ Account created! Pls check inbox for verification link.");
    //   window.location.href = "/menu2"
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
    <div className="min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-[#FF6B6B] via-[#E9BEB4] to-[#A6374B] px-4">

      <div className="w-full max-w-md bg-white/20 backdrop-blur-lg 
        border border-white/30 shadow-xl rounded-2xl p-8">

        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Create Your Account
        </h1>

        {msg && (
          <p className="text-center mb-3 font-semibold text-white">
            {msg}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            name="name"
            value={form.name}
            type="text"
            placeholder="Full Name"
            autoComplete="current-password" 
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/70 
            border border-[#E9BEB4] focus:bg-white outline-none"
          />

          <input
            name="email"
            type="email"
            value={form.email}
            placeholder="Email Address"
            autoComplete="current-password" 
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/70 
            border border-[#E9BEB4] focus:bg-white outline-none"
          />

          <input
            name="password"
            type="password"
            value={form.password}
            placeholder="Password"
            autoComplete="current-password" 
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/70 
            border border-[#E9BEB4] focus:bg-white outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#A6374B] text-white py-3 rounded-lg 
            font-semibold text-lg hover:bg-[#8e2f40] transition duration-300"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>

        <p className="text-center text-sm text-white mt-4">
          Already have an account?{" "}
          <a href="/login" className="font-semibold text-[#FF6B6B]">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}

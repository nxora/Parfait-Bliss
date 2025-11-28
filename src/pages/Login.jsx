import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:5000/auth/api/login",
        { email, password }
      );

      localStorage.setItem("token", res.data.token);
      alert("Login successful");
     localStorage.setItem("token", res.data.token)
     window.location.href = "/"

    } catch (err) {
        const errorMsg = err.response?.data?.message || "Login Failed"
        if(errorMsg.includes("verify")){
            setError("Please verfy your email first. Check your inbox");
        } else {
            setError(errorMsg)
        }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (window.google){
        google.accounts.id.initialize({
            client_id: import.meta.env.VITE_CLIENT_ID,
            callback: handleGoogleResponse, ux_mode: 'popup'
        })

        google.accounts.id.renderButton(
            document.getElementById("google-login-button"), {theme: "outline", size: "large", width: "container"}
        )
    }
  }, [])

  async function handleGoogleResponse(response){
    try {
        const res = await axios.post("http://localhost:5000/auth/api/google", {
            credential: response.credential
        })
        localStorage.setItem("token", res.data.token)
        window.location.href = "/menu2"
    } catch (err) {
      setError("Google login failed. Please try again.");
      console.error(err);
    }
  }
  return (
    <div className="h-screen flex items-center justify-center 
      bg-gradient-to-br from-[#FF6B6B] via-[#CE576C] to-[#A6374B]">

      <div className="w-full max-w-md backdrop-blur-md bg-white/20 p-8 
        rounded-2xl shadow-xl border border-white/30">

        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Welcome Back
        </h1>

        {error && (
          <div className="bg-red-500/80 text-white text-center p-3 
            rounded-md mb-4">{error}</div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-white font-semibold">Email</label>
            <input
              type="email"
              className="w-full p-3 mt-1 rounded-lg bg-white/70 
              focus:bg-white outline-none border border-[#E9BEB4]  
              text-[#A6374B]"
              placeholder="example@mail.com"
              autoComplete="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-white font-semibold">Password</label>
            <input
              type="password"
              className="w-full p-3 mt-1 rounded-lg bg-white/70 focus:bg-white 
              outline-none border border-[#E9BEB4] text-[#A6374B]"
              value={password}
              autoComplete="current-password" 
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            disabled={loading}
            className="w-full p-3 rounded-lg bg-[#A6374B] hover:bg-[#8e2f40] 
            text-white font-semibold mt-4 transition-all active:scale-95 
            shadow-lg"
          >
            {loading ? "Logging In..." : "Login"}
          </button>
          
         <div className="my-6 text-center">
          <span className="text-white/70">or</span>
        </div>

        <div id="google-login-button" className=" "></div>
        </form>

      </div>
      </div>
  );
}

export default Login;

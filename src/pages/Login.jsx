import React, { useState } from 'react'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleLogin(e){
        e.preventDefault()
            setLoading(true)
            setError("")
        
            try {
                const res = await axios.post("http://localhost:5000/auth/login",{
                    email, password
                })
                localStorage.setItem("token", res.data.token)
                alert("Login successful")
            } catch (err) {
                setError(err.response?.data?.message || "Login Failed")
            }

    }
    return (
       <div className="h-screen flex items-center justify-center bg-gradient-to-br from-[#FF6B6B] via-[#CE576C] TO-[#A6374B]">
         <div className="w-full max-w-md backdrop-blur-md bg-white/20 p-8 rounded-2xl shadow-xl border border-white/30 animate-fadeIn scale-95 animate-scaleIn">
         <h1 className='text-3xl font-bold text-white text-center mb-6 drop-shadow-lg'>Welcome Back</h1>
         {error && (
            <div className="bg-red-500/80 text-white text-center p-3 rounded-md mb-4">error</div>
         )}

         <form onSubmit={handleLogin} className='space-y-4'>
            <div>
                <label className='text-white font-semibold'>Email</label>
                <input type="email" className='w-full p-3 mt-1 rounded-lg bg-white/70 focus:bg-white outline-none border-[#E9BEB4]  text-[#A6374B]  placeholder-[#A6374B]/60' placeholder='example@mail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

             <div>
                        <label className="text-white font-semibold">Password</label>
                        <input 
                          type="password"
                          className="w-full p-3 mt-1 rounded-lg bg-white/70 focus:bg-white 
                                     outline-none border border-[#E9BEB4] text-[#A6374B] 
                                     placeholder-[#A6374B]/60"
                          placeholder="••••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <button disabled={loading} className='w-full p-3 rounded-lg bg-[#A6374B] hover:bg-[#8e2f40] text-white font-semibold mt-4 transition-all active:scale-95 shadow-lg'> {loading ? "Logging In" : "Login"}</button>
         </form>
         </div>
       </div>
    )
}

export default Login

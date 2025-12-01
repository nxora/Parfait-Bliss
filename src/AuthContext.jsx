import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {

   const [loggedIn, setLoggedIn] = useState(false)
   const [user, setUser] = useState(null)

   useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
        setLoggedIn(true)
    }
   },[])

   const loginSuccess = (userData) => {
    setUser(userData)
    setLoggedIn(true)
   }

   const logout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{loggedIn, user, loginSuccess, logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth =  () => {
    const context = useContext(AuthContext)
    if(!context){
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}

export default AuthProvider

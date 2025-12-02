import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      if (token) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
        setUser(null);
      }
    };

    checkAuth();

    window.addEventListener('storage', checkAuth);
    
    const timer = setTimeout(checkAuth, 1000);

    return () => {
      window.removeEventListener('storage', checkAuth);
      clearTimeout(timer);
    };
  }, []);

  const loginSuccess = (userData) => {
    setLoggedIn(true);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, user, loginSuccess, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth =  () => {
    const context = useContext(AuthContext)
    if(!context){
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}

export default AuthProvider

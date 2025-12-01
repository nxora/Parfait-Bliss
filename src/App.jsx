 import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Item from './pages/Item'
import MenuItems2 from './components/RelatedProduct'
import Register from './pages/Register'
import Login from './pages/Login'
import VerifyEmail from './pages/VerifyEmail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import './index.css'
import AuthProvider from './AuthContext'
 
function App() {
 
  return (
    <AuthProvider>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/menu/:id' element={<Item />} />
    <Route path='/menu2' element={<MenuItems2 />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path="/verify/:token" element={<VerifyEmail />} />
    <Route path="/cart" element={<Cart/> } />
    <Route path="/checkout" element={<Checkout/> } />
   </Routes>
   </BrowserRouter>
    </AuthProvider>
  )
}

export default App

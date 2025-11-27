 import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Item from './pages/Item'
import MenuItems2 from './componenets/RelatedProduct'
import Login from './pages/Login'
import Register from './pages/Register'
 
function App() {
 
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Register/>} />
    <Route path='/menu/:id' element={<Item />} />
    <Route path='/menu2' element={<MenuItems2 />} />
    <Route path='/login' element={<Login />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App

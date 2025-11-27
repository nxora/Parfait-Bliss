 import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Item from './pages/Item'
import MenuItems2 from './componenets/RelatedProduct'
 
function App() {
 
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/menu/:id' element={<Item />} />
    <Route path='/menu2' element={<MenuItems2 />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App

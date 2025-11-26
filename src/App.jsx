 import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MenuItems from './componenets/MenuItems'
import Footer from './footer'
import Home from './Home'
import Seltion from './Seltion'
import Item from './Item'
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

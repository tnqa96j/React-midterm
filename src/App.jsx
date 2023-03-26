import 'antd/dist/reset.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import ProductsTotal from './pages/ProductsTotal';
import Qa from './pages/Qa';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='ProductsTotal' element={<ProductsTotal/>} />
      <Route path='About' element={<About/>} />
      <Route path='Qa' element={<Qa/>}/>
    </Routes>
    </BrowserRouter>

  )
}

export default App

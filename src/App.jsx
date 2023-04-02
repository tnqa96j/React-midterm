import 'antd/dist/reset.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import Product from './pages/Product';
import Qa from './pages/Qa';



function App() {


  return (
    <HelmetProvider context={{}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/AllProducts' element={<AllProducts />} >
            <Route path='category/:categoryName' element={<AllProducts />} />
          </Route>
          <Route path='product/id/:productId' element={<Product />} />
          <Route path='/About' element={<About />} />
          <Route path='/Qa' element={<Qa />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>

  )
}

export default App

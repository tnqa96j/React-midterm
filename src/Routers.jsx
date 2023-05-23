import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { useSelector } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import About from './pages/About';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import Product from './pages/Product';
import Qa from './pages/Qa';
import ScrollToTop from './components/ScrollToTop.jsx';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

import { lightTheme, darkTheme } from './theme'
import { selectLightMode } from './redux/colorSlice';

export default function Routers() {



  const lightMode = useSelector(selectLightMode);
  const theme = lightMode ? lightTheme : darkTheme;

  return (
    <ConfigProvider theme={theme}>
      <HelmetProvider context={{}}>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/AllProducts/:pageNumber' element={<AllProducts />} />
            <Route path='/AllProducts/category/:categoryName/:pageNumber' element={<AllProducts />} />
            <Route path='/AllProducts/category/:categoryName/:subCategoryName/:pageNumber' element={<AllProducts />} />
            <Route path='product/id/:productId' element={<Product />} />
            <Route path="auth">
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="profile" element={<Profile />} />
            </Route>
            <Route path='/About' element={<About />} />
            <Route path='/Qa' element={<Qa />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </ConfigProvider>
  )
}
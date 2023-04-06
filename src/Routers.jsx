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
import { useState } from 'react';

import { lightTheme, darkTheme } from './theme'
import { selectLightMode } from './redux/colorSlice';

export default function Routers() {

    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [breadcrumbCategory, setBreadcrumbCategory] = useState('');
    const [breadcrumbSubCategory, setBreadcrumbSubCategory] = useState('');

    const lightMode = useSelector(selectLightMode);
    const theme = lightMode ? lightTheme : darkTheme;

    return (
        <ConfigProvider theme={theme}>
            <HelmetProvider context={{}}>
              <Router>
                <ScrollToTop />
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/AllProducts' element={<AllProducts category={category} setCategory={setCategory} subCategory={subCategory} setSubCategory={setSubCategory} breadcrumbCategory={breadcrumbCategory} setBreadcrumbCategory={setBreadcrumbCategory} breadcrumbSubCategory={breadcrumbSubCategory} setBreadcrumbSubCategory={setBreadcrumbSubCategory} />} >
                    <Route path='category/:categoryName' element={<AllProducts category={category} setCategory={setCategory} subCategory={subCategory} setSubCategory={setSubCategory} breadcrumbCategory={breadcrumbCategory} setBreadcrumbCategory={setBreadcrumbCategory} breadcrumbSubCategory={breadcrumbSubCategory} setBreadcrumbSubCategory={setBreadcrumbSubCategory} />} />
                    <Route path='category/:categoryName/:subCategoryName' element={<AllProducts category={category} setCategory={setCategory} subCategory={subCategory} setSubCategory={setSubCategory} breadcrumbCategory={breadcrumbCategory} setBreadcrumbCategory={setBreadcrumbCategory} breadcrumbSubCategory={breadcrumbSubCategory} setBreadcrumbSubCategory={setBreadcrumbSubCategory} />} />
                  </Route>
                  <Route path='product/id/:productId' element={<Product category={category} setCategory={setCategory} subCategory={subCategory} setSubCategory={setSubCategory} breadcrumbCategory={breadcrumbCategory} setBreadcrumbCategory={setBreadcrumbCategory} breadcrumbSubCategory={breadcrumbSubCategory} setBreadcrumbSubCategory={setBreadcrumbSubCategory} />} />
                  <Route path='/About' element={<About />} />
                  <Route path='/Qa' element={<Qa />} />
                </Routes>
              </Router>
            </HelmetProvider>
          </ConfigProvider>
    )
}
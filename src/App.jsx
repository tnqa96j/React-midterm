import 'antd/dist/reset.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import Product from './pages/Product';
import Qa from './pages/Qa';
import { useState } from 'react';
import ScrollToTop from './components/ScrollToTop.jsx';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';



function App() {

  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [breadcrumbCategory, setBreadcrumbCategory] = useState('');
  const [breadcrumbSubCategory, setBreadcrumbSubCategory] = useState('');



  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
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
        </PersistGate>
      </Provider>
    </div>

  )
}

export default App

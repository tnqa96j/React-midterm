import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import SideMenu from "../components/SideMenu";
import products from "../json/products.json";


export default function ProductsTotal(){
    return(
        <div>
            <Header />
            
           
            <div className="container layoutContent">
            <h1 style={{color:'black',marginTop:'15%'}}>商品總覽</h1>
                <div className="productTotalContent">
                    <SideMenu />
                    <ProductList products={products}/>
                </div>
            </div>
            <Footer />
        </div>
    )
}
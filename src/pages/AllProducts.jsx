import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductsTotal from "../components/ProductsTotal";
import products from "../json/products.json";

/*商品導覽是否用麵包屑導覽代替?ㄋ */
export default function AllProducts(){
    return(
        <div>
            <Header />
            <div className="container layoutContent">
            <h1 style={{color:'black',marginTop:'15%'}}>商品總覽</h1> 
                <ProductsTotal products={products}/>
            </div>
            <Footer />
        </div>
    )
}
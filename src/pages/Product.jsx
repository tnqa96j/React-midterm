import Header from "../components/Header";
import ProductDetail from "../components/ProductDetail";
import Footer from "../components/Footer";

export default function Product(){
    return(
        <div>
            <Header />
            <div className="container" style={{marginBottom:'15%'}}>
                <h1 style={{color:'black',marginTop:'15%'}}>商品總覽＞小說＞懸疑推理</h1>
                <ProductDetail/>
            </div>

            <Footer />
        </div>
    )
}
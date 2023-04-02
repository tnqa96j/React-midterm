import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ProductDetail from "../components/ProductDetail";
import Footer from "../components/Footer";
import products from "../json/products.json";
import { Helmet } from "react-helmet-async";

export default function Product() {

    const { productId } = useParams();
    const product = products.find(
        (x) => x.id === productId
    );
    
    return (
        <div>
            <Helmet><title>{`宅小物 — ${product.name}`}</title></Helmet>
            <Header />
            <div className="container" style={{ marginBottom: '15%' }}>
                <h1 style={{ color: 'black', marginTop: '15%' }}>商品總覽＞小說＞懸疑推理</h1>
                <ProductDetail product={product} />
            </div>

            <Footer />
        </div>
    )
}
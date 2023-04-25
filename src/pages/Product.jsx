import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ProductDetail from "../components/ProductDetail";
import Footer from "../components/Footer";
import { useProducts } from "../react-query";
import { Helmet } from "react-helmet-async";
import { theme } from "antd";
import DayNightSwitcher from "../components/DayNightSwitcher";

export default function Product() {

    const {data , isLoading} = useProducts();
    const products = data || [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}]
    
    const { productId } = useParams();
    const product = products.find(
        (x) => x.id === productId
    );

    const {
        token: { colorBgBase, colorTextBase },
    } = theme.useToken();


    return (
        <div>
            <Helmet><title>{`宅小物 — ${product.name}`}</title>
                <style>{`
            body { 
              background-color: ${colorBgBase}; 
              color: ${colorTextBase}
            }
        `}</style>
            </Helmet>
            <Header />
            <div className="container">
                <div style={{ marginTop: '10vh' }}></div>
                <div style={{ display: "flex", flexDirection: 'row-reverse' }}>
                    <DayNightSwitcher />
                </div>
                <ProductDetail product={product}  />
                <div style={{ marginTop: '10vh' }}></div>
            </div>

            <Footer />
        </div>
    )
}
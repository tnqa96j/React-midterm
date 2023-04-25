import Header from "../components/Header";
import ProductSlider from "../components/ProductSlider";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import { theme } from "antd";
import SwiperCoverflow from "../components/SwiperCoverflow";
import { useProducts } from '../react-query';

/*重點:
    1.傳進ProductList的products參數是來自products.json的products物件
    2.因為是物件所以function ProductList({products}){} products要用大括號包起來
*/

export default function Home() {
    const {
        token: { colorBgBase, colorTextBase,fontFamily },
    } = theme.useToken();

    const { data, isLoading } = useProducts();
    const products = data || [];

    return (
        <div>
            <Helmet><title>宅小物</title>
                <style>{`
            body { 
              background-color: ${colorBgBase}; 
              color: ${colorTextBase};
              font-family:${fontFamily}
            }
        `}</style>
            </Helmet>
            <Header/>
            <div className="container layoutContent">
                <SwiperCoverflow products={products}/>
                <ProductSlider products={products}/>
            </div>
            <Footer className="layoutFooter" />
        </div>

    );
}
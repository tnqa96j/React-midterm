import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ProductDetail from "../components/ProductDetail";
import Footer from "../components/Footer";
import { useProductById ,useProducts} from "../react-query";
import { Helmet } from "react-helmet-async";
import { theme } from "antd";
import DayNightSwitcher from "../components/DayNightSwitcher";
import TopNavBar from "../components/TopNavbar";
import Footer1 from "../components/Footer1";
import ProductSlider from "../components/ProductSlider";

export default function Product() {

    const { productId } = useParams();

    const { data, isLoading } = useProductById(productId);
    const { data:allproduct } = useProducts();
    const product = data || {};

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

            <div className="top" style={{ backgroundColor: colorBgBase }}>
                <div className="container">
                    <Header />
                </div>

                <TopNavBar />
            </div>
            
            <div className="container">
                <div style={{ marginTop: '3rem' }}></div>

                <ProductDetail product={product} isLoading={isLoading} />
                <div style={{ marginTop: '10vh' }}></div>
            </div>

            <div className="container" style={{marginBottom:'5rem'}}>
                <h1>也許您也會喜歡</h1>
            <ProductSlider products={allproduct} category={5} subName={product.subCategoryTitle}/>
            </div>
            
            <Footer1 />
            <Footer />
        </div>
    )
}
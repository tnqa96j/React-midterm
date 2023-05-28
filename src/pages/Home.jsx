import Header from "../components/Header";
import ProductSlider from "../components/ProductSlider";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import { theme } from "antd";
import SwiperCoverflow from "../components/SwiperCoverflow";
import { useProducts } from '../react-query';
import TopNavBar from "../components/TopNavbar";
import Banner from "../components/Banner";
import NovelBlock from "../components/NovelBlock";
import MangaBlock from "../components/MangaBlock";
import PvcBlock from "../components/PvcBlock";
import Footer1 from "../components/Footer1";
import DayNightSwitcher from "../components/DayNightSwitcher";

/*重點:
    1.傳進ProductList的products參數是來自products.json的products物件
    2.因為是物件所以function ProductList({products}){} products要用大括號包起來
*/

/*
            <div className="container">
                <SwiperCoverflow products={products} />
            </div>
*/

export default function Home() {
    const {
        token: { colorBgBase, colorTextBase, fontFamily },
    } = theme.useToken();

    const { data, isLoading } = useProducts();
    const products = data || [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];

    return (
        <div className="mainLayout">
            <Helmet><title>宅小物</title>
                <style>{`
                    body { 
                        background-color: ${colorBgBase}; 
                        color: ${colorTextBase};
                        font-family:${fontFamily}
                        }
                `}</style>
            </Helmet>
            <div className="top" style={{backgroundColor:colorBgBase}}>
                <div className="container">
                    <Header />
                </div>

                <TopNavBar />
            </div>
            <Banner />

            <div className="container">
                <SwiperCoverflow products={products} />
            </div>

            <NovelBlock products={products}/>

            <MangaBlock products={products}/>

            <PvcBlock products={products}/>

            <Footer1 />

            <Footer className="layoutFooter" />
        </div>

    );
}
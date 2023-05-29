import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { theme } from "antd";
import Aboutus from "../components/Aboutus";
import Footer1 from "../components/Footer1";
import TopNavBar from "../components/TopNavbar";

export default function About(){

    const {
        token: { colorBgBase, colorTextBase },
    } = theme.useToken();

    return(
        <div>
            <Helmet><title>關於我們</title>
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
                    <div style={{ marginTop: '10vh' }}></div>
                    <Aboutus />
                    <div style={{ marginBottom: '20vh' }}></div>
                </div>
            <Footer1 />
            <Footer />
        </div>
    )
}
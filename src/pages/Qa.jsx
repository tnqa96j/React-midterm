import Header from "../components/Header";
import Footer from "../components/Footer";
import QA from "../components/QA";
import { Helmet } from "react-helmet-async";
import { theme } from "antd";
import Footer1 from "../components/Footer1";
import TopNavBar from "../components/TopNavbar";


export default function Qa(){

    const {
        token: { colorBgBase, colorTextBase },
    } = theme.useToken();

    return(
        <div>
            <Helmet><title>常見問答</title>
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
                    <div style={{marginTop:"10vh"}}></div>
                    <QA />
                    <div style={{marginTop:"20vh"}}></div>
                </div>
            <Footer1 />
            <Footer />
        </div>
    )
}
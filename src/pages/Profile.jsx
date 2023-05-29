import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";
import { Helmet } from "react-helmet-async";
import DayNightSwitcher from "../components/DayNightSwitcher";
import { theme } from "antd";
import TopNavBar from "../components/TopNavbar";

export default function Profile(){
    const {
        token: { colorBgBase, colorTextBase },
    } = theme.useToken();
    return(
        <div>
            <Helmet>
                <title>宅小屋 — 會員中心</title>
                <style>{`
                    body { 
                        background-color: ${colorBgBase}; 
                        color: ${colorTextBase}
                    }
            `}</style>
            </Helmet>

            <div className="top" style={{backgroundColor:colorBgBase}}>
                <div className="container">
                    <Header />
                </div>

                <TopNavBar />
            </div>
            
            <div className="container">
                <div style={{ marginTop: '10vh' }}></div>

                <h1>會員中心</h1>

                <ProfileCard />

                <div style={{ marginTop: '10vh' }}></div>
                
            </div>

            <Footer />

        </div>
    );
}
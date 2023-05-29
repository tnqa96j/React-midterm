import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import DayNightSwitcher from "../components/DayNightSwitcher";
import { theme } from "antd";
import RegisterCard from "../components/RegisterCard";
import { useSearchParams } from "react-router-dom";


export default function Register() {
    const {
        token: { colorBgBase, colorTextBase },
    } = theme.useToken();
    const [searchParams] = useSearchParams();
    const redirect = searchParams.get('redirect');
    return (
        <div>
            <Helmet>
                <title>宅小屋 — 註冊</title>
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
            </div>

            <div className="login">
                <div className="container">
                    <RegisterCard redirect={redirect} />
                    <div style={{ marginTop: '10vh' }}></div>
                </div>
            </div>

            <Footer />

        </div>
    );
}
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import DayNightSwitcher from "../components/DayNightSwitcher";
import { theme } from "antd";
import LoginCard from "../components/LoginCard";
import { useSearchParams } from "react-router-dom";


export default function Login() {
    const {
        token: { colorBgBase, colorTextBase },
    } = theme.useToken();

    const [searchParams] = useSearchParams();
    const redirect = searchParams.get('redirect');
    return (
        <div>
            <Helmet>
                <title>宅小屋 — 登錄</title>
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
                    <LoginCard redirect={redirect} />
                    <div style={{ marginTop: '10vh' }}></div>
                </div>
            </div>
            <Footer />

        </div>
    );
}
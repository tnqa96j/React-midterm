import Header from "../components/Header";
import Footer from "../components/Footer";
import QA from "../components/QA";
import { Helmet } from "react-helmet-async";



export default function Qa(){
    return(
        <div>
            <Helmet><title>常見問答</title></Helmet>
            <Header />
                <div className="container">
                    <h1 style={{marginTop:"15%",color:'black'}}> 常見問題</h1>
                    <QA />
                </div>
            <Footer />
        </div>
    )
}
import Header from "../components/Header";
import Footer from "../components/Footer";
import QA from "../components/QA";


export default function Qa(){
    return(
        <div>
            <Header />
                <div className="container">
                    <h1 style={{marginTop:"15%",color:'black'}}> 常見問題</h1>
                    <QA />
                </div>
            <Footer />
        </div>
    )
}
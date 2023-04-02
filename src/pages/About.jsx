import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";




export default function About(){
    return(
        <div>
            <Helmet><title>關於我們</title></Helmet>
            <Header />
            <Footer />
        </div>
    )
}